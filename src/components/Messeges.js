import React from 'react'
import {messages}from '../data'

const Messeges = (props) => {
  let message;  
  messages.forEach( function (index){
 if (props.id == index.id) {
  message =index ;
 }    })
  return (
    
        <li className={`message ${message.type}`}>
              <div className="icon">{message.name.substring(0,1)}</div>
              <span className="content">{message.content}</span>
            </li>
            
  
  )
}


export default Messeges
