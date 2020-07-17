import React from 'react'

export default function ImageLinkForm({handelchange,handelsubmit,item}) {
    return (
        <div>
            
            <div style={{display: 'flex',justifyContent: 'center',flexDirection: 'column'
           }} >
           <p className='f3 center'>
            {'This Magic Brain will Find the face. Try it and see'}
            </p>
           <div style={{ width:'700px', display: 'flex'
           }} className='form pa4 br3 shadow-5 center'>
                <input  value={item} onChange={e=>handelchange(e)} type='text' className='f4 pa2 w-70 center'/>
                <button onClick={e=>handelsubmit(e)} className='w-30 grow f4 link ph3 pv2 dib white 
                bg-light-purple center'>Detect</button>
            </div>
        </div>
        </div>
    )
}
