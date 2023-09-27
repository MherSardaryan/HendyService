import React from 'react'
import "./Modalburgerr.css"

export default function Modal_burger({ active, setActive, children }) {

    return (
      <div className={active ? "modalo activeo" : "modalo"} onClick={() => setActive(false)}>
        <div className={active ? "modal_contento activeo" : "modalo"} onClick={e => e.stopPropagation()}>
          {children}
        </div>
  
      </div>
    )
  }
  
