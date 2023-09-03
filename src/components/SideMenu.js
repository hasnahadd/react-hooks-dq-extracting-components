import React from 'react'
import Contact from './Contact'


const SideMenu = () => {
  return (
      <nav>
        <h2>Contacts</h2>
        <ul className="contacts">
          
          <Contact id={1}/>
          <Contact id={2}/>
          <Contact id={3}/>
          <Contact id={4}/>


        </ul>
      </nav>
  )
}

export default SideMenu
