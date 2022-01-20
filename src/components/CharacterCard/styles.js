import styled from "styled-components";
import { media } from "./../../styles/media";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 15vw;
  align-items: center;
  margin: 10px 10px;
  /* cursor: pointer; */
  transition: all 0.5s;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
  .characterImage {
    width: 100%;
    border-radius: 0 0 5px 5px;
  }
`;
export const Head = styled.div`
  background-color: #121212;
  height: 5vh;
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  padding: 5px 0px;
  justify-content: center;
  ${media.laptop} {
    height: 6.5vh;
  }
`;
export const HeadContainer = styled.div`
  display: flex;
  width: 100%;
  .nameContainer {
    width: 85%;
    ${media.laptop} {
      width: 83%;
    }
  }
  h1 {
    font-size: 0.67rem;
    width: 100%;
    padding: 5px 0px;
    text-align: left;
    padding-left: 7px;
    ${media.desktop} {
      font-size: 1rem;
      padding-left: 10px;
    }
  }
  .icon {
    z-index: 10;
    cursor: pointer;
    transition: all 0.2s;
    ${media.desktop} {
      transform: scale(1.5);
    }
    &:hover {
      transform: scale(1.05);
      ${media.desktop} {
        transform: scale(1.6);
      }
    }
  }
`;
