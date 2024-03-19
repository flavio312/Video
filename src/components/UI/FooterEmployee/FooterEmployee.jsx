import React from "react";
import styled from "styled-components";
import Title from "../Title/Title";

const FooterEmploy = styled.footer`
  background-color: #66f8fd;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterEmployee = () => {
  return (
    <FooterEmploy>
      <Title caption="Empleado" color="#000000" /> {/* Cambia el color del texto */}
      <Title caption="Turno" color="#000000" /> {/* Cambia el color del texto */}
    </FooterEmploy>
  );
};

export default FooterEmployee;
