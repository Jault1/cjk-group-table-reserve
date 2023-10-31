import './../styles.css'
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <h2>Navigate</h2>
      <nav>
        <Link type="button" className="btn btn-primary menu-btn" to="/AddReserve">Make Reservation</Link><br />
        <Link type="button" className="btn btn-primary menu-btn" to="/AddReserveWithTables">Check available tables</Link><br />
        <Link type="button" className="btn btn-primary menu-btn" to="/ShowReservations">View Reservation(s)</Link>
        <Link type="button" className="btn btn-primary menu-btn" to="/about">About us</Link>
        <Link type="button" className="btn btn-primary menu-btn" to="/login">Login</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;