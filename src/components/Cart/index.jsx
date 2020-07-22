import React from "react";
import styled from "styled-components";
import { cartState } from "../../Store";
import { useRecoilState } from "recoil";

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
  padding: 0;
  margin: 0 auto;
  & > li {
  }
`;

const FigureContainer = styled.figure`
  width: auto;
  height: 50px;
  margin: 0;
  & > img {
    display: block;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Product = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
  & > input {
    width: 30px;
    margin: 0 10px 0 auto;
  }
  & > h4 {
    margin: 0 20px;
  }
`;

const Cart = () => {
  const [thisCart, setThisCart] = useRecoilState(cartState);

  return (
    <CartContainer>
      <CartHeading>Shopping Cart</CartHeading>
      <CartList>
        {thisCart.map((item, i) => (
          <Product key={i}>
            <FigureContainer>
              <img onDragStart={(e) => e.preventDefault()} src={item.src} alt="Product" />
            </FigureContainer>
            <h4>{item.title}</h4>
            {console.log(item)}
            <input
              type="number"
              onChange={(e) => {
                console.log("2");
                setThisCart(([...thisCart][i] = { ...item, amount: e.currentTarget.value }));
              }}
              value={item.amount}
            />
            <p>
              {item.price}
              <span>DKK</span>
            </p>
          </Product>
        ))}
      </CartList>
      <Price>
        Price: <span>DKK</span>
      </Price>
    </CartContainer>
  );
};

export default Cart;
