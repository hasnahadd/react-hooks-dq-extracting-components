import React from 'react'
import Messeges from './Messeges'

const MainContent = () => {
  return (

    
      <main>
        <h2>Messages</h2>
        <section className="messages">
          <ul>
            <Messeges id={1}/>
            <Messeges id={2}/>
            <Messeges id={3}/>
            <Messeges id={4}/>
          </ul>
        </section>
        <form className="message-form">
          <input placeholder="Type a message..." />
        </form>
      </main>
  )
}

export default MainContent
