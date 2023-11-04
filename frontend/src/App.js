import "bootstrap/dist/css/bootstrap.min.css";

import {useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageAbout from "./components/PageAbout";
import PageLogin from "./components/PageLogin";
import Page404 from "./components/Page404";
// import ViewList from "./components/ViewList";

import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";

import Reservation from "./components/Reservation";

import ReservationDisplay from "./components/ReservationDisplay";
import ReservationDisplayNew from "./components/ReservationDisplayNew";
import AvailableTable from "./components/AvailableTable";

import './App.css';
import apiConn from './api/conn';

function App() {
  const [reservations, setReservations] = useState([]);

  // CREATE << THis one isn't being used >>
  const createReservation = async (
    res_no_of_guest, 
    res_res_date, 
    res_res_time,
    res_cust_notes,
    res_user_id,
    res_dt_id) => {

    try {
      alert("Thank you for your reservation.");
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

  // READ
  const getReservations = async () => {
    try {
      alert("Reading reservations");
      const response = await apiConn.get("/reservations");
      console.log(response.data);
      setReservations(response.data);
    } catch (error) {
      console.log(error.message);
    }
  } 
    
  // UPDATE
  const updateReservation = async (
    res_res_id, 
    res_no_of_guest, 
    res_res_date, 
    res_res_time,
    res_cust_notes,
    res_user_id,
    res_dt_id) => {

      try {
        alert("Updating reservation ID: " + res_res_id);
        const response = await apiConn.put(`/reservations/${res_res_id}`, {
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

  // DELETE
  const deleteReservation = async (id) => {
    try {
      alert("Deleting reservation ID: " + id);
      const response = await apiConn.delete(`/reservations/${id}`, { });
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
      <HashRouter>
      <Header />
        <div>    
          <Routes >
            <Route path="*" element={<Page404 />} />
            <Route path='/' element={<Home/>} />

            <Route path='/AddReserveWithTables' element={<AvailableTable handlerAddReservation={createReservation}/>} />          

            <Route path='/ShowReservations' element={<ReservationDisplay list={reservations} handlerUpdateReservation={updateReservation} handlerDeleteReservation={deleteReservation} />} />             

        {/* <Route path="/update/:id" element={<Reservation list={reservations} />} /> */}
            <Route path="/update" element={<Reservation list={reservations} />} />

            <Route path="/about" element={<PageAbout />} />
            <Route path="/login" element={<PageLogin />} />
          </Routes>
        </div>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
