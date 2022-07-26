import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  
  
  function handleCart(){
    setInCart(!inCart);
    
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add to cart" onClick={handleCart} >Add to Cart</button>
    </li>
  );
}

export default Item;
