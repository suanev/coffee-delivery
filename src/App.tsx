import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Router from "./routes";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Router />
      <GlobalStyles />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
