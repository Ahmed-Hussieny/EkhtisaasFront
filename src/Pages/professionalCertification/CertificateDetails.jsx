import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { HandelGetSingleCertificate } from '../../store/CertificateSlice';
import tabicon1 from '../../Assents/Images/ProfessionalCertification/tabIcons/image 25.svg';
import tabicon2 from '../../Assents/Images/ProfessionalCertification/tabIcons/image 24.svg';
import tabicon3 from '../../Assents/Images/ProfessionalCertification/tabIcons/image 26.svg';
import tabicon4 from '../../Assents/Images/ProfessionalCertification/tabIcons/image 21.svg';
import tabicon5 from '../../Assents/Images/ProfessionalCertification/tabIcons/image 22.svg';
import Resume from '../../Assents/Images/ProfessionalCertification/Resume.svg';
import Resume1 from '../../Assents/Images/ProfessionalCertification/rafiki.svg';
import Resume3 from '../../Assents/Images/ProfessionalCertification/Resume3.svg';
import Resume4 from '../../Assents/Images/ProfessionalCertification/resume4.svg';
import Resume5 from '../../Assents/Images/ProfessionalCertification/Resume5.svg';
import frame1R from '../../Assents/Images/ProfessionalCertification/Frames/Rectangle 4124.png'
import frame2R from '../../Assents/Images/ProfessionalCertification/Frames/Rectangle 4126.svg'
import frame1L from '../../Assents/Images/ProfessionalCertification/Frames/Rectangle 4125.svg'
import frame2L from '../../Assents/Images/ProfessionalCertification/Frames/Rectangle 4127.svg'
import iconframe1 from '../../Assents/Images/ProfessionalCertification/Frames/image 29.svg'
import iconframe2 from '../../Assents/Images/ProfessionalCertification/Frames/image 30.svg'
import icon1 from '../../Assents/Images/ProfessionalCertification/Frames/Group 89 (1).svg'
import doticon from '../../Assents/Images/ProfessionalCertification/Frames/Group (1).svg'

import icon2 from '../../Assents/Images/ProfessionalCertification/Group.png'
import Bglast from '../../Assents/Images/ProfessionalCertification/Background (1).png'

