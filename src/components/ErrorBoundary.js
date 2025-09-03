import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "20px", color: "red" }}>
          <h2>Something went wrong. Please try again later.</h2>
          <pre>{this.state.error?.message}</pre> {/* ✅ Shows error on screen */}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
