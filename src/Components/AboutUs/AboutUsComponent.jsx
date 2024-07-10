import React from 'react'

const AboutUsComponent = ({icon,text,desc}) => {
  return (
    <div className='container'>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='ms-4'>
                <img src={icon} alt=""/>
            </div>
            <div>
                <h3 style={{fontSize:'40px'}}>{text}</h3>
            </div>
        </div>
        <div className='m-auto w-75 pt-5 text-center'>
        <p className='px-lg-4' style={{fontSize:'24px',color:'rgba(70, 70, 70, 1)'}}>{desc}</p>
        </div>
    </div>
  )
}

export default AboutUsComponent
