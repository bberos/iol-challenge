import styled from "styled-components";
import { media } from "../../styles/media";
export const Container = styled.div`
  .paginate {
    display: flex;
    width: 100%;
    justify-content: center;
    li {
      list-style: none;
      cursor: pointer;
      padding: 4px 4px;
      font-size: 1.1rem;
      border: 1px solid hsl(72, 71%, 56%, 0.8);
      ${media.desktop} {
        font-size: 1.3rem;
      }
    }
  }
  .active {
    background-color: #40b5cb85;
  }
`;
