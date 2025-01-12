import React from 'react'

const Contact = () => {
  return (
    <div>
    <h1>Contact Us</h1>
    <p>Feel free to reach out to us at any time</p>

    <form>
        <label for="name">Name:</label><br/>
        <input type="text" id="name" name="name" required/><br/>
        
        <label for="email">Email:</label><br/>
        <input type="email" id="email" name="email" required/><br/>
    </form>

    </div>
  )
}

export default Contact
