import { HeaderContainer, LocationContainer, Nav } from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin } from "phosphor-react";
import Cart from "../Cart";

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
