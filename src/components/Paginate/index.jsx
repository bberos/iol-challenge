import React from "react";
import ReactPaginate from "react-paginate";
import { Container } from "./styles";
export default function Paginate({ totalPaginas, handleOnPageChange }) {
  return (
    <Container style={{ display: "flex", flexDirection: "row" }}>
      <ReactPaginate
        className="paginate"
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={<a href="">...</a>}
        breakClassName={"break-me"}
        pageCount={totalPaginas}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handleOnPageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </Container>
  );
}
