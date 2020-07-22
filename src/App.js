import React from "react";
import styled from "styled-components";
import Item from "./components/ProductComponent";
import Cart from "./components/Cart";
import { productsState } from "./Store";
import { useRecoilValue } from "recoil";

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 250px);
  padding: 0;
  list-style: none;
  grid-auto-rows: 300px;
  place-content: center;
  margin: 200px auto;
  grid-gap: 20px;
  max-width: 900px;
`;

function App() {
  const products = useRecoilValue(productsState);

  return (
    <main>
      <section>
        <Heading>Recoil Library Test</Heading>
        <ProductGrid>
          {products.map((product, i) => (
            <Item
              key={i}
              title={product.title}
              price={product.price}
              src={product.src}
              id={product.id}
              alt="Produkt"
            />
          ))}
        </ProductGrid>
        <Cart />
      </section>
    </main>
  );
}

export default App;
