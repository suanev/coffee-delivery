import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`;

export const DefaultLayoutHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
