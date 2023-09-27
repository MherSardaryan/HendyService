import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config.js";
import './LoginRegistration.css'
import { Link } from "react-router-dom";
import userDate from './userDate.js'

// user cank
function User({logouthome}) {
  // const [userOnline,setUseronline] = useState()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);


   userDate[0]=users

  useEffect(() => {
    async function fetchUsers() {
      const token = getToken();
      if (token) {
        console.log("Making request to /users...");
        const response = await fetch(`${BASE_URL}/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error("Failed to fetch users");
        }
      }
    }

    fetchUsers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
  
    const response = await fetch(`${BASE_URL}/login`, {
      body: formData,
      method: "POST",
    });
  
    if (response.ok) {
      const data = await response.json();
      document.cookie = `access_token=${data.access_token}; Secure; HttpOnly`;
      localStorage.setItem("access_token", data.access_token)
      setUsers(data.users);
      fetchUsers(); 
    } else {
      console.error("Authentication failed");
    }
  };


  function getToken() {
    const token = localStorage.getItem("access_token");

    return token ? token : null;
    
  }
  function logOuth(){
  localStorage.clear();
    window.location.reload();
  }

  async function fetchUsers() {
    const token = getToken();
    if (token) {
      console.log("Making request to /users...");
      
      const response = await fetch(`${BASE_URL}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users");
      }
    }
  }
  return (
    <div>
      {getToken() ? (
        <div className="loginPages">
          
          <ul>  
          {users && users.map((user) => (
           
             
               
    <li key={user.id}>  <Link to='/user'>    <img width={20} src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt="" />
    {user.name }</Link>
    <Link to='/' onClick={logOuth }><button className="btn" onClick={logouthome }>Logouth</button></Link>
    </li>

   
    
    
  ))} </ul>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="loginPages">
          <label>     
            <input
              type="text"
              placeholder=" Email::"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <label>
            <input
              type="password"
              placeholder=" Password::"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
        
          <button className="btn" type="submit"  >Login</button>
          <Link to='/registration'><button  className="btn" type="submit">reg</button></Link>
        </form>
      )}
    </div>
  );
}

export default User;
