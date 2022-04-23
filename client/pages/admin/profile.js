import React from 'react'
import Footer from '../../comps/footer'
import SideBar from '../../comps/sidebar'



export const users = () => {
  return (
      <>
      
    <div className='profile'>
      <SideBar/>

        <h2></h2>
    </div>
    <div className='tempdiv' >  
    <div className='profpic'>
    
    </div>
    </div>

    <h2 className='prof_t'>MONKEY D LUFFY</h2>

    <div className='prof_impdetails' style={{display:"flex"}}>
      <h3 className='prof_h'> NAME : MONKEY D LUFFY   </h3>  
      <h3 style={{ marginLeft:"22vw"}} >ROLL NO: 001</h3>
    </div>
    <div className='prof_impdetails'>

      <h3 className='prof_h'>BRANCH: MUGIWARA NO ICHIMI</h3>
      <h3 className='prof_h'>ROOM NO : 69420</h3>
      <a  className='prof_h' href='#'>Rommmates Link: </a>

      </div>
    <div className='prof_impdetails'>

      
      <h3 className='prof_h'>ID CARD INFO : MUGIWARA NO ICHIMI</h3>
      <h3 className='prof_h'>DUES (If Any) : 1.5 BILLION BERRIES</h3>
      <h3  className='prof_h'> REMARKS: <ul className='remarks'>ATE GOMU GOMU NO MI</ul>  <ul className='remarks'>DEFEATED ARLONG</ul> </h3>

      </div>

      <div className='prof_impdetails'>
      <h3 className='prof_h'>CLUBS : Worst Generation </h3>

      <br></br>

      <h3 className='prof_h'>Special Condition : HE IS MADE OUT OF RUBBER</h3>
      </div>
      <br></br>
      <br/>
      <br/>
      <Footer/>





    

    </>
  );
}


export default users;
