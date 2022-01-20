import styled from "styled-components";
import { media } from "../../styles/media";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 25px;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #030303c2;
  box-shadow: 1px 4px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 4px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 4px 7px 0px rgba(0, 0, 0, 0.75);
  ${media.mobileS} {
    z-index: 3;
  }
  ${media.laptop} {
    z-index: 2;
  }
  .backIcon {
    position: absolute;
    left: 0;
    margin-left: 20px;
    width: 60px;
    transition: all 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
    }
    ${media.mobileS} {
      top: 22px;
    }
    ${media.laptop} {
      top: 40px;
    }
  }
  .logo {
    ${media.mobileS} {
      width: 150px;
    }
    ${media.laptop} {
      width: 250px;
    }
  }
`;
