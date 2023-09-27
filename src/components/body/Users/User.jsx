import React from 'react'
import UserDate from '../SectionPages/LoginRegistration/userDate'
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div>
      <img width={100} src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" />
    <h2>{UserDate[0][0].name}</h2>
    <h2>{UserDate[0][0].email}</h2>
    <div className="events">
        <p>MY events</p>
        <Link to='/events'><button>EVENTS</button></Link>
    </div>
    </div>
  )
}
