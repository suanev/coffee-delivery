import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;

    color: ${(props) => props.theme.colors.baseText};
    background: ${(props) => props.theme.colors.background};
  }

  body, input, textarea, button {
    ${({ theme }) => theme.fonts.textM};
  }

  button {
    border: none;
    cursor: pointer;
  }
`;
