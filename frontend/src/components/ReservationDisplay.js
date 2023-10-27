// display all the categories
const ReservationDisplay = ({list}) => {
    return (
        <div>
            <h2>List of reservations</h2>
            <ul>
            {list && 
                list.map((reservation) => (
                    <li key={reservation.res_id}>{reservation.res_id} | {reservation.no_of_guest} | {reservation.res_date} | {reservation.res_time} | {reservation.cust_notes} | {reservation.user_id} | {reservation.dt_id}</li>
                ))
            }
            </ul>
        </div>
    )
}

export default ReservationDisplay;