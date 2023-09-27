import React,{useState,useEffect} from 'react'
import './Events.css'
export default function EventsPage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
   
    useEffect(() => {
      fetch("http://localhost:8080/events")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error:404 "invalite server"</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="events">
          <ul >
            {items.map(e=>(
              <li key={e.event_id}>
                <div className='event_card'>
                  <h1> {e.name}</h1>
                  <h2>{e.description}</h2>
                  <h2>start thime-- {e.start_datetime}</h2>
                  <h2>end thimr--{e.end_datetime}</h2>
                  <button className='btn'>GO TO EVENT</button>
                  <button className='btn'>learn more</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
