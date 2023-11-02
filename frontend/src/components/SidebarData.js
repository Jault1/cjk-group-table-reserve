import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from "react-icons/bs";
import * as PiIcons from "react-icons/pi";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Create Reservation',
    path: '/AddReserveWithTables',
    icon: <BsIcons.BsFillCalendar2CheckFill />,
    cName: 'nav-text'
  },
  {
    title: 'View Reservations',
    path: '/ShowReservations',
    icon: <FaIcons.FaClipboardList />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/about',
    icon: <PiIcons.PiUsersThreeFill />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <FaIcons.FaUserEdit />,
    cName: 'nav-text'
  }
];
