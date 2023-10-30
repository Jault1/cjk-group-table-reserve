// import WorldMap from '../images/WorldMap.png';
import { Link } from 'react-router-dom';

function Home(){
    return(
    <>
    <div className="home">
    <Link className="button" to="/AddReserve">Make Reservation</Link><br />
    <Link to="/AddReserveWithTables">Check available tables</Link><br />
    <Link to="/ShowReservations">View Reservation(s)</Link>

   </div>
   </>
   )}

export default Home