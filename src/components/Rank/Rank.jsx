import React from 'react'

export default function Rank({bon,nember}) {
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}} >
        <div className=' white f3 center '>
            {bon.name} ,your current rank is...
        </div>
        <div className='white f1 center '>
            #{nember}   
         </div>
            
        </div>
    )
}
