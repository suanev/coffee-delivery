import styled from "styled-components";

export const CartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transition: 0.2s;
    filter: brightness(1.1);
  }
`;

export const CartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.yellowLight};
  background: ${({ theme }) => theme.colors.yellowDark};
`;
