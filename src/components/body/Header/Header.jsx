import React,{useState} from 'react'
import './Header.css'
import LoginForm from '../SectionPages/LoginRegistration/LoginForm'
import { Link } from 'react-router-dom'
import Modalburger from '../../ui/Modal_burger/Modalburger'
export default function Header() {
  const [online,setOnline]=useState(<LoginForm logouthome={()=>setOnline( <LoginForm />)} />)
  const [modalActive, setModalActive] = React.useState(false)
  return (
    <header>
        <div className="top" >   
           <Link to=''><h1>HANDY</h1></Link> 
           {online}
      </div>
      <div className="burgerMenu open_btn"  onClick={() => setModalActive(true)} >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>

      </div>
      <div>
        <Modalburger active={modalActive} setActive={setModalActive} >
       
        <ul onClick={() => setModalActive(false)} className='modal_ul'>
        <Link to='/'> <li><i className="fa-solid fa-house"></i>Home</li></Link> 
           <Link to='/events'><li><i className="fa fa-briefcase"></i>Events</li></Link>
           <Link to=''><li><i className="fa-solid fa-headphones"></i>Service</li></Link>
           <Link to=''><li><i className="fa-regular fa-address-card"></i>About Use</li></Link>
           <Link to=''><li><i className="fa-solid fa-id-badge"></i>Contact Use</li></Link>
          </ul>
          {/* <button className='modal_btn' onClick={() => setModalActive(false)}>✕</button> */}
          </Modalburger >
         
      </div>

    </header>
  )
}
