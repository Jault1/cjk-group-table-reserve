// import styles from "./ReservationDisplay.module.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles.css";

import Nav from "./Nav";

import { useState } from "react";
const ReservationDisplay = ({list}) => {
// These need passed in: , handlerDeleteReservation, handlerEditReservation
    return (
        <div>
            <h2>List of reservations</h2>
            <table className="">
                <thead>
                    <tr>
                        <th>Rervation ID</th>
                        <th>Number of guests</th>
                        <th>Reserve Date</th>
                        <th>Reserve Time</th>
                        <th>Customer notes</th>
                        <th>User ID</th>
                        <th>Table ID</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>               
                </thead>

            <tbody>

            {list && 

                list.map((reservation) => (
                    <tr key={reservation.res_id}>
                        <td>{reservation.no_of_guest}</td>
                        <td>{reservation.res_date}</td>
                        <td>{reservation.res_time}</td>
                        <td>{reservation.cust_notes}</td>
                        <td>{reservation.user_id}</td>
                        <td>{reservation.dt_id}</td>
                        <td>📝</td>
                        <td>❌</td>
                        {/* onClick={() => handlerEditItem(reservation.res_id)}
                        onClick={() => handlerDeleteItem(reservation.res_id)} */}
                    </tr>
                ))}
            </tbody>
            </table>
</div>
    )
}

export default ReservationDisplay;
