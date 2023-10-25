import {useState, useEffect} from "react";
import ItemDisplay from "./components/ItemDisplay";
import AddItemForm from "./components/AddItemForm";

import './App.css';
import apiConn from './api/conn';

function App() {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    try {
      const response = await apiConn.get("/items");
      console.log(response.data);
      setItems(response.data);
    } catch (error) {
      console.log(error.message);
    }
  } 

  const createItem = async (itemName) => {
    try {
      const response = await apiConn.post("/items", {name: itemName});
      console.log(response.data);
      getItems();
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <h1>Item List</h1>
      <AddItemForm handlerAddItem={createItem}/>
      <ItemDisplay list={items}/>
    </div>
  );
}

export default App;
