import styled from "styled-components";
import { media } from "./../../styles/media";

export const Container = styled.div`
  display: flex;
  height: 85vh;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  border: 1px solid hsl(72, 71%, 56%, 0.8);
  background-color: #1f2021;
  border-radius: 5px;
  padding: 20px 20px;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 7px 12px 0px rgb(0 0 0 / 75%);
  -webkit-box-shadow: 1px 7px 12px 0px rgb(0 0 0 / 75%);
  -moz-box-shadow: 1px 7px 12px 0px rgba(0, 0, 0, 0.75);
  ${media.mobileS} {
    height: 60vh;
    flex-direction: column;
  }
  ${media.laptop} {
    flex-direction: row;
  }
  ${media.desktop} {
    height: 30vh;
    width: 35%;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  img {
    width: 100%;
    border-radius: 2.5px;
  }
`;

export const InfoContainer = styled.div`
  height: 200px;
  margin-left: 20px;
  /* align-self: flex-start; */
  h1 {
    /* margin: 0; */
    font-size: 1.15rem;
    text-align: left;
    ${media.laptop} {
      font-size: 1.5rem;
    }
    b {
      text-decoration: underline;
    }
  }
`;
