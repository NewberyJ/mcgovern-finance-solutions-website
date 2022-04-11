import React, { useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import {Link} from 'react-router-dom';
import './Content.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Carousel from './Carousel';
import CarouselJs from './Carouseljs';
import Navbar from './Navbar';

function Content() {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (

    <React.Fragment>
      <div className='container'>
        <div className='lets-talk'>

        <h1>Let McGovern Finance Solutions help you grow</h1>

          <p>Lets talk</p></div>
        <div className='wrapper'>
          <div className='text-1'>
            <h2 className='About-us'> About us </h2>

            <p>McGovern Finance Solutions was created to help support the broking community by taking away what brokers don’t have time for, processing! After beginning my career with an established Toowoomba mortgage broking firm in 2013, it didn’t take me long to be excited by my ability to help people achieve what can be their greatest goal in life. I started with the reception position and within months worked my way to the back-office administration team. After a few years of gaining some experience and professional development, I progressed into managing that team! In 2019 I became a broker, this role brought me a lot of joy however I was always drawn to the file management process, the challenge of keeping abreast with constant regulation changes and updating processes. My broking background has given me the ability to pick up a file easily and interpret necessary objectives right away. Our goal is to manage the paperwork, data entry, file management and application follow up so brokers can focus on their client relationship and having the time to grow their business and continue professional development.</p>
          </div>
        </div>

        <div className='our-services-wrapper'>
          <h2 className='our-services'>OUR SERVICES</h2>

          <p> McGovern Finance Solutions wants to make brokers lives easier by doing the things we love! Select from below packages or get in touch to build your own personalized package to suit you and your customers. </p>

          <div className='selection'>
            <div className='selection-wrapper'>

            <div>

              <h2>Standard package - Data entry</h2>





                <p>This package includes</p>
                <li>Data entry into selected software</li>
                <li>Generating credit proposal/SOCA & application</li>
                <li>Make sure application is completed for client viewing</li>
                <li>Complete extra form such as discharge, FHLDS dec, FHOG</li>
                <li>Uploading completed/held supporting documents into AOL. </li>

                <p>**Fees apply once completed forms have been sent to broker (prior to lodgment)</p>

              </div>

                <div className='p-select'>
                  <p> 100 </p>
                </div>

            </div>
          </div>
          <div className='selection'>
            <div className='selection-wrapper'>

            <div>

              <h2>Premium Package – Upfront and data entry</h2>

                <p>This package includes</p>
                <li>All of the above</li>
                <li>Renaming/exporting to PDF/general sorting of files in client folder</li>
                <li>Completing broker notes into a bank application format</li>
                <li>Finalizing client fact find if required</li>
                <li>Bank calculator</li>
                <li>Valuation</li>

                <p>**Fees apply once completed forms have been sent to broker (prior to lodgment)</p>

            </div>

            <div className='p-select'>
              <p> 200 </p>
            </div>

            </div>
          </div>
          <div className='selection'>
            <div className='selection-wrapper'>
            <div>
              <h2>Complete Package – Upfront, data entry and follow up</h2>

              <p>This package includes</p>
              <li>All the above</li>
              <li>Follow up calls to the lender – lodgment through settlement</li>
              <li>File note all calls</li>
              <li>Task/email sent to broker if further action is required.</li>

              <p>**Fees apply in two parts. Premium prior to lodgment 200 & 100 at settlement</p>

            </div>

            <div className='p-select'>
              <p> 300 </p>
            </div>

            </div>
          </div>
          <div className='selection'>
            <div className='selection-wrapper'>


            <div>
              <h2>Completed Construct Package – Upfront, data entry, follow up & construction   </h2>

              <p>This package includes</p>
              <li>All the above</li>
              <li>Monitoring and action of progress draws</li>

              <p>**Fees apply in three parts. Premium prior to lodgment 200, 100 at settlement, 50 at hand over</p>

            </div>


              <div className='p-select'>
                <p>350</p>
              </div>



            </div>
          </div>
                          <div className='selection'>
                            <div className='selection-wrapper'>

              <div>
                <h2>Personal/Asset Package – Data Entry & follow up    </h2>

                <p>This package includes</p>
                <li>Data entry</li>
                <li>Generating compliance docs from your selected software</li>
                <li>Submit application to lender & follow up from lodgment to settlement.</li>

                <p>**Fees apply at lodgment</p>

              </div>

              <div className='p-select'>
                <p>150</p>
              </div>
                            </div>
                          </div>
                        </div>


        <div className='testimonial-container'>
          <div className='testimonial-wrapper'>
            <h2> Testimonials </h2>
            <Carousel slides={CarouselJs} />
          </div>
        </div>


        <div className='contact-container'>
          <div className='contact-wrapper'>
            <h2>Contact Us</h2>
            <div className='box-wrapper'>
              <div className='contact-box'>
                <h2> CONTACT </h2>
                <p> Email: maddy@mcgfs.com.au </p>
                <p> Phone: 0403 967 474 </p>
              </div>
              <div className='contact-box'>
                <h2> LOCATION </h2>
                <p> We service to mortgage brokers in Australia </p>
              </div>
              <div className='contact-box'>
                <h2> OPENING HOURS </h2>
                <p> Mon - Fri: 8am - 5pm </p>
                <p> Saturday: Closed </p>
                <p> Sunday: Closed </p>
              </div>
            </div>
          </div>
        </div>




       </div>
    </React.Fragment>
  );
}

export default Content
