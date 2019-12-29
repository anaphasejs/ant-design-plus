import React from "react";
import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";

const LogoType = styled.div`
  color: #000;
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 50px;
`;

const PageWrap = styled.div`
  margin: 0px auto;
  width: 600px;
  max-width: 100%;
`;

const PageGrid = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

interface Props {
  logo?: React.ReactNode;
  children?: any;
}

const CenterLayout: React.FC<Props> = ({ children, logo }: Props) => (
  <PageWrap>
    <PageGrid>
      <LogoType>{logo}</LogoType>
      <div>{children}</div>
      <Global
        styles={css`
          body {
            background: #f1f5f9;
          }
        `}
      />
    </PageGrid>
  </PageWrap>
);

export default CenterLayout;
