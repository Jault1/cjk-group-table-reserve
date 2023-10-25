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
    handlerAddItem(itemName,itemPrice, itemDescription);
    alert("Form submission: " + itemName + " | " + itemPrice + " | " + itemDescription)
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input id="itemName"
          type="text"
          name="name"
          placeholder="Item name"
          onChange={handlerName}
        /><br></br>
        <input id="itemPrice"
          type="text"
          name="price"
          placeholder="Price"
          onChange={handlerPrice}
        /><br></br>
        <input id="itemDescription"
          type="text"
          name="description"
          placeholder="Description"
          onChange={handlerDescription}
        /><br></br>
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddItemForm;
