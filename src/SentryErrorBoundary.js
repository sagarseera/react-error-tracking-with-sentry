import { Component } from "react";
import * as Sentry from '@sentry/browser';

export default class SentryErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    if (this.state.error) {
      console.log("React Error");
    }
    return this.props.children;
  }
}