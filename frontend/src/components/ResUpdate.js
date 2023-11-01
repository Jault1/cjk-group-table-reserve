import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const ResUpdate = () => {
  const [reservation, setReservation] = useState({
    no_of_guest: "",
    res_date: null,
    res_time: null,
    cust_notes: "",
    user_id: null,
    dt_id: null,
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const reservationId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setReservation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3001/reservations/${reservationId}`, reservation);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
    <div className="form">
      <h1>Update a reservation</h1>
      <input
        type="text"
        placeholder="Reservation title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Reservation desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Reservation price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Reservation cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all reservations</Link>
    </div>
    </>
  );
};

export default ResUpdate;