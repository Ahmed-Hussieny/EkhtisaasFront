import React from 'react'
import style from '../../Assents/Style/Homepage.module.css'

const CustomHomeDesc = ({title,desc,img,dir}) => {
  return (
    <div className=' text-center  m-auto container'>
     {(dir==='L')?
      <div className='row gy-3 m-0 d-flex  align-items-'>
        <div className='col-md-5'>
          <img className='w-5 d-none p-0 m-0 d-lg-block'  src={img} alt='image'/>
        </div>
        <div className='col-md-7 bg-white shadow-lg p-4 m-0 px-lg-5 rounded-3' >
          <h5>
            {title}
            </h5>
          <p className={[style.pComponent,'pt-4 px-lg-5'].join(' ')}>
              {desc}
            </p>
        </div>
        
      </div>
      : <div className='row gy-3  m-0 d-flex align-items bg'>
       
        <div className='col-md-7 bg-white shadow-lg p-4 px-lg-5 rounded-3' >
          <h5>
            {title}
            </h5>
          <p className={[style.pComponent,'pt-4 px-5'].join(' ')}>
              {desc}
            </p>
        </div>
        <div className='col-md-5 d-none d-lg-block'>
          <img className='w-5  '  src={img} alt='image'/>
        </div>
      </div>}
    </div>
  )
}

export default CustomHomeDesc