import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from '@mui/material';
import style from '../../Assents/Style/ProfessionalCertification.module.css'
const CertificateDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [certificateData, setCertificateData] = useState([]);
  const [activeTab, setActiveTab] = useState('tab1');
  const [Specialties,setSpecialties] = useState([])
  const [JobTitle,setJobTitle] = useState([])
  const [Prerequisites,setPrerequisites] = useState([])
  const [scientificMethods,setscientificMethods] = useState([])
  const [SupportedLanguages,setSupportedLanguages] = useState([])


  


  
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const convertToArray = (inputString) => {
    return inputString.split(',').map(word => word.trim());
  };
  const tabs = [
    {
      id: 'tab1',
      title: 'التخصصات المدعومة',
      icon: tabicon1,
      content: (
        <div className="mt-5 py-5 " style={{color:'rgba(31, 42, 68, 1)'}}>
            <div className='row px-lg-5 m-0 d-flex align-items-center'>
                <div className='col-md-6'>
                <p style={{fontSize:'18px',fontWeight:'600'}} className='pe-3'>التخصصات التي تدعمها الشهادة:</p>
                <ul>
            {Specialties.map((el)=>{
                return <li>
                    <p style={{fontSize:'17px'}}>{el}</p>
                </li>
            })}
            </ul>
                </div>
                <div className='col-md-6 text-center d-none d-lg-block'>
                    <img className='w-75' src={Resume} alt=''/>
                </div>
            </div>
        </div>
      )
    },
    {
      id: 'tab2',
      title: 'المسميات الوظيفية',
      icon: tabicon2,
      content: (
        <div className="mt-5 py-5 " style={{color:'rgba(31, 42, 68, 1)'}}>
            <div className='row px-lg-5 m-0 d-flex align-items-center'>
                <div className='col-md-6'>
                <p style={{fontSize:'22px',fontWeight:'600'}} className='pe-3 py-4'>المسمي الوظيفي</p>
               <div className='row m-0'>
            {JobTitle.map((el)=>{
                return <div className='col-md-6'>
                        <ul>
                        <li>
                    <p style={{fontSize:'17px'}}>{el}</p>
                </li>
                        </ul>
                    </div>
             
            })}   </div>
                </div>
                <div className='col-md-6 text-center d-none d-lg-block'>
                    <img className='w-75' src={Resume1} alt=''/>
                </div>
            </div>
        </div>
      )
    },
    {
      id: 'tab3',
      title: 'المتطلبات المسبقة',
      icon: tabicon3,
      content: (
        <div className="mt-5 py-5 " style={{color:'rgba(31, 42, 68, 1)'}}>
        <div className='row px-lg-5 m-0 d-flex align-items-center'>
            <div className='col-md-6'>
            <p style={{fontSize:'18px',fontWeight:'600'}} className='pe-3'>المتطلبات المسبقة</p>
            <ul>
        {Prerequisites.map((el)=>{
            return <li>
                <p style={{fontSize:'17px'}}>{el}</p>
            </li>
        })}
        </ul>
            </div>
            <div className='col-md-6 text-center d-none d-lg-block'>
                <img className='w-75' src={Resume3} alt=''/>
            </div>
        </div>
    </div>
      )
    },
    {
      id: 'tab4',
      title: 'المنهج التعليمي',
      icon: tabicon4,
      content: (
        <div className="mt-5 py-5 " style={{color:'rgba(31, 42, 68, 1)'}}>
        <div className='row px-lg-5 m-0 d-flex align-items-center'>
            <div className='col-md-6'>
            <p style={{fontSize:'18px',fontWeight:'600'}} className='pe-3'>المنهج العلمي</p>
            <ul>
        {scientificMethods.map((el)=>{
            return <li>
                <p style={{fontSize:'17px'}}>{el}</p>
            </li>
        })}
        </ul>
            </div>
            <div className='col-md-6 text-center d-none d-lg-block'>
                <img className='w-75' src={Resume4} alt=''/>
            </div>
        </div>
    </div>
      )
    },
    {
      id: 'tab5',
      title: 'اللغات المدعومة',
      icon: tabicon5,
      content: (
        <div className="mt-5 py-5 " style={{color:'rgba(31, 42, 68, 1)'}}>
        <div className='row px-lg-5 m-0 d-flex align-items-center'>
            <div className='col-md-6'>
            <p style={{fontSize:'18px',fontWeight:'600'}} className='pe-3'>اللغات المدعومة</p>
            <ul>
        {SupportedLanguages.map((el)=>{
            return <li>
                <p style={{fontSize:'17px'}}>{el}</p>
            </li>
        })}
        </ul>
            </div>
            <div className='col-md-6 text-center d-none d-lg-block'>
                <img className='w-75' src={Resume5} alt=''/>
            </div>
        </div>
    </div>
      )
    }
  ];

  const getCertificateData = async () => {
    const res = await dispatch(HandelGetSingleCertificate(id));
    setCertificateData(res.payload.data);
    console.log(res.payload.data);
    setSpecialties(convertToArray(res.payload.data.Specialties));
    setJobTitle(convertToArray(res.payload.data.JobTitle))
    setPrerequisites(convertToArray(res.payload.data.Prerequisites))
    setscientificMethods(convertToArray(res.payload.data.scientificMethods))
    setSupportedLanguages(convertToArray(res.payload.data.SupportedLanguages))
  };

  useEffect(() => {
    getCertificateData();
  }, []);

  const getBorderColor = (level) => {
    if (level === "مبتدئ") return "rgba(40, 170, 222, 1)";
    if (level === "متوسط") return "rgba(243, 151, 26, 1)";
    return "rgba(42, 177, 118, 1)";
  };

  return (
    <div style={{ marginTop: '5rem' }} className={style.font}>
      {/* first section */}
      <div className='container'>
        <div className='my-5 py-4 text-center'>
          <p style={{ fontSize: '30px' }}>تفاصيل الشهادة</p>
        </div>
        <div className='row px-lg-5 g-4 d-flex align-items-center'>
          <div className='col-md-6'>
            <div
              className="rounded-4 position-relative"
              style={{
                border: '1px solid',
                borderColor: getBorderColor(certificateData.Level),
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0 }}>
                <div style={{ backgroundColor: getBorderColor(certificateData.Level), borderTopLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
                  <p style={{ fontSize: '15px' }} className='px-4 text-white py-1'>{certificateData.Level}</p>
                </div>
              </div>
              <div className='mt-5 mb-3 text-center'>
                <p>شعار المنظمة</p>
                <div>
                  <img className='w-50 ' src={certificateData?.certificateImage?.secure_url} alt={certificateData.Title} />
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <div>
              <div>
                <h4 style={{ fontSize: '28px', color: 'rgba(70, 70, 70, 1)' }} className='mb-4'>{certificateData.certificateName}</h4>
              </div>
              <p style={{ fontSize: '20px', color: 'rgba(101, 101, 101, 1)' }}>{certificateData.Description}</p>
            </div>
          </div>
          <div style={{ cursor: 'pointer' }}>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className={[style.bgImage3,style.font].join(" ")} style={{  paddingTop: '4rem', paddingBottom: '5rem' }}>
        {/* 1 */}
        <div className='py-5 pb-3 text-center'>
          <p style={{ fontSize: '30px', color: 'rgba(31, 42, 68, 1)' }}>المنظمة</p>
        </div>
        {/* 2 */}
        <div className='text-center'>
          <img src={certificateData?.organizationImage?.secure_url} alt='organizationImage' />
        </div>
        {/* 3 */}
        <div className='text-center py-4'>
          <p style={{ fontSize: '30px', color: 'rgba(31, 42, 68, 1)' }}>{certificateData?.organizationName}</p>
        </div>

        {/* 4 Tabs */}
        {/* third section */}
        <div className="container-fluid px-5">
          {/* Dropdown for smaller screens */}
          {isSmallScreen ? (
            <div style={{ textAlign: 'center' }}>
              <Dropdown onSelect={setActiveTab}>
                <Dropdown.Toggle style={{ backgroundColor: 'rgba(31, 42, 68, 1)', borderColor: 'rgba(31, 42, 68, 1)' }} id="dropdown-basic">
                  {tabs.find(tab => tab.id === activeTab).title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {tabs.map(tab => (
                    <Dropdown.Item key={tab.id} eventKey={tab.id}>
                      {tab.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <>
              {/* Tabs for larger screens */}
              <div className="d-flex justify-content-between">
                {tabs.map(tab => (
                  <div
                    key={tab.id}
                    className={`p-3 shadow-sm text-center px-4 rounded-3  ${activeTab === tab.id ? 'text-white' : 'bg-white'}`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{ cursor: 'pointer',backgroundColor:activeTab?'rgba(31, 42, 68, 1)':"" }}
                  >
                    <img src={tab.icon} alt={tab.id} />
                    <p style={{ fontSize: '20px' }}>{tab.title}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Tab content */}
          {tabs.map(tab => (
            <div key={tab.id} className='container' style={{ display: activeTab === tab.id ? 'block' : 'none',}}>
              {tab.content}
            </div>
          ))}
        </div>
      </div>

      <div className='row my-5 g-5  mx-0 px-0 bg'>
        <div className='col-md-6  p-0'>
            <div className='position-relative m-0 ps-4 d-flex align-items-center justify-content-center'>
                <img className='w-100' src={frame1R} alt='frame1R'/>
                <div className='' style={{position:'absolute',top:-30,right:15}}>
                    <img  className='w-100 ps-2' src={frame2R} alt='frame2R'/>
                </div>
                <div className='w-75 text-center' style={{position:'absolute'}}>
                    
                    <div className='row d-flex align-items-end'>
                        
                        <div className='col-md-6'>
                        <img src={iconframe1} alt='iconframe1'/> 
                        </div>
                        <div className='col-md-6'>
                        <p className='fw-bold p-0 m-sm-0' style={{fontSize:'30px'}}>{certificateData.NumberOfTests}</p>
                        <p className='fw-bold p-0 mt-0' style={{fontSize:'22px'}}> عدد  الإختبارات </p>
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
                    
                    <div className='row d-flex align-items-end'>
                        
                        <div className='col-md-6'>
                        <img src={iconframe2} alt='iconframe2'/> 
                        </div>
                        <div className='col-md-6'>
                        <p className='fw-bold p-0 m-sm-0' style={{fontSize:'30px'}}>{certificateData.CertificateValidityPeriod}</p>
                        <p className='fw-bold p-0 mt-0' style={{fontSize:'22px'}}>   مدة  صلاحية الشهادة </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
      </div>

      {/* third section */}
      <div className=' d-flex justify-content-center align-items-center my-5 pt-5'>
      <div className='pb-5'>
            <img src={icon1} alt=''/>
        </div>
       <div className='pt-3'>
       <p style={{fontSize:'30px'}}>جهات التدريب</p>
       </div>
        
      </div>
      <div className='container'>
        <div className='row m-0 gy-4 my-5'>
            <div className='col-md-6'>
                <div className=' px-5' >
                    <div className='mx-4 py-2   d-flex justify-content-center align-items-center '>
                        <p className='px-4 py-2 position-relative rounded-3 m-0 fw-bold' style={{backgroundColor:'rgba(242, 247, 252, 1)',fontSize:'18px'}} >تعليم ذاتي <div style={{position:'absolute',top:-10,right:-20}}>
                        <img className='w-75' src={doticon} alt='doticon'/>
                    </div></p>
                    </div>
                </div>
                <div className='text-center'>
                {certificateData?.selfEducations?.map((el)=>{
                    return <div>
                        <div>
                            <div className='my-4'>
                            <img className='w-75' src={el.Image.secure_url} alt=''/>
                            </div>
                            <div>
                            <a href={el.selfEducationURL} style={{fontSize:'22px',fontWeight:'bold',color:'rgba(70, 70, 70, 1)'}} target='_blank'> {el.selfEducationTitle} </a>
                            </div>
                        </div>
                    </div>
                })}
                </div>
            </div>
            <div className='col-md-6'>
            <div className=' px-5' >
                    <div className='mx-4 py-2   d-flex justify-content-center align-items-center '>
                        <p className='px-4 py-2 position-relative rounded-3 m-0 fw-bold' style={{backgroundColor:'rgba(242, 247, 252, 1)',fontSize:'18px'}} > تعليم مباشر <div style={{position:'absolute',top:-10,right:-20}}>
                        <img className='w-75' src={doticon} alt='doticon'/>
                    </div></p>
                    </div>
                </div>
                <div className='text-center'>
                {certificateData?.directEducations?.map((el)=>{
                    return <div>
                        <div>
                            <div className='my-4'>
                            <img className='' src={el.Image.secure_url} alt=''/>
                            </div>
                            <div>
                            <a href={el.directEducationURL} style={{fontSize:'22px',fontWeight:'bold',color:'rgba(70, 70, 70, 1)'}} target='_blank'> {el.directEducationTitle} </a>
                            </div>
                        </div>
                    </div>
                })}
                </div>
            </div>
        </div>
      </div>
    {/* forth section */}
        {certificateData.supportSides.length >0 ?
        <div className={[style.bgImage4,"pb-5 mb-5"].join(" ")}>
        <div className=' d-flex justify-content-center align-items-center my-5 pt-5'>
      <div className='pb-5'>
            <img src={icon2} alt=''/>
        </div>
       <div className='pt-3'>
       <p style={{fontSize:'30px'}}> جهة الدعم</p>
       </div>
        
      </div>
      <div className='container-fluid'>
        <div className='row m-0 p-0 gy-3'>
            {certificateData.supportSides.map((el)=>{
                return <div className='col-md-4'>
                        <div className='text-center'>
                            <img className='w-75' src={el.Image.secure_url} alt=''/>
                        </div>
                        <div className='text-center pt-3'>
                            <p style={{fontSize:'22px'}}>{el.supportSideTitle}</p>
                        </div>
            </div>
            })}
            
        </div>
      </div>
        </div>:""}
  
  {/* fifth section */}
  <div className='container my-5'>
        <div className='border rounded-4 border-1'>
            <div className='row m-0 rounded-top-4 py-4' style={{backgroundColor:'rgba(245, 247, 250, 1)'}}>
                <div className='col-5 pe-5 fw-bold' style={{color:'rgba(41, 41, 41, 1)',fontSize:'22px'}}>
                    <p className='pe-5'>الجهة</p>
                </div>
                <div className='col-7 pe-5 fw-bold' style={{color:'rgba(41, 41, 41, 1)',fontSize:'22px'}}>
                    <p className='pe-5'>التكلفة</p>
                </div>
            </div>
            <div className='row m-0 rounded-top-4 py-4' >
                <div className='col-5 pe-5 ' style={{color:'rgba(70, 70, 70, 1)',fontSize:'22px'}}>
                    <p className='pe-5'>التدريب</p>
                </div>
                <div className='col-7 pe-5 ' style={{color:'rgba(70, 70, 70, 1)',fontSize:'22px'}}>
                    <p className='pe-5'>{certificateData.trainingCost}ريال سعودي</p>
                </div>
            </div>
            <div className='row m-0 rounded-top-4 py-4' >
                <div className='col-5 pe-5 ' style={{color:'rgba(70, 70, 70, 1)',fontSize:'22px'}}>
                    <p className='pe-5'>الاختبار</p>
                </div>
                <div className='col-7 pe-5 ' style={{color:'rgba(70, 70, 70, 1)',fontSize:'22px'}}>
                    <p className='pe-5'>{certificateData.testCost}ريال سعودي</p>
                </div>
            </div>
            <div className='border border-bottom mx-4'></div>
            <div className='row m-0 rounded-top-4 py-4' >
                <div className='col-5 pe-5 fw-bold' style={{color:'rgba(41, 41, 41, 1)',fontSize:'22px'}}>
                    <p className='pe-5'>الاجمالي</p>
                </div>
                <div className='col-7 pe-5 fw-bold' style={{color:'rgba(41, 41, 41, 1)',fontSize:'22px'}}>
                    <p className='pe-5'>{certificateData.totalCost}ريال سعودي</p>
                </div>
            </div>
        </div>
  </div>
     
    </div>
  );
}

export default CertificateDetails;
