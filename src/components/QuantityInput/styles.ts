import styled from "styled-components";

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 72px;

  border-radius: 6px;
  background: ${({ theme }) => theme.colors.baseInput};

  input {
    width: 100%;
    text-align: center;
    border: none;
    background: transparent;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const QuantityInputButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.purple};

  :hover {
    transition: 0.2s;
    filter: brightness(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
