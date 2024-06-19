import React from 'react'
import style from '../../Assents/Style/Homepage.module.css'
const CustomHomeNumber = ({num,text}) => {
  return (
    <div>
      <div className={style.borderlinearGradient}>
      <h4 className={style.linearGradientText}>{num}</h4>
      <h6 className='mt-4'>{text}</h6>
    </div>
    </div>
  )
}

export default CustomHomeNumber
