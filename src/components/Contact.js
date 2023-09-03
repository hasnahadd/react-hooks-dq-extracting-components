import React from 'react'
import {contacts}from '../data'
const Contact = (props) => {
  let name;  
  contacts.forEach( function (index){
 if (props.id == index.id) {
   name =index.name ;
 }    })
  return (
    <li className="contact">
    <div className="icon">{name.substring(0,1)}</div>
    {name}
  </li>
  )
}

export default Contact
