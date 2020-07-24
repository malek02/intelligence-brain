import React from 'react'

export default function Navigation({onRoute}) {
    return (
        <nav style ={{display:'flex' , 
        justifyContent: 'flex-end'
        ,padding: '10px 70px'}}>
        <p className='f3 dim mid-gray  underline pointer' onClick={e=>onRoute('SignIn')}>Sign Out</p>
            
        </nav>
    )
}
