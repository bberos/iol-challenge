import styled from "styled-components";

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
  }
`;

export const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: sticky;
  z-index: 2;
  top: 25px;
  margin-top: 10px;
`;

export const FavouriteButton = styled.div`
  display: flex;
  border: 1px solid hsl(72, 71%, 56%, 0.8);
  align-items: center;
  width: 250px;
  height: 38px;
  border-radius: 4px;
  background-color: #282c34;
  justify-content: center;
  outline: 0;
  opacity: 0.9;
  transition: all 0.2s;
  box-shadow: 1px 7px 12px 0px rgb(0 0 0 / 75%);
  -webkit-box-shadow: 1px 7px 12px 0px rgb(0 0 0 / 75%);
  -moz-box-shadow: 1px 7px 12px 0px rgba(0, 0, 0, 0.75);
  h1 {
    font-size: 1.1rem;
    margin-right: 10px;
    font-weight: 500;
    color: #fdfdfd;
  }
  &:hover {
    opacity: 1;
    transform: scale(1.02);
  }
`;

// -webkit-align-items: center;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     background-color: hsl(0, 0%, 100%);
//     border-color: hsl(0, 0%, 80%);
//     border-radius: 4px;
//     border-style: solid;
//     border-width: 1px;
//     cursor: default;
//     display: -webkit-box;
//     display: -webkit-flex;
//     display: -ms-flexbox;
//     display: flex;
//     -webkit-box-flex-wrap: wrap;
//     -webkit-flex-wrap: wrap;
//     -ms-flex-wrap: wrap;
//     flex-wrap: wrap;
//     -webkit-box-pack: justify;
//     -webkit-justify-content: space-between;
//     justify-content: space-between;
//     min-height: 38px;
//     outline: 0!important;
//     position: relative;
//     -webkit-transition: all 100ms;
//     transition: all 100ms;
//     box-sizing: border-box;
