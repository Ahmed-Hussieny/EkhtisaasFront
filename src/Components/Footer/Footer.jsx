import React from 'react'
import style from '../../Assents/Style/Homepage.module.css'
import logo from '../../Assents/Images/navbar/image 1.png'
import xlogo from '../../Assents/Images/footer/X.svg'
import linkedInlogo from '../../Assents/Images/footer/Linkedin.svg'

const Footer = () => {
  return (
    <>
      <div className={[style.footerContainer ,style.font,"  pt-3"].join(" ")}>
      <div className='container px-5 '>
        <div className='row  m-0 d-flex align-items-center gy-3'>
            <div className='col-md-5'>
                <img src={logo} alt=''/>
            </div>
            <div className='col-md-4 bg- '>
                <h5 className='pe-3 mb-4'>روابط سريعة</h5>
                <ul>
                    <li className={[style.pfooter,'mb-4'].join(" ")}>المسار المهني للشهادات الاحترافية</li>
                    <li className={[style.pfooter,'mb-4'].join(" ")}>قائمة التخصصات الرئيسية</li>
                    <li className={[style.pfooter,'mb-4'].join(" ")}>تواصل معنا</li>
                </ul>
            </div>
            <div className='col-md-3 text-start bg-'>
                <div className='me-auto' style={{width:'40px',height:'40px'}}>
                <img className='w-100' src={xlogo} alt='xlogo'/>
                </div>
                <div  className='me-auto mt-3' style={{width:'40px',height:'40px'}}>
                <img className='w-100' src={linkedInlogo} alt='xlogo'/>
                </div>
            </div>
        </div>
        <div className='text-center py-3 m5'>
            <p className={style.pfooterlast}>
            جميع الحقوق محفوظة لمنصة اختصاص  ©2024  
            </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer
