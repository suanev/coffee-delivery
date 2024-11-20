import { useState } from "react";
import { QuantityInputButton, QuantityInputContainer } from "./styles";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecreaseQuantity = () => {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <QuantityInputContainer>
      <QuantityInputButton onClick={handleDecreaseQuantity}>
        -
      </QuantityInputButton>
      <input
        type="number"
        min={0}
        max={99}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <QuantityInputButton onClick={handleIncreaseQuantity}>
        +
      </QuantityInputButton>
    </QuantityInputContainer>
  );
};

export default QuantityInput;
