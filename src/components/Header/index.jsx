import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "../../context/FavouritesProvider";
import Logo from "./../../assets/images/rickandmorty_logo.svg";
import BackIcon from "./../../assets/icons/backIcon.svg";
import { Container } from "./styles";
function Header() {
  const { isFavouritePage } = useFavourites();

  return (
    <Container>
      {isFavouritePage ? (
        <Link to="/">
          <img src={BackIcon} alt="Back" className="backIcon" />
        </Link>
      ) : null}
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
    </Container>
  );
}

export default Header;
