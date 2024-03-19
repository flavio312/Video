import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import Title from "../Title/Title";

const HeaderContainer = styled.header`
  background-color: #231F20;
  padding: 10px;
  display: flex;
  color: "#F7B5CD";
  align-items: center;
  border: 5px solid #ED6FBA;
  border-radius: 8px;
`;

const Logo = styled.img`
  width: 200px;
  margin-right: 10px;
`;

const RightAlignedContent = styled.div`
  margin-left: auto;
`;

function Header({ onLogout }) {
  const handleLogout = () => {
    // Aquí puedes agregar lógica para limpiar la sesión, como borrar el token JWT del almacenamiento local.
    // Luego, llamas a la función `onLogout` para notificar al componente padre que se ha cerrado la sesión.
    onLogout();
  };

  return (
    <>
      <HeaderContainer>
        <Logo src="/Diaz.jpg" alt="Logo" />
        <Title caption="Novedades Diaz"  color="#F7B5CD"/>
        <RightAlignedContent>
          <Button caption="Salir" onClick={handleLogout} />
        </RightAlignedContent>
      </HeaderContainer>
    </>
  );
}

export default Header;
