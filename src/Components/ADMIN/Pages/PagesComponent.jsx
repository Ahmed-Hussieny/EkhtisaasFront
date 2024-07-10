import React from 'react'
import { useNavigate } from 'react-router-dom'

const PagesComponent = ({Text}) => {
  const navigate = useNavigate()
  return (
    <div  className='col-md-4 '>
      <div onClick={()=>navigate('/Admin/ContactWithUs')} className='rounded-4 py-5 h-100' style={{cursor:'pointer',backgroundColor:'rgba(240, 250, 255, 1)'}}>
                        <div className='d-flex px-5 text-center justify-content-center align-items-center   fw-bold'>
                            <p style={{fontSize:'20px'}}>{Text}</p>
                        </div>
                    </div>
    </div>
  )
}

export default PagesComponent
