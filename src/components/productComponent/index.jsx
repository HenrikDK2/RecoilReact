import React from "react";
import styled from "styled-components";

const FigureContainer = styled.figure`
  width: 100%;
  height: 150px;
  margin: 0;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  & p {
    color: green;
    font-weight: bold;
    text-align: center;
    margin: 0;
    & > span {
    }
  }
  & h3 {
    margin-bottom: 5px;
    text-align: center;
  }
`;

const BuyButton = styled.button`
  display: block;
  margin: auto;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0 2rem;
`;

const productComponent = ({ src, alt, title, price }) => {
  return (
    <ProductContainer>
      <FigureContainer>
        <img src={src} alt={alt} />
      </FigureContainer>
      <h3>{title}</h3>
      <p>
        {price}
        <span>DKK</span>
      </p>
      <BuyButton>Køb</BuyButton>
    </ProductContainer>
  );
};

export default productComponent;
