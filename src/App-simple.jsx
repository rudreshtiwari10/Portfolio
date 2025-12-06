// Simple test component
function AppSimple() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#000814',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px'
    }}>
      <div>
        <h1>Portfolio Loading Test</h1>
        <p>If you see this, React is working!</p>
      </div>
    </div>
  );
}

export default AppSimple;
