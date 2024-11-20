import { ShoppingCart } from "phosphor-react";

import { CartButtonContainer, CartButtonIcon } from "./styles";

interface CartButtonProps {
  onClick: () => void;
  color?: string;
  backgroundColor?: string;
}

const CartButton = ({ onClick, color, backgroundColor }: CartButtonProps) => {
  return (
    <CartButtonContainer onClick={onClick}>
      <CartButtonIcon $color={color} $backgroundColor={backgroundColor}>
        <ShoppingCart size={22} weight="fill" />
      </CartButtonIcon>
    </CartButtonContainer>
  );
};

export default CartButton;
