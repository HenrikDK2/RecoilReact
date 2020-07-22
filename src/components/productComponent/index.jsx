import React from "react";
import styled from "styled-components";
import { cartState } from "../../Store";
import { useRecoilState } from "recoil";

const ProductContainer = styled.li`
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #000;
  border-radius: 5px;
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

const FigureContainer = styled.figure`
  width: auto;
  height: 150px;
  margin: 0;
  & > img {
    display: block;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const BuyButton = styled.button`
  display: block;
  margin: auto;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem 0;
  width: 80%;
  border: none;
  background: yellow;
  transition: all 0.2s;
  font-weight: bold;
  background: #ffe300;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProductComponent = ({ src, alt, title, price, id }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const addProductToCart = () => {
    const product = {
      title,
      id,
      price,
      src,
    };
    setCart([...cart, product]);
  };

  return (
    <ProductContainer>
      <FigureContainer>
        <img onDragStart={(e) => e.preventDefault()} src={src} alt={alt} />
      </FigureContainer>
      <h3>{title}</h3>
      <p>
        {price}
        <span>DKK</span>
      </p>
      <BuyButton onClick={(e) => addProductToCart()}>Køb Nu!</BuyButton>
    </ProductContainer>
  );
};

export default ProductComponent;
