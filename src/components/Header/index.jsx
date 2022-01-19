import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/rickandmorty_logo.svg";
import { Container } from "./styles";
function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </Container>
  );
}

export default Header;
