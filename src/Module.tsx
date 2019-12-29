import React from "react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import ErrorBoundary from "./ErrorBoundary";

export const Module = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
`;

type ModuleInnerProps = PropsWithChildren<{
  className?: string;
}>;

export const ModuleInner: React.FC<ModuleInnerProps> = ({
  className,
  children
}: ModuleInnerProps) => {
  return (
    <ErrorBoundary>
      <ModuleInnerWrapper className={className}>{children}</ModuleInnerWrapper>
    </ErrorBoundary>
  );
};

const ModuleInnerWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;
`;

export const ModuleInnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModuleColumn = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 20px;
`;

export const ModuleRow = styled.div`
  display: flex;
  ${Module} {
    :not(:last-child) {
      margin-right: 5px;
    }
    :not(:first-child) {
      margin-left: 5px;
    }
    flex: 1 1 0px;
  }
`;
