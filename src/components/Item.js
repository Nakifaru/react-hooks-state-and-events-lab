import React, { useState } from "react";

function Item({ name, category }) {

  const[isCart, setIsCart] = useState(false);

  function handleClick() {
    setIsCart((isCart) => !isCart)
  }

  const cart = isCart ? "in-cart" : ""
  const display = isCart ? "Add to Cart" : "Remove From Cart"

  return (
    <li className={cart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{display}</button>
    </li>
  );
}

export default Item;
