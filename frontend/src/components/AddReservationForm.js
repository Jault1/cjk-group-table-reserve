import './../App.css';

import { useState } from "react";

const AddReservationForm = ({ handlerAddReservation }) => {
  const [reservationNo_of_guest, setReservationNo_of_guest] = useState("");
  const [reservationRes_date, setReservationRes_date] = useState("");
  const [reservationRes_time, setReservationRes_time] = useState("");

  const [reservationCust_notes, setReservationCust_notes] = useState("");
  const [reservationUser_id, setReservationUser_id] = useState("");
  const [reservationDt_id, setReservationDt_id] = useState("");

  const handlerNo_of_guest = (event) => {
    setReservationNo_of_guest(event.target.value);
  };

  const handlerRes_date = (event) => {
    setReservationRes_date(event.target.value);
  };

  const handlerRes_time = (event) => {
    setReservationRes_time(event.target.value);
  };

  const handlerCust_notes = (event) => {
    setReservationCust_notes(event.target.value);
  };

  const handlerUser_id = (event) => {
    setReservationUser_id(event.target.value);
  };

  const handlerDt_id = (event) => {
    setReservationDt_id(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    alert(
      "Form submission: " + 
      reservationNo_of_guest + " | " + 
      reservationRes_date + " | " + 
      reservationRes_time + " | " +
      reservationCust_notes + " | " +
      reservationUser_id + " | " +
      reservationDt_id + " | "
      )

    handlerAddReservation(
      reservationNo_of_guest, 
      reservationRes_date, 
      reservationRes_time,
      reservationCust_notes,
      reservationUser_id,
      reservationDt_id
      ).then(result=>console.log(result));
  };


  return (
    <div>
      <form onSubmit={handlerSubmit}>
      <label htmlFor="no_of_guest">No_of_guest:</label>&nbsp;&nbsp;&nbsp;
        <input id="no_of_guest"
          type="text"
          name="no_of_guest"
          placeholder="no_of_guest"
          onChange={handlerNo_of_guest}
        /><br></br>

      <label htmlFor="res_date">Res_date:</label>&nbsp;&nbsp;&nbsp;
        <input id="res_date"
          type="text"
          name="res_date"
          placeholder="res_date"
          onChange={handlerRes_date}
        /><br></br>
        
        <label htmlFor="res_time">Res_time:</label>&nbsp;&nbsp;&nbsp;
        <input id="res_time"
          type="text"
          name="res_time"
          placeholder="res_time"
          onChange={handlerRes_time}
        /><br></br>




<label htmlFor="cust_notes">Cust_notes:</label>&nbsp;&nbsp;&nbsp;
  <input id="cust_notes"
    type="text"
    name="cust_notes"
    placeholder="cust_notes"
    onChange={handlerCust_notes}
  /><br></br>
  <label htmlFor="user_id">User_id:</label>&nbsp;&nbsp;&nbsp;
  <input id="user_id"
    type="text"
    name="user_id"
    placeholder="user_id"
    onChange={handlerUser_id}
  /><br></br>
  <label htmlFor="dt_id">dt_id:</label>&nbsp;&nbsp;&nbsp;
  <input id="dt_id"
    type="text"
    name="dt_id"
    placeholder="dt_id"
    onChange={handlerDt_id}
  /><br></br>        
        <button className="btn btn-primary px-4 py-2 m-4">Add new</button>
      </form>
    </div>
  );
};

export default AddReservationForm;
