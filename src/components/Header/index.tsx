import { MapPin } from "phosphor-react";

import logo from "../../assets/logo.svg";
import Cart from "../Cart";
import { HeaderContainer, LocationContainer, Nav } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee Delivery" />
      <Nav>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationContainer>
        <Cart />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
