import React from "react";
import ReactPaginate from "react-paginate";
import { Container } from "./styles";
function Paginate({ totalPaginas, setPage }) {
  const handleOnPageChange = (data) => {
    let selected = data.selected + 1;
    setPage(selected);
  };
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

export default React.memo(Paginate);
