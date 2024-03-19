import ViewEmployees from "../ViewEmployee/ViewEmployees";
import Header from "../../UI/Header/Header";
import Nav from "../../UI/Nav/Nav";
import CardEmployee from "../../UI/CardEmploye/CardEmployee";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

function Employees() {
  return (
    <>
      <Header />
      <Nav /> <br />
      <Container>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <CardEmployee /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <ViewEmployees />
      </Container>
    </>
  );
}

export default Employees;
