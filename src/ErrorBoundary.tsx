import { Button } from "antd";
import React, { Component, ErrorInfo, PropsWithChildren } from "react";
import CenterLayout from "./CenterLayout";
import { Module, ModuleInner } from "./Module";

type Props = PropsWithChildren<{
  fullPage?: boolean;
  onReportFeedback?: () => void;
  onCatch?: (err: Error, errorInfo: ErrorInfo) => void;
}>;

interface State {
  eventId: string | null;
  hasError?: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { eventId: null };
  }

  static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (this.props.onCatch) {
      this.props.onCatch(error, errorInfo);
    }
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      const fallbackUI = (
        <>
          <h2>Something went wrong!</h2>
          <p>
            Our engineers have been notified. If you would like to report what
            you were doing when this error showed up, it would help up fix
            things faster!
          </p>
          <Button type="primary" onClick={this.props.onReportFeedback}>
            Report feedback
          </Button>
        </>
      );
      if (this.props.fullPage) {
        return (
          <CenterLayout>
            <Module>
              <ModuleInner>{fallbackUI}</ModuleInner>
            </Module>
          </CenterLayout>
        );
      }
      return fallbackUI;
    }

    //when there's not an error, render children untouched
    return this.props.children;
  }
}

export default ErrorBoundary;
