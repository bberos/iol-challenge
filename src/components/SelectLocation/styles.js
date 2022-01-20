import styled from "styled-components";
import { media } from "../../styles/media";
export const Container = styled.div`
  ${media.mobileS} {
    width: 300px;
    margin-right: 0px;
  }
  ${media.laptop} {
    width: 250px;
    margin-right: 100px;
  }
  .select {
    color: #fdfdfd;
    box-shadow: 1px 7px 12px 0px rgb(0 0 0 / 75%);
    -webkit-box-shadow: 1px 7px 12px 0px rgb(0 0 0 / 75%);
    -moz-box-shadow: 1px 7px 12px 0px rgba(0, 0, 0, 0.75);
    transition: all 0.2s;
    ${media.laptop} {
      &:hover {
        transform: scale(1.02);
        z-index: 20;
      }
    }
  }
  .selectPrefix {
    &__placeholder {
      color: #fdfdfd;
    }
    &__single-value {
      color: #fdfdfd;
    }
    &__control {
      background-color: #282c34;
      border-color: hsl(72, 71%, 56%, 0.8);
      box-shadow: none;
      &:hover {
        border-color: hsl(72, 71%, 56%, 0.8);
      }
    }
    &__menu {
      background-color: #282c34;
    }
    &__option {
      &:hover {
        background-color: #40b5cbb3;
      }
      &--is-focused {
        background-color: #40b5cbb3;
      }
    }
    &__indicator-separator {
      background-color: #fdfdfd;
      &:hover {
        background-color: #fdfdfd;
        opacity: 1;
      }
    }
    &__dropdown-indicator {
      color: #fdfdfd;
      &:hover {
        color: #bfde3fcc;
      }
    }
  }
`;
