import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.baseText};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    a {
        text-decoration: none;
    }

    button, a {
        border: none;
        cursor: pointer;
        text-decoration: none;
        transition: filter 0.2s;
    }

    button[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.yellow};
    }

    &::-webkit-scrollbar {
        width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.baseButton};
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.purple};
        border-radius: 8px;
    }

`;
