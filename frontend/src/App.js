import "bootstrap/dist/css/bootstrap.min.css";


import {useState, useEffect} from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
// import { SearchWeekly } from "./components/SearchWeekly";
// import { SearchHourly } from "./components/SearchHourly";

import ReservationDisplay from "./components/ReservationDisplay";
import AddReservationForm from "./components/AddReservationForm";
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

<Header />
          <HashRouter>
        <div>    
          <Routes >
          <Route path='/' element={<Home/>} />
          {/* <Route path='/Hourly' element={<SearchHourly/>}/>
          <Route path='/Weekly' element={<SearchWeekly/>} /> */}
          <Route path='/AddReserve' element={<AddReservationForm handlerAddReservation={createReservation}/>}/>
          <Route path='/AddReserveWithTables' element={<AvailableTable handlerAddReservation={createReservation}/>} />          
          <Route path='/ShowReservations' element={<ReservationDisplay list={reservations} />} />          

          </Routes>
        </div>
      </HashRouter>

      <Footer />
      {/* <h1>Reservation List</h1>
      <AddReservationForm handlerAddReservation={createReservation}/> Show the Add reservation form 
      <AvailableTable handlerAddReservation={createReservation}/>   Show the Table view image 
      <ReservationDisplay list={reservations} listAvailable={availableTables} listtablesReserved={tblsReserved}/> 
      <ReservationDisplay list={reservations} />  Show the reservations */}

    </div>
  );
}

export default App;
