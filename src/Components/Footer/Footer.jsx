import React, { useEffect, useState } from 'react'
import style from '../../Assents/Style/Homepage.module.css'
import logo from '../../Assents/Images/navbar/image 1.png'
import xlogo from '../../Assents/Images/footer/X.svg'
import linkedInlogo from '../../Assents/Images/footer/Linkedin.svg'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { HandelGetCountOfVisitors } from '../../store/AuthSlice'

const Footer = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [pageData , setPageData] = useState([])
  const HandelLinks = async ()=>{
    const res = await dispatch(HandelGetCountOfVisitors())
    setPageData(res.payload.data)
  }
  useEffect(() => {
    HandelLinks()
  }, []);

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
                    <li  onClick={()=>navigate("/OurServices")} style={{cursor:'pointer'}} className={[style.pfooter,'mb-4'].join(" ")}>المسار المهني للشهادات الاحترافية</li>
                    <li onClick={()=>navigate("/ProfessionalCertificationSpecialties")} className={[style.pfooter,'mb-4'].join(" ")} style={{cursor:'pointer'}}>قائمة التخصصات الرئيسية</li>
                    <li onClick={()=>navigate("/ContactUs")} className={[style.pfooter,'mb-4'].join(" ")} style={{cursor:'pointer'}}>تواصل معنا</li>
                </ul>
            </div>
            <div className='col-md-3 text-start bg-'>
            <a href={`${pageData.X}`} target='_blank'>
                <div className='me-auto' style={{width:'40px',height:'40px'}}>
                <img className='w-100' src={xlogo} alt='xlogo'/>
                </div>
                </a>
                <a href={`${pageData.LinkedIn}`} target='_blank'>
                <div  className='me-auto mt-3' style={{width:'40px',height:'40px'}}>
                <img className='w-100' src={linkedInlogo} alt='xlogo'/>
                </div>
                </a>
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
