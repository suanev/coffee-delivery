import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Router from "./routes";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
