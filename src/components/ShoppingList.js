import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const[selectedCategory,setSelectedCategory]=useState("All")

function handleCategory(event){
setSelectedCategory(event.target.value)
}
const displayItems=items.filter((item) => selectedCategory === "All" || item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleCategory}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
