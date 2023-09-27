import React from 'react'
import './Home.css'
import EventsPage from '../Events/Events'
// import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='homePsge'>
      <div className="navigationHome" >
      <h3>NEW Events</h3>
          <EventsPage />
      </div>
      <div className="home">

        </div>
    </div>
  )
}
