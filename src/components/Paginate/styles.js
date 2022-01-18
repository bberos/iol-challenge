import styled from "styled-components";

export const Container = styled.div`
  .paginate {
    display: flex;
    width: 100%;
    justify-content: center;
    li {
      list-style: none;
      cursor: pointer;
      padding: 3px 3px;
      border: 1px solid grey;
    }
  }
  .active {
    background-color: black;
  }
`;
