import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem;
  max-width: 74rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  gap: 0.75rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;

  font-size: 14px;

  color: ${({ theme }) => theme.colors.purple};
  background: ${({ theme }) => theme.colors.purpleLight};
`;
