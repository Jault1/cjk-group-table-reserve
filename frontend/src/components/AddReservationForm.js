import './../App.css';

import { useState } from "react";

const AddItemForm = ({ handlerAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handlerName = (event) => {
    setItemName(event.target.value);
  };

  const handlerPrice = (event) => {
    setItemPrice(event.target.value);
  };

  const handlerDescription = (event) => {
    setItemDescription(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    alert("Form submission: " + itemName + " | " + itemPrice + " | " + itemDescription)

    handlerAddItem(itemName, itemPrice, itemDescription).then(result=>console.log(result));
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
      <label for="itemName">Name:</label>&nbsp;&nbsp;&nbsp;
        <input id="itemName"
          type="text"
          name="name"
          placeholder="Item name"
          onChange={handlerName}
        /><br></br>

      <label for="itemPrice">Price:</label>&nbsp;&nbsp;&nbsp;
        <input id="itemPrice"
          type="text"
          name="price"
          placeholder="Price"
          onChange={handlerPrice}
        /><br></br>
        
        <label for="itemDescription">Description:</label>&nbsp;&nbsp;&nbsp;
        <input id="itemDescription"
          type="text"
          name="description"
          placeholder="Description"
          onChange={handlerDescription}
        /><br></br>
        <button className="btn btn-primary px-4 py-2 m-4">Add new</button>
      </form>
    </div>
  );
};

export default AddItemForm;
