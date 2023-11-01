import "bootstrap/dist/css/bootstrap.min.css";
import "./../styles.css";

import { useState } from "react";

const AddReservationForm = ({ handlerAddReservation }) => {
  const [reservationNo_of_guest, setReservationNo_of_guest] = useState("");
  const [reservationRes_date, setReservationRes_date] = useState("");
  const [reservationRes_time, setReservationRes_time] = useState("");

  const [reservationCust_notes, setReservationCust_notes] = useState("");
  const [reservationUser_id, setReservationUser_id] = useState("");
  const [reservationDt_id, setReservationDt_id] = useState("");

  const handlerNo_of_guest = (event) => {
    setReservationNo_of_guest(event.target.value);
  };

  const handlerRes_date = (event) => {
    setReservationRes_date(event.target.value);
  };

  const handlerRes_time = (event) => {
    setReservationRes_time(event.target.value);
  };

  const handlerCust_notes = (event) => {
    setReservationCust_notes(event.target.value);
  };

  const handlerUser_id = (event) => {
    setReservationUser_id(event.target.value);
  };

  const handlerDt_id = (event) => {
    setReservationDt_id(event.target.value);
  };

  const handlerSubmit = (event) => {
    event.preventDefault();

    handlerAddReservation(
      reservationNo_of_guest,
      reservationRes_date,
      reservationRes_time,
      reservationCust_notes,
      reservationUser_id,
      reservationDt_id
    ).then((result) => console.log(result));
  };

  return (

          <form onSubmit={handlerSubmit}>
            <table>
              <tr>
                <td>
                  <label htmlFor="no_of_guest">No_of_guest:</label>
                </td>
                <td class="text-center">
                  {/* Changed this text box to drop down (select) */}
                  {/* Added the 'id' from text box to drop down */}
                  {/* Added the "onChange" from text box to drop down */}

                  <select id="no_of_guest" onChange={handlerNo_of_guest}>
                    <option value="1">1</option>
                    <option value="2" selected>
                      2
                    </option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="res_date">Res_date:</label>
                </td>
                <td>
                  <input
                    id="res_date"
                    type="text"
                    name="res_date"
                    placeholder="res_date"
                    onChange={handlerRes_date}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="res_time">Res_time:</label>
                </td>
                <td class="text-center">
                  <select
                    id="res_time"
                    name="res_time"
                    onChange={handlerRes_time}
                  >
                    <option value="7:00">7:00 am</option>
                    <option value="8:00">8:00 am</option>
                    <option value="9:00">9:00 am</option>
                    <option value="10:00">10:00 am</option>
                    <option value="11:00">11:00 am</option>
                    <option value="12:00">12:00 pm</option>
                    <option value="13:00">1:00 pm</option>
                    <option value="14:00">2:00 pm</option>
                    <option value="15:00">3:00 pm</option>
                    <option value="16:00">4:00 pm</option>
                    <option value="17:00">5:00 pm</option>
                    <option value="18:00">6:00 pm</option>
                    <option value="19:00">7:00 pm</option>
                    <option value="20:00">8:00 pm</option>
                    <option value="21:00">9:00 pm</option>
                    <option value="22:00">10:00 pm</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="cust_notes">Cust_notes:</label>
                </td>
                <td>
                  <input
                    id="cust_notes"
                    type="text"
                    name="cust_notes"
                    placeholder="cust_notes"
                    onChange={handlerCust_notes}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="user_id">User_id:</label>
                </td>
                <td>
                  <input
                    id="user_id"
                    type="text"
                    name="user_id"
                    placeholder="user_id"
                    onChange={handlerUser_id}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="dt_id">dt_id:</label>
                </td>
                <td>
                  <input
                    id="dt_id"
                    type="text"
                    name="dt_id"
                    placeholder="dt_id"
                    onChange={handlerDt_id}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td class="text-center">
                  <button className="btn btn-primary px-4 py-2 m-4">
                    Add new
                  </button>
                </td>
              </tr>
            </table>
          </form>
  );
};

export default AddReservationForm;
