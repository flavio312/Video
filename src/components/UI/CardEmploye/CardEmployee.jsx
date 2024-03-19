import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Title from "../Title/Title";
import cardData from "../../../utils/cardDeployee";
import "./CardEmployee.css"

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CardTitle = styled(Title)`
  text-align: center;
  margin-left: 10px;
  color: pink;
`;

function CardEmployee() {
  return (
    <CardsContainer>
      {cardData.map((card, index) => (
        <Link className="SingleCards" key={index} to={card.to}>
          <div className="card-content">
          {card.icon && <FontAwesomeIcon icon={card.icon} className="card-icon"/>}
          <CardTitle caption={card.title} />
          </div>
        </Link>
      ))}
    </CardsContainer>
    
  );
}

export default CardEmployee;
