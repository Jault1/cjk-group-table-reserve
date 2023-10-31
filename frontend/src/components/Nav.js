import './../styles.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';



function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

    
//     <h2>Navigate</h2>
//       <nav>
//         <Link type="button" className="btn btn-primary menu-btn" to="/AddReserve">Make Reservation</Link><br />
//         <Link type="button" className="btn btn-primary menu-btn" to="/AddReserveWithTables">Check available tables</Link><br />
//         <Link type="button" className="btn btn-primary menu-btn" to="/ShowReservations">View Reservation(s)</Link>
//         <Link type="button" className="btn btn-primary menu-btn" to="/about">About us</Link>
//         <Link type="button" className="btn btn-primary menu-btn" to="/login">Login</Link>
//       </nav>
//       <Outlet />

    <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;