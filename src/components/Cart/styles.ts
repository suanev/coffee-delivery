import styled from "styled-components";

interface CartButtonProps {
  $color?: string;
  $backgroundColor?: string;
}

export const CartButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    transition: 0.2s;
    filter: brightness(1.1);
  }
`;

export const CartButtonIcon = styled.div<CartButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 18px;
  color: ${({ theme, $color }) => $color || theme.colors.yellowLight};
  background: ${({ theme, $backgroundColor }) =>
    $backgroundColor || theme.colors.yellowDark};
`;
