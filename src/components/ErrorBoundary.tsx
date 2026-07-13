import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Catches any runtime crash in the tree below it. Instead of React's
 * default behaviour (a blank white page), visitors get a branded
 * message and a working way back to the homepage.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // Surfaced in the console for debugging; nothing sensitive shown to users.
    console.error('Unexpected error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-void flex flex-col items-center justify-center px-4 text-center">
          <p className="font-mono-label text-signal text-sm mb-4">[ something glitched ]</p>
          <h1 className="font-satoshi font-bold text-3xl sm:text-4xl text-white mb-4">
            That was not supposed to happen
          </h1>
          <p className="text-text-light mb-8 max-w-md">
            Something broke on our side. Head back to the homepage and everything will be where you
            left it.
          </p>
          <a
            href="/"
            className="btn-primary px-8 py-3.5 text-base inline-flex items-center justify-center"
          >
            Back to Homepage
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}
