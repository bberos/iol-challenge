import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;
export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
