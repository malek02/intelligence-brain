import React from 'react';
import './FaceDetect.css';





export default function Facedetect({url,box}) {
    return (
        <>
        <div className=' absolute shadow-5 center' style ={{height: 400, width: '40%', 
        top:'600px',
        right:'560px',
      
       
        padding:'10px 10px 10px 10px',
        display:'flex',   
        }} 
        >
             <img id='imagebox' style={{width:'100%'}}  src={url} alt=""/>
             
            <div className='box-container' style={{top:box.topRow, left:box.leftcol, right:box.rightcol, bottom:box.bottom}}>
           
            </div>
            </div>
            </>
       
    )
}
