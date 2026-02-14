import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas size to viewport (fixed positioning)
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(`Canvas resized: ${canvas.width}x${canvas.height}`);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles (stars)
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 3 + 2; // Larger particles for better visibility
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.6; // Higher base opacity
      }

      update() {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const repelRadius = 150;

        // Repel effect when mouse is near
        if (distance < repelRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (repelRadius - distance) / repelRadius;
          this.x -= Math.cos(angle) * force * 3;
          this.y -= Math.sin(angle) * force * 3;
        } else {
          // Gradually return to base position - slower for gentler animation
          this.x += (this.baseX - this.x) * 0.02;
          this.y += (this.baseY - this.y) * 0.02;
        }

        // Update base position for drift
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Wrap around screen for base position
        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseY > canvas.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas.height;
      }

      draw() {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Torch effect - brighten particles near cursor
        const torchRadius = 350;
        let brightness = this.opacity;
        if (distance < torchRadius) {
          brightness = Math.min(1, this.opacity + (1 - distance / torchRadius) * 0.8);
        }

        ctx.fillStyle = `rgba(96, 165, 250, ${brightness})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    particlesRef.current = []; // Clear any existing particles
    const particleCount = 80; // Reduced for less density
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    console.log(`Background initialized with ${particleCount} particles`);

    // Draw connections (constellations)
    const drawConnections = () => {
      const maxDistance = 120; // Reduced for fewer connections
      const breakRadius = 120; // Radius where connections break

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            // Check distance from mouse to connection line
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2;
            const mouseDx = mouseRef.current.x - midX;
            const mouseDy = mouseRef.current.y - midY;
            const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

            // Break connection if mouse is too close
            if (mouseDistance < breakRadius) {
              continue; // Skip drawing this connection
            }

            const torchRadius = 350;
            let opacity = (1 - distance / maxDistance) * 0.4; // More visible base opacity

            // Brighten connections near cursor (torch effect)
            if (mouseDistance < torchRadius && mouseDistance >= breakRadius) {
              opacity += (1 - mouseDistance / torchRadius) * 0.6;
            }

            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.lineWidth = 1.5; // Thicker lines
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    // Initialize mouse position
    mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#000814");
      gradient.addColorStop(0.5, "#001d3d");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw torch glow effect
      if (mouseRef.current.x > 0 && mouseRef.current.y > 0) {
        const torchGradient = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          450
        );
        torchGradient.addColorStop(0, "rgba(29, 78, 216, 0.25)");
        torchGradient.addColorStop(0.3, "rgba(29, 78, 216, 0.12)");
        torchGradient.addColorStop(0.6, "rgba(29, 78, 216, 0.05)");
        torchGradient.addColorStop(1, "transparent");
        ctx.fillStyle = torchGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw connections first (behind particles)
      drawConnections();

      // Update and draw particles
      if (particlesRef.current && particlesRef.current.length > 0) {
        particlesRef.current.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
}