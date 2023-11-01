import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles.css";

// import { useState } from "react";
const ReservationDisplay = ({list, handlerDeleteReservation, handlerEditReservation}) => {

    return (
        <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Reservations</h2>
          </div>
        </div>
    
        <div className="row">
          <div className="col-12 col-md-4 menu">
What's going here?
          </div>
          <div className="col-12 col-md-8">
    
            <table className="table">
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
                        <td>{reservation.res_id}</td>
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
        </div>
      </div>


    )
}

export default ReservationDisplay;
