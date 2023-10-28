import {useState, useEffect} from "react";
import ReservationDisplay from "./components/ReservationDisplay";
import AddReservationForm from "./components/AddReservationForm";
import AvailableTable from "./components/AvailableTable";

import './App.css';
import apiConn from './api/conn';

function App() {
  const [reservations, setReservations] = useState([]);
  const [availableTables, setAvailableTables] = useState([]);

  const getReservations = async () => {
    try {
      const response = await apiConn.get("/reservations");
      console.log(response.data);
      setReservations(response.data);
    } catch (error) {
      console.log(error.message);
    }
  } 

  const getAvailableTables = async () => {
    try {
      const response = await apiConn.get("/reservations");
      console.log(response.data);
      setAvailableTables(response.data);
    } catch (error) {
      console.log(error.message);
    }
  } 
  
  const createReservation = async (
    res_no_of_guest, 
    res_res_date, 
    res_res_time,
    res_cust_notes,
    res_user_id,
    res_dt_id) => {
  
    alert(
      res_no_of_guest + ' | ' +
      res_res_date + ' | ' +
      res_res_time + ' | ' +
      res_cust_notes + ' | ' +
      res_user_id + ' | ' +
      res_dt_id)
    try {
      const response = await apiConn.post("/reservations", {
        no_of_guest: res_no_of_guest, 
        res_date: res_res_date, 
        res_time: res_res_time,
        cust_notes: res_cust_notes,
        user_id: res_user_id,
        dt_id: res_dt_id  
      });
      console.log(response.data);
      getReservations();
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getReservations();
  }, []);

  return (
    <div className="App">
      <h1>Reservation List</h1>
      <AddReservationForm handlerAddReservation={createReservation}/>
      <AvailableTable handlerAddReservation={createReservation}/>
      <ReservationDisplay list={reservations}/>
    </div>
  );
}

export default App;
