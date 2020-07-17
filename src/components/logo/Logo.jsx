import React from 'react';
import Tilt from 'react-tilt';
import Brain from './Brain.png'
export default function Logo() {
    return (
        <div className='ma4 mt0'   >
        <Tilt className="Tilt br2 shadow-2 "   options={{ max : 70}} 
        style={{   background: 'linear-gradient(89deg, #FF5EDF 0% ,#04C8DE 100%)', 
        height: 200, width: 200 }} >
<img src={Brain} style ={{height: 200, width: 200}}alt='brain'/>
 <div  className="Tilt-inner"> 
 
  </div>
</Tilt>
            
        </div>
    )
}
