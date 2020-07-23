import React, { useState } from "react";
import styled from "styled-components";
import { cartState } from "../../Store";
import { useRecoilState } from "recoil";

const InputNumber = styled.input`
  width: 30px;
  margin: 0 10px 0 auto;
`;

const Input = ({ index, item }) => {
  const [thisCart, setThisCart] = useRecoilState(cartState);

  return (
    <InputNumber
      type="number"
      onChange={(e) => {
        let currentCart = JSON.parse(JSON.stringify(thisCart));
        if (e.target.value < 1) delete currentCart[index];
        else {
          currentCart[index].amount = +e.currentTarget.value;
          currentCart[index].totalPrice = currentCart[index].amount * currentCart[index].price;
        }
        setThisCart(currentCart);
      }}
      value={item.amount}
    />
  );
};

export default Input;
