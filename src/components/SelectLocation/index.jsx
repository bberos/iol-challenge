import React from "react";
import ReactSelect from "react-select";
import { Container } from "./styles";
export default function SelectLocation(props) {
  const { options, value, setSelectedLocation, setPage } = props;
  const handleChangeLocation = (selectedOption) => {
    setSelectedLocation(selectedOption);
    setPage(1);
  };
  return (
    <Container>
      <ReactSelect
        value={value}
        onChange={handleChangeLocation}
        options={options}
        placeholder="Buscar por Locación"
        className="select"
        closeMenuOnScroll="onScroll"
        classNamePrefix="selectPrefix"
      />
    </Container>
  );
}
