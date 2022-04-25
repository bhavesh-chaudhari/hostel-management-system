import React from "react";
import Image from "next/image"

const index = () => {
  return (<>
  <div style={{textAlign:"center" , fontSize:"100px" , marginTop:"40px"}}>Gallery</div>


    <div style={{padding:"50px"}}>
    <Image src="/h1.jpg" height="500px" width="1600px"/>
    </div>

    
    <div style={{padding:"50px"}}>
    <Image src="/h2.jpg" height="500px" width="1600px"/>

    </div>
    
    <div style={{padding:"50px"}}>

    <Image src="/h3.jpg" height="500px" width="1600px"/>

    </div>
    
    <div style={{padding:"50px"}}>
    <Image src="/h5.jpg" height="500px" width="1600px"/>

    </div>

  </>
  );
};

export default index;
