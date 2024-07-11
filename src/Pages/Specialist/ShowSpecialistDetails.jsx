
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import icon1 from '../../Assents/Images/ADMIN/Advisors/@.png';
import icon2 from '../../Assents/Images/ADMIN/Advisors/Vector (8).png';
import icon3 from '../../Assents/Images/ADMIN/Advisors/x.png';
import icon4 from '../../Assents/Images/ADMIN/Advisors/web.png';
import style from '../../Assents/Style/Advisor.module.css'
import icon11 from '../../Assents/Images/Advisor/Subtract.svg'
import icon22 from '../../Assents/Images/Advisor/Subtract (1).svg'
import icon111 from "../../Assents/Images/Advisor/Vector 9.svg";
import icon5 from "../../Assents/Images/Specialist/Vector (9).svg";
import line1 from '../../Assents/Images/Specialist/Group (2).svg'
import line2 from '../../Assents/Images/Specialist/Group (3).svg'
import iconline1 from '../../Assents/Images/Specialist/image 36.svg'
import iconline2 from '../../Assents/Images/Specialist/image 37.svg'
import iconline3 from '../../Assents/Images/Specialist/image 38.svg'
import frame1R from '../../Assents/Images/ProfessionalCertification/Frames/Rectangle 4124.png'
import frame2R from '../../Assents/Images/ProfessionalCertification/Frames/Rectangle 4126.svg'
import frame1L from '../../Assents/Images/ProfessionalCertification/Frames/Rectangle 4125.svg'
import frame2L from '../../Assents/Images/ProfessionalCertification/Frames/Rectangle 4127.svg'
import iconframe1 from '../../Assents/Images/ProfessionalCertification/Frames/image 29.svg'
import iconframe2 from '../../Assents/Images/ProfessionalCertification/Frames/image 30.svg'
import iconframe1In from '../../Assents/Images/Specialist/image 34.svg'
import iconframe2In from '../../Assents/Images/Specialist/image 35.svg'
import { HandelGetSingleSpecialist } from '../../store/SpecialistSlice';

const ShowSpecialistDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [Specialist,setSpecialist] = useState([])
    const [servicesDetails,setServicesDetails] = useState("")
    const getSpecialist = async()=>{
        const res = await dispatch(HandelGetSingleSpecialist(id))
        console.log(res);
        setSpecialist(res.payload.data)
        setServicesDetails(convertToArray(res.payload.data.Services))
    }
    useEffect(()=>{
        getSpecialist()
    },[])
    const openEmail = (recipient, subject, body) => {
      const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    };
    const convertToArray = (inputString) => {
      return inputString.split(',').map(word => word.trim());
    };
    const renderStars = (rate) => {
        return Array.from({ length: rate }, (_, index) => (
          <span key={index} role="img" aria-label="star">⭐</span>
        ));
      };
      const getBorderColor = (Category) => {
        if (Category === "تصنيف A") return "rgba(0, 175, 80, 1)";
        if (Category === "تصنيف B") return "rgba(237, 125, 49, 1)";
        return "rgba(252, 216, 111, 1)";
      };
  return (
    <div className={style.font}>
      <div className='container'>
      <div className='row my-5 mx-0 p-4 d-flex align-items-center'>
      <div className='col-md-5 ' >
      <div className='rounded-3 position-relative'>
        <img src={Specialist?.Image?.secure_url} alt={`${Specialist.name}`} className='rounded-3 w-100' />
        <div style={{position:'absolute',top:0,left:0}}>
        <div  style={{backgroundColor:getBorderColor(Specialist.Category),borderTopLeftRadius:'15px',borderBottomRightRadius:'15px'}}>
        <p style={{fontSize:'15px'}} className='px-4 text-white py-1'>{Specialist.Category}</p>
        </div>
        </div>
      </div>
      <div className='text-center mt-4'>
        <p className='fw-bold' style={{fontSize:'22px'}}>
          {Specialist.name}
        </p>
      </div>
    </div>
    <div className='col-md-7'>
        <div className='text-center'><p style={{fontSize:'18px',color:'rgba(70, 70, 70, 1)'}}>{Specialist.Description}</p></div>
    </div>
      </div>

      

      </div>
      {/* section 2 */}
      <div className={style.bgImage4}>
      <div className='d-flex pt-5  mt-5 justify-content-center  align-items-center'>
     
        <div className='pt-5'>
          <p style={{fontSize:'30px',fontWeight:500}}> خبرتنا</p>
        </div>
        <div className='mt-5 pt-5'>
          <img className='pb-5 me-lg-2' src={icon11} alt=''/>
          <img className='py-5 me-lg-2' src={icon22} alt=''/>
        </div>
      </div>
      <div className='pb- text-center fw-bold' style={{fontSize:'80px'}}>
        <p className={style.gradientText}>{Specialist.ExperienceInYears}</p>
      </div>
      <div className='pb-5 text-center' style={{fontSize:'22px'}}>
        <p>أكثر من {Specialist.ExperienceInYears} سنوات من الخبرة في مجال الإرشاد المهني</p>
      </div>
      </div>
      {/* section 3 */}

      <div className="d-flex mt-5 justify-content-center  align-items-center">
          <div className='text-center'>
            <p style={{ fontSize: "30px", fontWeight: 500 }}>
            خدماتنا
            </p>
            
          </div>
          <div className="">
            <img className="pb-5 me-2 " src={icon5} alt="" />
          </div>
        </div>

        <div className='row my-5 d-flex align-items-center m-0 p-0'>
          <div className='col-md-1 p-0 m-0'>
            <img className='w-100' src={line1} alt=''/>
          </div>
          <div className=' col-md-10'>
          <div className=' row'>
          {servicesDetails.includes("الإرشاد المهني")?
            <div className={`col-md-${12/servicesDetails.length}`}>
              <div className='p-3 text-center shadow'>
                <img src={iconline1} alt='iconline1'/>
                <p style={{fontSize:'16px',fontWeight:'bold'}}>الإرشاد المهني</p>
              </div>
              
            </div>
            :""}
            {servicesDetails.includes("تعديل ملف اللينكدين")?
              <div className={`col-md-${12/servicesDetails.length}`}>
              <div className='p-3 text-center shadow'>
                <img src={iconline2} alt='iconline1'/>
                <p style={{fontSize:'16px',fontWeight:'bold'}}> تعديل ملف اللينكدين</p>
              </div>
              
            </div>
            :""}
            {servicesDetails.includes("كتابة السيرة الذاتية")?
              <div className={`col-md-${12/servicesDetails.length}`}>
              <div className='p-3 text-center shadow'>
                <img src={iconline3} alt='iconline1'/>
                <p style={{fontSize:'16px',fontWeight:'bold'}}>كتابة السيرة الذاتية</p>
              </div>
              
            </div>
            :""}
            
          </div>
          </div>
          <div className='col-md-1 p-0 m-0  text-start'>
            <img className='w-100' src={line2} alt=''/>
          </div>
        </div>
        <div className="d-flex mt-5 justify-content-center  align-items-center">
          <div className='text-center'>
            <p style={{ fontSize: "30px", fontWeight: 500 }}>
            التكلفة التقريبية   لكتابة السيرة الذاتية
            </p>
            <div className='row m-0'>
            <div className='col-md-6'>
               
                </div>
                <div className='col-md-6'>
                <div className="me-5 pe-5">
            <img className="pb-5 me-5 " src={icon111} alt="" />
          </div>
                </div>
            </div>
          </div>
          
        </div>

        <div>
        <div className='row my-5 g-5 pb-4  mx-0 px-0 bg'>
        <div className='col-md-6  p-0'>
            <div className='position-relative m-0 ps-4 d-flex align-items-center justify-content-center'>
                <img className='w-100' src={frame1R} alt='frame1R'/>
                <div className='' style={{position:'absolute',top:-30,right:15}}>
                    <img  className='w-100 ps-2' src={frame2R} alt='frame2R'/>
                </div>
                <div className='w-75 text-center' style={{position:'absolute'}}>
                    
                    <div className=' text-center '>
                        
                        <div className=''>
                            <p style={{fontSize:'24px'}}><span  style={{fontSize:'28px'}} className='fw-bold'>{Specialist.PriceOfServices} </span> ريال سعودي</p>
                        </div>
                        <div className='d-flex justify-content-center align-items-center '>
                        <img src={iconframe1In} alt='iconframe1In'/>
                        <p className='fw-bold me-3 p-0 mt-0' style={{fontSize:'22px'}}>   التكلفة </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div className='col-md-6  p-0'>
            <div className='position-relative m-0 pe-4 d-flex align-items-center justify-content-center'>
                <img className='w-100' src={frame1L} alt='frame1R'/>
                <div className='' style={{position:'absolute',top:-30,left:15}}>
                    <img  className='w-100 pe-2' src={frame2L} alt='frame2R'/>
                </div>
                <div className='w-75 text-center' style={{position:'absolute'}}>
                    
                <div className=' text-center '>
                        
                        <div className='mb-2' style={{fontSize:'25px'}}>
                        {renderStars(Specialist.Rate)}
                        </div>
                        <div className='d-flex justify-content-center align-items-center '>
                        <img src={iconframe2In} alt='iconframe1In'/>
                        <p className='fw-bold p-0 me-3 mt-0 pt-2' style={{fontSize:'22px'}}>   التقييم </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
      </div>
        </div>
        <div className='text-center my-5'>
            <p style={{fontSize:'26px',color:'rgba(31, 42, 68, 1)'}}>قنوات التواصل</p>
        </div>
        <div className='text-center m-auto mb-5 pb-5'>
            <div className='d-flex px-lg-5 m-auto justify-content-center align-items-center'>
            <div style={{cursor:'pointer'}} onClick={() => openEmail(Specialist.email, 'Hello!', 'I wanted to reach out and say hello.')} className='ms-4 d-flex justify-content-center align-items-center'>
              <img src={icon1} alt='Email icon' />
            </div>
            <div className='ms-4'>
            <a style={{textDecoration:'none',color:'black',cursor:'pointer'}} href={`${Specialist.linkedIn}`}  className="d-flex align-items-center" target='_blank' rel="noreferrer">
<img src={icon2} alt='LinkedIn icon' />
</a>
              
            </div>
            <div className='ms-4'>
            <a style={{textDecoration:'none',color:'black',cursor:'pointer'}} href={`${Specialist.X}`}  className="d-flex align-items-center" target='_blank' rel="noreferrer">
            <img src={icon3} alt='X (Twitter) icon' />
</a>
              
            </div>
            <div className='ms-4'>
            <a style={{textDecoration:'none',color:'black',cursor:'pointer'}} href={`${Specialist.website}`}  className="d-flex align-items-center" target='_blank' rel="noreferrer">
              <img src={icon4} alt='Website icon' />

</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ShowSpecialistDetails
