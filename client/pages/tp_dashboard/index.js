import React from "react";
import Footer from '../../comps/footer'

import Image from 'next/image'


//import hostelPic from "../../images/IIITN_hostel.jpg";

const index = () => {
  return (
    // <div>
    //     <div className="pic">
    // <img  src={hostelPic} alt="Hostel Photo"  />
    // </div>

    //     <div className="desc">
    //   <h2 className="tp_h">DESCRIPTION</h2>

    //   <p className="tp_p">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit,
    //     eius nemo eaque amet repell
    //     suscipit a! Sit magni perferendis ut sapiente officia cumque?
    //   </p>

    //     <div className="tp_h">
    //   <button className="btn">LOGIN</button>

    //   <button className="btn" >SIGNUP</button>

    // </div>
    // </div>

    // <p>------------------------------------------------------------------------</p>

    // </div>

    <>
      <div className="Hostelphoto">
        <img src='/ampi.jpeg'  width={800} height={600}/>
        </div>

      <div className="desc">
        <h2 className="til">Description</h2>



        <article style={{textAlign:"left" , marginLeft: "5px"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
          cupiditate voluptatibus porro nesciunt debitis, nulla fuga non
          asperiores officia ducimus, ab quos, necessitatibus eos ea repudiandae
          similique nisi. Architecto.
        </article>

        <button className="btn" style={{fontSize:"x-large"}}>LOGIN</button>
        <button className="btn" style={{fontSize:"x-large"}}>SIGNUP</button>

      </div>

      <div className="howtoreach" id="htr">
        <h2 className="til">How To Reach</h2>

        <article style={{textAlign:"center"}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          accusantium non aperiam deserunt ratione impedit maxime nulla
          cupiditate est praesentium? Nesciunt repellat ut doloremque deserunt
          adipisci soluta explicabo eveniet nulla?
        </article>

        
        
      </div>

      <div className="contactus">
          <h2 className="til">Contact Us</h2>
          <ul>
              <li> Hostel Quries - 9876543210</li>
              <li>Hostel Quries - 9876543210</li>
              <li>Hostel Quries - 9876543210</li>
              <li>Hostel Quries - 9876543210</li>

          </ul>

      </div>

      <Footer/>
    </>
  );
};

export default index;
