import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles.css";
import * as MdIcons from "react-icons/md";
import { IconContext } from 'react-icons';

import myLemon from "../images/myLemon.png";

const ReservationDisplayNew = ({ list, handlerEditItem, handlerDeleteItem }) => {
  
    return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>View reservations. (reserveDisplayNew)</h2>
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

list.map((list) => ( alert(list.user_id)
                    //   <tr key={list.res_id}>
                    //     <td>{list.res_id}</td>
                    //     <td>{list.no_of_guest}</td>
                    //     <td>{list.res_date}</td>
                    //     <td>{list.res_time}</td>
                    //     <td>{list.cust_notes}</td>
                    //     <td>{list.user_id}</td>
                    //     <td>{list.dt_id}</td>
                    //    {/* <td onClick={() => handlerEditItem(list.res_id)}><MdIcons.MdEditSquare /></td> */}
                    //    <td onClick={(alert(`$(list.res_id)`)) }><MdIcons.MdEditSquare /></td>
                    //    <td onClick={() => handlerDeleteItem(list.res_id)}><MdIcons.MdDeleteForever /></td>

                    // </tr>
                ))}
            </tbody>
            </IconContext.Provider>
            </table>
            
            
            
        </div>
      </div>
    </div>
    
    )
}

export default ReservationDisplayNew;
