import React from 'react'
import './Connect.css'

const Connect : React.FC = () => {
  return (
    <>
      <div className='connect'>
        <div className="contact-form">
          <h2>Conntect With Me!!!</h2>
          <form>
              <input type="text" placeholder='Your Name' required/>
              <input type="email" placeholder='Your Email' required />
              <textarea placeholder='Your message' required></textarea>
              <button type='submit'>SEND</button>
          </form>
      </div>
      <div className="contact-i">
          <h3>My İnfo</h3>
          <p><strong>Email:</strong>denizzzz</p>
          <p><strong>Location:</strong>izmir , çanakkale, tekirdağ</p>
          <p><strong>Phone:</strong>+90 </p>
      </div>

    </div>
    </>
  )
}

export default Connect