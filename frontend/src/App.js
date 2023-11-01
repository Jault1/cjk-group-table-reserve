import "bootstrap/dist/css/bootstrap.min.css";

import {useState, useEffect} from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PageAbout from "./components/PageAbout";
import PageLogin from "./components/PageLogin";
import Page404 from "./components/Page404";
import ResUpdate from "./components/ResUpdate";
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import ReservationDisplay from "./components/ReservationDisplay";
import AddReservationForm from "./components/ReservationAdd";
import AvailableTable from "./components/AvailableTable";

import './App.css';
import apiConn from './api/conn';


function App() {
  const [reservations, setReservations] = useState([]);
  // const [availableTables, setAvailableTables] = useState([]);
  // const [tblsReserved, setTblsReserved] = useState([]);

// Get reservations from the DB and save to useState
  const getReservations = async () => {
    try {
      const response = await apiConn.get("/reservations");
      console.log(response.data);
      setReservations(response.data);
    } catch (error) {
      console.log(error.message);
    }
  } 

  // Get availableTables (that match headcount) from the DB and save to useState
  // const getAvailableTables = async () => {
  //   try {
  //     const response = await apiConn.get("/reservations");
  //     console.log(response.data);
  //     setAvailableTables(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // } 

    // Get availableTables (that match headcount) from the DB and save to useState
    // const getTblsReserved = async () => {
    //   try {
    //     const response = await apiConn.get("/reservations");
    //     console.log(response.data);
    //     setTblsReserved(response.data);
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // } 
  
  
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
      <HashRouter>
      <Header />
        <div>    
          <Routes >
            <Route path="*" element={<Page404 />} />
            <Route path='/' element={<Home/>} />
            {/* Add Reservation Form */}
            <Route path='/AddReserve' element={<AddReservationForm handlerAddReservation={createReservation}/>}/>
            {/* Available Table */}
            <Route path='/AddReserveWithTables' element={<AvailableTable handlerAddReservation={createReservation}/>} />          
            {/* Display Reservations */}
            {/* <Route path='/updateRes/:res_id' element={<ResUpdate list={reservations} />} />  */}
            <Route path="/about" element={<PageAbout />} />
            <Route path="/update/:id" element={<ResUpdate />} />
            <Route path="/login" element={<PageLogin />} />

            {/* handlerDeleteReservation={} handlerEditReservation={} */}
{/* Reservations:
create       
read 
update
delete

Users:
create       
read 
update
delete */}




       <Route path='/ShowReservations' element={<ReservationDisplay list={reservations}  />} /> 

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
