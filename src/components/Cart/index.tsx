import { ShoppingCart } from 'phosphor-react';

import { CartContainer, CartIcon } from './styles';

const Cart = () => {
  return (
    <CartContainer>
      <CartIcon>
        <ShoppingCart size={22} weight="fill" />
      </CartIcon>
    </CartContainer>
  );
};

export default Cart;
