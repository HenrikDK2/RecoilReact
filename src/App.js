import React from "react";
import styled from "styled-components";
import Item from "./components/productComponent";

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  padding: 0;
  list-style: none;
  grid-auto-rows: 300px;
  place-content: center;
  margin: 200px auto;
  grid-gap: 20px;
  max-width: 900px;
`;

function App() {
  return (
    <main>
      <section>
        <Heading>Recoil Library Test</Heading>
        <ProductGrid>
          <Item
            title="Produkt"
            price="50"
            src="https://via.placeholder.com/350x150"
            alt="Produkt"
          />
          <Item
            title="Produkt"
            price="50"
            src="https://via.placeholder.com/350x150"
            alt="Produkt"
          />
          <Item
            title="Produkt"
            price="50"
            src="https://via.placeholder.com/350x150"
            alt="Produkt"
          />
          <Item
            title="Produkt"
            price="50"
            src="https://via.placeholder.com/350x150"
            alt="Produkt"
          />
          <Item
            title="Produkt"
            price="50"
            src="https://via.placeholder.com/350x150"
            alt="Produkt"
          />
        </ProductGrid>
      </section>
    </main>
  );
}

export default App;
