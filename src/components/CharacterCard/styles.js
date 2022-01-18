import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #121212;
  width: 15vw;
  align-items: center;
  border-radius: 5px;
  margin: 10px 10px;
  cursor: pointer;
  transition: all 0.5s;
  z-index: 1;
  &:hover {
    opacity: 0.8;
  }
  h1 {
    font-size: 0.6rem;
    width: 100%;
  }
  .characterImage {
    width: 100%;
    border-radius: 0 0 5px 5px;
  }
`;
