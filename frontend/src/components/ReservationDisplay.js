import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles.css";
import * as MdIcons from "react-icons/md";
import { IconContext } from 'react-icons';

import myLemon from "../images/myLemon.png";

const ReservationDisplay = ({ list, handlerUpdateReservation, handlerDeleteReservation }) => {
  
    return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>View registrations.</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-3">
          <img
            id="myLemon"
            className="img-fluid"
            src={myLemon}
            alt="Lemon"
            width="200"
          />
          <br />
          <br />

        </div>

        <div className="col-12 col-md-6 text-center">
        <table className="table">
            <IconContext.Provider value={{ size: '28px' }}>
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
                        {/* <td >❌</td> */}
                       {/* <td><MdIcons.MdEditSquare /></td> */}
                       <td onClick={() => handlerUpdateReservation(reservation.res_id)}><MdIcons.MdEditSquare /></td>
                       <td onClick={() => handlerDeleteReservation(reservation.res_id)}><MdIcons.MdDeleteForever /></td>

                    </tr>
                ))}
            </tbody>
            </IconContext.Provider>
            </table>

        </div>
      </div>
    </div>
    


    )
}

export default ReservationDisplay;
