import React,{useState} from 'react'

import Link from "next/link";
import SideBar from '../../comps/sidebar'



import {data} from '../../data';

const user = () => {
   const [people,setPeople] = useState(data);

  const removeItem =(id)=>{
    let newPeople= people.filter((person)=>person.id !== id) 
    // basically what above line is doing is that 
    //it creates a new var newPeople and checks if passsed id is matching 
    //with our aaray of ids 
    //if it doesnt match then it is stored in newPeople
    // we can check this by console log
    console.log(newPeople);

    setPeople(newPeople);

  };

  return(
    <>

  <div style={{display:"flex"}}>
    <SideBar/>
    <div style={{alignItems:"center"}}>
    <h3 style={{fontSize:"40px" , textAlign: "center" }}>USERS</h3>
    {
      people.map((person) =>{
        const {id,name,room_no} = person;

      return(
        
        <div key={id} className='item' >
          <h4>Name :{name}</h4>
          <h4>Room No :{room_no}</h4>
          <button onClick={()=> removeItem(id)}>remove </button>
          
          </div>

      );
     })
    }
    </div>
    </div>

    </>
    );
}

export default user