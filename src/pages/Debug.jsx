export default function Debug() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#fff',
      color: '#000',
      fontFamily: 'system-ui',
    }}>
      <div>
        <h1>✓ React is working!</h1>
        <p>If you see this, React is rendering correctly.</p>
        <p>The issue is with other components or i18n.</p>
      </div>
    </div>
  )
}
