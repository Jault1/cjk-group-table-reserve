import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Rezs = () => {
  const [rezs, setRezs] = useState([]);

  useEffect(() => {
    const fetchAllRezs = async () => {
      try {
        const res = await axios.get("http://localhost:3001/rezs");
        setRezs(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllRezs();
  }, []);

  console.log(rezs);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/rezs/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Lama Rez Shop</h1>
      <div className="rezs">
        {rezs.map((rez) => (
          <div key={rez.id} className="rez">
            <img src={rez.cover} alt="" />
            <h2>{rez.title}</h2>
            <p>{rez.desc}</p>
            <span>${rez.price}</span>
            <button className="delete" onClick={() => handleDelete(rez.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${rez.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new rez
        </Link>
      </button>
    </div>
  );
};

export default Rezs;