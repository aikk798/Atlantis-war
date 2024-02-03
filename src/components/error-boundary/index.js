import React from 'react'

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: null,
  }

  static getDerivedStateFromError(error) {
    console.warn(`catchError: ${error}`)

    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.warn(`catchError: ${error}`)
  }

  render() {
    if (this.state.hasError) {
      return <div />
    }

    return this.props.children
  }
}
