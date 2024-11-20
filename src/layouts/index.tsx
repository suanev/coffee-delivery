import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import { DefaultLayoutContainer, DefaultLayoutHeaderContainer } from "./styles";

const DefaultLayout = () => {
  return (
    <DefaultLayoutContainer>
      <DefaultLayoutHeaderContainer>
        <Header />
      </DefaultLayoutHeaderContainer>

      <Outlet />
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
