import styled from "styled-components";
import { media } from "../../styles/media";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    text-transform: uppercase;
    color: #40b5cb;
    font-size: 2rem;
    font-weight: 900;
    -webkit-text-stroke-width: 0.01px;
    -webkit-text-stroke-color: #b0cf40b3;
    ${media.mobileS} {
      margin-top: 30px;
    }
    ${media.laptop} {
      margin-top: 10px;
    }
  }
`;

export const SubHeader = styled.div`
  ${media.mobileS} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    z-index: 2;
  }
  ${media.laptop} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: sticky;
    z-index: 2;
    top: 25px;
    margin-top: 10px;
  }
`;

export const FavouriteButton = styled.div`
  display: flex;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.isDisabled ? "hsl(72, 71%, 56%, 0.8)" : "#878787"};
  align-items: center;
  height: 38px;
  border-radius: 4px;
  background-color: #282c34;
  justify-content: center;
  outline: 0;
  opacity: 0.9;
  transition: all 0.2s;
  box-shadow: 1px 7px 12px 0px rgb(0 0 0 / 40%);
  -webkit-box-shadow: 1px 7px 12px 0px rgb(0 0 0 / 40%);
  -moz-box-shadow: 1px 7px 12px 0px rgba(0, 0, 0, 0.4);
  ${media.mobileS} {
    margin-top: 15px;
    width: 300px;
    z-index: 1;
  }
  ${media.laptop} {
    margin-top: 0px;
    width: 250px;
    &:hover {
      opacity: 1;
      transform: ${(props) => (props.isDisabled ? "scale(1.02)" : "scale(1)")};
    }
  }
  h1 {
    font-size: 1.1rem;
    margin-right: 10px;
    font-weight: 500;
    color: ${(props) => (props.isDisabled ? "#fdfdfd" : "#878787")};
  }
`;
