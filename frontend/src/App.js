import {useState, useEffect} from "react";
import ReservationDisplay from "./components/ReservationDisplay";
import AddReservationForm from "./components/AddReservationForm";
import AvailableTable from "./components/AvailableTable";

import './App.css';
import apiConn from './api/conn';

function App() {
  const [reservations, setReservations] = useState([]);

  const getReservations = async () => {
    try {
      const response = await apiConn.get("/reservations");
      console.log(response.data);
      setReservations(response.data);
    } catch (error) {
      console.log(error.message);
    }
  } 

  const createReservation = async (reservationNo_of_guest, reservationRes_date, reservationRes_time) => {
    alert(reservationRes_date + " " + reservationRes_time)
    try {
      const response = await apiConn.post("/reservations", {no_of_guest: reservationNo_of_guest, res_date: reservationRes_date, desc: reservationRes_time});
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
