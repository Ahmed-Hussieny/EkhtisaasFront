import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { HandelGetSingleAdvisor } from '../../store/AdvisorSlice'
import icon1 from '../../Assents/Images/ADMIN/Advisors/@.png';
import icon2 from '../../Assents/Images/ADMIN/Advisors/Vector (8).png';
import icon3 from '../../Assents/Images/ADMIN/Advisors/x.png';
import icon4 from '../../Assents/Images/ADMIN/Advisors/web.png';
import style from '../../Assents/Style/Advisor.module.css'
import icon11 from '../../Assents/Images/Advisor/Subtract.svg'
import icon22 from '../../Assents/Images/Advisor/Subtract (1).svg'
import icon111 from "../../Assents/Images/Advisor/Vector 9.svg";
import imageLast from '../../Assents/Images/Advisor/Rectangle 21875.png'
import iconTrue from '../../Assents/Images/Advisor/check_ring_round_duotone.svg'

const MentorDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const [AdvisorData,setAdvisorData] = useState([])
    const getAdvisorData = async()=>{
        const res = await dispatch(HandelGetSingleAdvisor(id))
        console.log(res);
        setAdvisorData(res.payload.data)
    }
    useEffect(()=>{
        getAdvisorData()
    },[])
    const renderStars = (rate) => {
        return Array.from({ length: rate }, (_, index) => (
          <span key={index} role="img" aria-label="star">⭐</span>
        ));
      };
  return (
    <div className={style.font}>
      <div className='container'>
      <div className='row my-5 mx-0 p-4 d-flex align-items-center'>
      <div className='col-md-5 ' >
      <div className='position-relative rounded-3 '>
        <img src={AdvisorData?.Image?.secure_url} alt={`${AdvisorData.name}`} className='rounded-3 w-100' />
        <div className='rounded-4 p-3 w-75 m-auto' style={{ color: 'rgba(41, 41, 41, 1)', position: 'relative', bottom: '50px', left: 0, backgroundColor: 'rgba(242, 247, 252, 1)' }}>
          <div className='row gy-'>
            <div className='col-md-6 text-center'>
              <p className='fw-bold'>{AdvisorData.name}</p>
            </div>
            <div className='col-md-6 text-center'>
              {renderStars(AdvisorData.Rate)}
            </div>
          </div>
          <div className='text-center pt-2'>
            <p>{AdvisorData.contentcareer}</p>
          </div>
          <div className='d-flex px-lg-5 justify-content-between align-items-center'>
            <div>
              <img src={icon1} alt='Email icon' />
            </div>
            <div>
              <img src={icon2} alt='LinkedIn icon' />
            </div>
            <div>
              <img src={icon3} alt='X (Twitter) icon' />
            </div>
            <div>
              <img src={icon4} alt='Website icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='col-md-7'>
        <div className='text-center'><p>{AdvisorData.Description}</p></div>
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
        <p className={style.gradientText}>{AdvisorData.ExperienceInYears}</p>
      </div>
      <div className='pb-5 text-center' style={{fontSize:'22px'}}>
        <p>أكثر من {AdvisorData.ExperienceInYears} سنوات من الخبرة في مجال الإرشاد المهني</p>
      </div>
      </div>
      {/* section 3 */}

      <div className="d-flex mt-5 justify-content-center  align-items-center">
          <div className='text-center'>
            <p style={{ fontSize: "30px", fontWeight: 500 }}>
            التكلفة التقريبية لجلسة الإرشاد المهني
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

        <div className='container'>
            <div className='row d-flex  pt-3'>
                <div className='col-md-6'>
                <div className='position-relative rounded-3 text-center '>
        <img src={imageLast} alt={`${AdvisorData.name}`} className='rounded-3 w-75' />
        <div className='rounded-4 p-3 w-50 m-auto fw-bold' style={{ color: 'rgba(255, 255, 255, 1)', position: 'relative', bottom: '50px', left: 0, backgroundColor: 'rgba(31, 42, 68, 1)' }}>
          
          <div className='text-center pt-2'>
            <p>{AdvisorData.PriceOfCareerCounselingSession} ريال سعودي</p>
          </div>
          
        </div>
      </div>
                </div>
                <div className='col-md-6' style={{color:'rgba(70, 70, 70, 1)'}}>
                    {/* 1 */}
                    <div className='d-flex aler'>
                    <img src={iconTrue}  alt='iconTrue'/>
                        <p className='pt-1 pe-4' style={{fontSize:'20px' ,color:'rgba(70, 70, 70, 1)'}}>تحديد الأهداف.</p>
                    </div>
                    {/* 2 */}
                    <div className='d-flex align-items-center'>
                    <img src={iconTrue}  alt='iconTrue'/>
                        <p className='pt-1 pe-4' style={{fontSize:'20px' ,color:'rgba(70, 70, 70, 1)'}}> تقييم المهارات والقدرات.</p>
                    </div>
                    {/* 3 */}
                    <div className='d-flex align-items-center'>
                    <img src={iconTrue}  alt='iconTrue'/>
                        <p className='pt-1 pe-4' style={{fontSize:'20px' ,color:'rgba(70, 70, 70, 1)'}}> استكشاف مسارات مهنية.</p>
                    </div>
                     {/* 4 */}
                     <div className='d-flex align-items-center'>
                    <img src={iconTrue}  alt='iconTrue'/>
                        <p className='pt-1 pe-4' style={{fontSize:'20px' ,color:'rgba(70, 70, 70, 1)'}}>وضع خطة عمل شخصية.</p>
                    </div>
                    {/* 5 */}
                    <div className='d-flex align-items-center'>
                    <img src={iconTrue}  alt='iconTrue'/>
                        <p className='pt-1 pe-4' style={{fontSize:'20px' ,color:'rgba(70, 70, 70, 1)'}}>استعراض الاستراتيجيات والتقنيات.</p>
                    </div>
                     {/* 6 */}
                     <div className='d-flex align-items-center'>
                    <img src={iconTrue}  alt='iconTrue'/>
                        <p className='pt-1 pe-4' style={{fontSize:'20px' ,color:'rgba(70, 70, 70, 1)'}}>تقديم الدعم والتحفيز.</p>
                    </div>
                     {/* 7 */}
                     <div className='d-flex align-items-center'>
                    <img src={iconTrue}  alt='iconTrue'/>
                        <p className='pt-1 pe-4' style={{fontSize:'20px' ,color:'rgba(70, 70, 70, 1)'}}>وضع الخطة الزمنية.</p>
                    </div>
                    <div className='d-flex align-items-center'>
                    <img src={iconTrue}  alt='iconTrue'/>
                        <p className='pt-1 pe-4' style={{fontSize:'20px' ,color:'rgba(70, 70, 70, 1)'}}>متابعة وتقييم الأداء.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='text-center my-5'>
            <p style={{fontSize:'26px',color:'rgba(31, 42, 68, 1)'}}>قنوات التواصل</p>
        </div>
        <div className='text-center m-auto mb-5 pb-5'>
            <div className='d-flex px-lg-5 m-auto justify-content-center align-items-center'>
            <div className='ms-4'>
              <img src={icon1} alt='Email icon' />
            </div>
            <div className='ms-4'>
              <img src={icon2} alt='LinkedIn icon' />
            </div>
            <div className='ms-4'>
              <img src={icon3} alt='X (Twitter) icon' />
            </div>
            <div className='ms-4'>
              <img src={icon4} alt='Website icon' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default MentorDetails
