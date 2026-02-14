import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;

    const handleMouseMove = (e) => {
      if (cursor && cursorGlow) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Outer glow */}
      <div
        ref={cursorGlowRef}
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-screen"
        style={{
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.4) 0%, transparent 70%)",
          filter: "blur(8px)"
        }}
      />

      {/* Inner dot */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 pointer-events-none z-50 bg-blue-400 rounded-full"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 10px rgba(96, 165, 250, 0.8)"
        }}
      />
    </>
  );
}
