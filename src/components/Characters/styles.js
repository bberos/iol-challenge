import styled from "styled-components";
import { media } from "./../../styles/media";

export const Container = styled.div``;
export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0px 10px;
  ${media.laptopL} {
    padding: 0px 60px;
  }
  ${media.desktopL} {
    padding: 0px 180px;
  }
`;
