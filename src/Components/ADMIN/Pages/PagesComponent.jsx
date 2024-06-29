import React from 'react'

const PagesComponent = ({Text}) => {
  return (
    <div  className='col-md-4 '>
      <div className='rounded-4 py-5 h-100' style={{backgroundColor:'rgba(240, 250, 255, 1)'}}>
                        <div className='d-flex px-5 text-center justify-content-center align-items-center   fw-bold'>
                            <p style={{fontSize:'20px'}}>{Text}</p>
                        </div>
                    </div>
    </div>
  )
}

export default PagesComponent
