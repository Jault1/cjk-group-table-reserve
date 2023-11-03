import { useState, useContext } from 'react';
// import { v4 as uuid } from 'uuid';

import styles from './Reservation.module.css'
import ViewList from './ViewList';

import ReservationContext from '../context/ReservationContext';
import Button from './Button';

function Reservation() {
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  
  const blankForm = {
    res_id: 0,
    no_of_guest: '',
    res_date: '',
    res_time: '',
    cust_notes: '',
    user_id: 0,
    dt_id: 0,
  }
  const [form, setForm] = useState(blankForm);
 
  /*
    CREATE: Add a new reservation into the list
  */
  // const handlerAddReservation = () => {
  //   const newReservation = {
  //     id: uuid(),
  //     res_id: ctx.res_id,
  //     no_of_guest: ctx.count,
  //     res_date: ctx.res_date,
  //     res_time: ctx.res_time,
  //     total: ctx.count * ctx.price * (100-ctx.res_time)/100,
  //   } 
  //   const newList = [...list, newReservation];
  //   setList(newList);    
  // }
  
  /*
    DELETE a reservation from the list according to the given ID
  */
  const handlerDeleteReservation = (id) => {
   
    // Create a new reservation list with everything, except the reservation with matching ID
    const newList = list.filter((reservation) => reservation.id !== id);
    setList(newList);
  }

  /*
    UPDATE: Submit edit form values into current reservation list 
  */
  const handlerSubmitForm = (event) => {
    event.preventDefault();

    // Create new reservation and copy values from form
    const newReservation = {...list[form.index]};
    console.log(newReservation);
    newReservation.res_id = form.res_id;
    newReservation.no_of_guest = form.no_of_guest;
    newReservation.res_date = form.res_date;
    newReservation.res_time = form.res_time;
    newReservation.cust_notes = form.cust_notes;
    newReservation.user_id = form.user_id;
    newReservation.dt_id = form.dt_id;

    // Copy current list and replace edited reservation
    const newList = [...list];
    newList[form.index] = newReservation;
    setList(newList);

    setIsEditing(false);
  }

  /*
    Edit an existing reservation ID with values fileld into edit form
  */
  const handlerEditForm = (id) => {
    const i = list.findIndex((reservation) => reservation.id === id)
    const editValues = {
      index: i,
      res_id: list[i].res_id,
      no_of_guest: list[i].no_of_guest,
      res_date: list[i].res_date,
      res_time: list[i].res_time,
      cust_notes: list[i].cust_notes,
      user_id: list[i].user_id,
      dt_id: list[i].dt_id,
    }
    setForm(editValues);
    setIsEditing(true);
  }

  /*
    Helper function to update editor form before submitting to UPDATE handler
  */
  const handlerUpdateForm = (event, key) => {
    const value = event.target.value;
    const updatedForm = {...form, [key]: value};
    setForm(updatedForm);
  }

  //---------------------------------------------------------------------------

  return (
    <div className={`${styles.container}`}>
      {/* <Card
        handlerAddReservation={handlerAddReservation}
      /> */}
      <ViewList 
        list={list} 
        handlerDeleteReservation={handlerDeleteReservation}
        handlerEditReservation={handlerEditForm}
      />
      {isEditing && 
      <form className={styles.form} onSubmit={handlerSubmitForm}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Rervation 3ID</th>
              <th>Number of guests</th>
              <th>Reserve Date</th>
              <th>Reserve Time</th>
              <th>Customer notes</th>
              <th>User ID</th>
              <th>Table ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input value={form.res_id} type='number' min={0}
                  onChange={(e) => handlerUpdateForm(e, 'res_id')} />
              </td>
              <td>
                <input value={form.res_date} type='text'
                  onChange={(e) => handlerUpdateForm(e, 'res_date')} />
              </td>
              <td>
                <input value={form.res_time} type='text' 
                  onChange={(e) => handlerUpdateForm(e, 'res_time')} />
              </td>
              <td>
                <input value={form.cust_notes} type='text'
                  onChange={(e) => handlerUpdateForm(e, 'cust_notes')} />
              </td>
              <td>
                <input value={form.user_id} type='number' min={0}
                  onChange={(e) => handlerUpdateForm(e, 'user_id')} />
              </td>
              <td>
                <input value={form.dt_id} type='number' min={0}
                  onChange={(e) => handlerUpdateForm(e, 'dt_id')} />
              </td>
            </tr>
          </tbody>
        </table>
        <input type='submit' />
        <Button label='Cancel' onClick={() => setIsEditing(false)} />
      </form>
      }
    </div>
  );
}

export default Reservation;