import React from 'react'

// import styles from '../styles/globals.css'


const footer = () => {
  return (
    <footer className='footer' style={{backgroundColor:"#b6ccfe" , padding: "30px"}}>

      <h4 style={{fontFamily:"sans-serif", fontSize: "xx-large"}}>Quick Links</h4>

      <li className='links' style={{padding:"5px" , color: "#edf2fb"}}>Hostel Rules</li>

      <li  className='links'  style={{padding:"5px", color: "#edf2fb"}}>Hostel Fees</li>

    </footer>
  )
}

export default footer