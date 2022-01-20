import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 25px;
  align-items: center;
  position: sticky;
  z-index: 2;
  top: 0;
  background-color: #030303c2;
  box-shadow: 1px 4px 7px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 4px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 4px 7px 0px rgba(0, 0, 0, 0.75);
  .backIcon {
    position: absolute;
    left: 0;
    margin-left: 20px;
    top: 40px;
    width: 60px;
    transition: all 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
  .logo {
    width: 250px;
  }
`;
