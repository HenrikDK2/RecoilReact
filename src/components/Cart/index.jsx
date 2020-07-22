import React from "react";
import styled from "styled-components";

const CartContainer = styled.article`
  min-height: 300px;
  width: 400px;
  background: #fff;
  position: absolute;
  right: 100px;
  bottom: 0;
  padding: 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: #000;
`;

const CartHeading = styled.h2`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #c5c5c5;
`;

const Price = styled.p`
  text-align: center;
  font-size: 1.75rem;
  margin: auto 0 0 0;
`;

const CartList = styled.ul`
  list-style: none;
  & > li {
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

const Cart = () => {
  return (
    <CartContainer>
      <CartHeading>Shopping Cart</CartHeading>
      <CartList>
        {/*         {cart.map((item) => (
          <li>
            <FigureContainer>
              <img onDragStart={(e) => e.preventDefault()} src={item.src} alt="Product" />
              <h4>{item.title}</h4>
              <p>
                {item.price}
                <span>DKK</span>
              </p>
            </FigureContainer>
          </li>
        ))} */}
      </CartList>
      <Price>
        Price: <span>DKK</span>
      </Price>
    </CartContainer>
  );
};

export default Cart;
