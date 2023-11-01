import styles from "./ViewList.module.css";

import { useContext } from 'react';
import ModeContext from '../context/ModeContext';

function ViewList({ list, sum, handlerDeleteItem, handlerEditItem }) {
  const modeCtx = useContext(ModeContext);
  return (
    // This creates the table that you are adding to 
    <div className="container">
    <div className="row">
      <div className="col-12">
        <h2>Reservations</h2>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-md-3 menu">
What's going here?
      </div>
      <div className="col-12 col-md-9">      <table className={`${styles.table} ${!modeCtx.isLight && styles.dark}`}>
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
    <td onClick={() => handlerEditItem(reservation.res_id)}>📝</td>
    <td onClick={() => handlerDeleteItem(reservation.res_id)}>❌</td>
    <td>📝</td>
    <td>❌</td>
</tr>            
))}
        </tbody>
      </table>

    </div>
        </div>
      </div>

  );
}
export default ViewList;
