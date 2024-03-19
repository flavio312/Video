import React from "react";
import styled from "styled-components";

const StyleTitle = styled.h1`
  color: ${(props) => props.color || "#F7B5CD"}; 
  font-size: 24px;
  font-weight: bold;
`;

const Title = ({ caption, color }) => {
  return <StyleTitle color={color}>{caption}</StyleTitle>;
};

export default Title;
