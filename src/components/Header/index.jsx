import React from "react";
import Logo from "./../../assets/images/rickandmorty_logo.svg";
import { Container } from "./styles";
function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
    </Container>
  );
}

export default Header;
