import React from 'react';
import {Link} from 'react-router-dom';
import '../Contact.css';

export default function Contact() {

    return(

<React.Fragment>

            <div className="form_container">

            <h2> Contact us! </h2>

            <div class="container">
            <form action='https://formsubmit.co/newberyjet@outlook.com' method='POST'>
                <input type='hidden' name='_subject' value='New request'/>
                <input type='hidden' name='_captcha' value='false'/>
                <input type="hidden" name="_next" value="http://localhost:3000/pages/Contact"/>
              <div className='name-container'>
                <div>
                <input className='form' type='name' name='First name' placeholder='First name' required/>
                </div>
                <div className='space'/>
                <div>
                <input className='form' type='name' name='Last name' placeholder='Last name' required/>
                </div>
              </div>
              <div>
                <input className='form2' type='email' name='email' placeholder='Email' required/>
              </div>

              <div>
                <input className='form2' type='phone number' name='phone number' placeholder='Phone number' required/>
              </div>

              <div>
                <textarea className='message' type='text' name='Message' placeholder='Message' required/>
              </div>
              <button className='send' type='submit'> Send </button>
            </form>
            </div>

            </div>

</React.Fragment>

    )
}
