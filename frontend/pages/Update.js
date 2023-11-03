import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [rez, setRez] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const rezId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setRez((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/rezs/${rezId}`, rez);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Update the Rez</h1>
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
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all rezs</Link>
    </div>
  );
};

export default Update;