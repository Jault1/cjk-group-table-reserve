import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [rez, setRez] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setRez((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3100/rez", rez);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
      <h1>Add New Rez</h1>
      <input
        type="text"
        placeholder="Rez title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Rez desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Rez price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Rez cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all rezs</Link>
    </div>
  );
};

export default Add;