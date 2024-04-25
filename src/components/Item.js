import React,{useState} from "react";

function Item({ name, category }) {

  const [isAdded,setIsAdded]=useState(false)
  const cartClass=isAdded ? "in-cart" : ""
  const buttonClass=isAdded ? "remove" : "add"

  function handleCart(){
    setIsAdded((isAdded=>!isAdded))
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClass} onClick={handleCart}>{isAdded ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
