import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error)
    console.error('Error info:', errorInfo)
    this.setState({ errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          minHeight: '100vh',
          background: '#2d4a2b',
          color: '#faf9f6',
          padding: '2rem',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          overflow: 'auto',
        }}>
          <h1 style={{ color: '#ff6b6b', marginBottom: '1rem' }}>❌ Error Details</h1>

          <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(255,107,107,0.1)', borderRadius: '4px' }}>
            <strong>Message:</strong>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: '0.5rem 0 0 0' }}>
              {this.state.error?.message}
            </pre>
          </div>

          <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(201,168,76,0.1)', borderRadius: '4px', maxHeight: '400px', overflow: 'auto' }}>
            <strong>Stack:</strong>
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: '0.5rem 0 0 0', fontSize: '0.8rem' }}>
              {this.state.error?.stack}
            </pre>
          </div>

          {this.state.errorInfo && (
            <div style={{ marginBottom: '2rem', padding: '1rem', background: 'rgba(100,200,255,0.1)', borderRadius: '4px', maxHeight: '300px', overflow: 'auto' }}>
              <strong>Component Stack:</strong>
              <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', margin: '0.5rem 0 0 0', fontSize: '0.75rem', color: '#64c8ff' }}>
                {this.state.errorInfo.componentStack}
              </pre>
            </div>
          )}

          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.5rem',
              background: '#c9a84c',
              color: '#2d4a2b',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
