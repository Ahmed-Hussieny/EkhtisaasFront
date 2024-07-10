import React, { useEffect, useState } from 'react'
import {  HandelGetSingleSubSpecialty } from '../../store/SpecialtiesSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import typeIcon1 from '../../Assents/Images/ProfessionalCertification/Beaker.svg'
import typeIcon2 from '../../Assents/Images/ProfessionalCertification/Atom.svg'
import typeIcon3 from '../../Assents/Images/ProfessionalCertification/Telecope.svg'
import style from '../../Assents/Style/ProfessionalCertification.module.css'
import ArrowIcon from '../../Assents/Images/ProfessionalCertification/Group 52.svg';
import { Pagination } from '@mui/material';
import ProfessionalCertificationComponent from '../../Components/ProfessionalCertification/ProfessionalCertificationComponent';
import icon4 from '../../Assents/Images/ProfessionalCertification/Group 91.svg'
import imageUp1 from '../../Assents/Images/ProfessionalCertification/Rectangle 2703.svg'
import imageDown1 from '../../Assents/Images/ProfessionalCertification/Rectangle 2704.png'
import imageUp2 from '../../Assents/Images/ProfessionalCertification/Rectangle 2706.svg'
import imageDown2 from '../../Assents/Images/ProfessionalCertification/Rectangle 2705.svg'
import imageUp3 from '../../Assents/Images/ProfessionalCertification/Rectangle 2706 (1).svg'
import imageDown3 from '../../Assents/Images/ProfessionalCertification/Rectangle 2705 (1).svg'

import imageUp11 from '../../Assents/Images/ProfessionalCertification/Ellipse 175B1.svg'
import imageDown11 from '../../Assents/Images/ProfessionalCertification/Ellipse 172U1.svg'
import imageUp22 from '../../Assents/Images/ProfessionalCertification/Ellipse 176B2.svg'
import imageDown22 from '../../Assents/Images/ProfessionalCertification/Ellipse 173U2.svg'
import imageUp33 from '../../Assents/Images/ProfessionalCertification/Ellipse 177B3.svg'
import imageDown33 from '../../Assents/Images/ProfessionalCertification/Ellipse 174U3.svg'

import icon5 from  '../../Assents/Images/ProfessionalCertification/Group 83.svg'
const ProfessionalCertification = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const [icon,setIcon] = useState("")
    const [Title,setTitle] = useState("")
    useEffect(()=>{
        if(Title==="الكيمياء"){
            setIcon(typeIcon1)
        }else if(Title==="الفيزياء"){
            setIcon(typeIcon2)
        }else if(Title==="الاحياء"){
            setIcon(typeIcon3)
        }
    },[Title])

    const [SubSpecialtyData, setSubSpecialtyData] = useState([]);
    const [CertificateData, setCertificateData] = useState([]);

    //^ Get Its Data
    const getSubData = async () => {
        try {
          const res = await dispatch(HandelGetSingleSubSpecialty(id));
          console.log(res.payload);
          setSubSpecialtyData(res.payload.data);
          setTitle(res.payload.data.Title)
          const subData = res.payload.data.Certificates || [];
          console.log(subData);
          setCertificateData(Array.isArray(subData) ? subData : [subData]);
          console.log(CertificateData);
        } catch (error) {
          console.error('Failed to fetch Sub specialty data:', error);
        } finally {
        }
      };
      useEffect(() => {
        getSubData();
      }, [id]);

    //   handel the pagination
    const [currentPageForScientificData, setCurrentPageForScientificData] = useState(1);
    const itemsPerPage = 12;
    const handlePageChangeForScientificData = (event, value) => {
      setCurrentPageForScientificData(value);
    };
    const currentCertificateData = CertificateData?.slice((currentPageForScientificData - 1) * itemsPerPage, currentPageForScientificData * itemsPerPage);

  return (
    <>
        <div className={["container-fluid",style.font].join(" ")}>
      {/* first section */}
      <div className='px-3 my-5 '>
        <div className='row gy-3 align-items-center'>
          <div className='col-md-5 text-center'>
            <img src={SubSpecialtyData?.Image?.secure_url} className='w-50' alt=''/>
          </div>
          <div className='col-md-7'>
            <div className='d-flex align-items-center'>
              <img src={icon} alt=''/>
              <p className='pt-3' style={{fontSize:'30px',color:'rgba(31, 42, 68, 1)'}}>{SubSpecialtyData.Title}</p>
            </div>
            <div>
              <p className='pe-lg-3 px-lg-5 mt-3' style={{fontSize:'20px',fontWeight:400,color:'rgba(70, 70, 70, 1)'}}>
                {SubSpecialtyData.Description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className='d-flex ms-lg-5 mt-5 justify-content-center  align-items-center'>
      <div>
          <img className='pb-5 me-lg-2 w-75' src={ArrowIcon} alt=''/>
        </div>
        <div className=''>
          <p style={{fontSize:'30px',fontWeight:500}}> الشهادات الإحترافية</p>
        </div>
        
      </div>
      {/* third section */}
      <div>
        {currentCertificateData?.length > 0 ? (
          <>
            <div className='row m-0 gy-3 px-lg-5'>
              {currentCertificateData.map((el) => (
                <ProfessionalCertificationComponent Level={el.Level} Type={el.Type} id={el._id} key={el._id} Image={el.certificateImage.secure_url}  Title={el.certificateName} Description={el.Description} />
              ))}
            </div>
            <div className='d-flex justify-content-center my-5'>
              <Pagination
                count={Math.ceil(SubSpecialtyData.length / itemsPerPage)}
                page={currentPageForScientificData}
                onChange={handlePageChangeForScientificData}
                variant="outlined"
                className='text-danger'
                shape="rounded"
              />
            </div>
          </>
        ) : (
          <div className='d-flex justify-content-center my-5'>
            <Pagination count={0} variant="outlined" className='text-danger' shape="rounded" />
          </div>
        )}
       
      </div>
  {/* forth section */}
      
      <div className='d-flex ms-lg-5 mt-5 justify-content-center  align-items-center'>
        <div className='pb-4'>
          <p style={{fontSize:'30px',fontWeight:500}}> تعليمات الشهادة</p>
        </div>
        <div>
          <img className='me-lg-2 w-75' src={icon4} alt=''/>
        </div>
    </div>


    {/* section 7 */}
    <div className='mt-5'>
    <img src={icon5} alt='icon5'/>
      <p style={{fontSize:'28px',color:'rgba(70, 70, 70, 1)'}}> مستوي الشهادة</p>
      <p className='pe-3' style={{fontSize:'22px',color:'rgba(101, 101, 101, 1)'}}>يصنف مستوي  الشهادة حسب ثلاث مستويات مبتدئ، محترف وخبير</p>
    </div>
    <div className='px-3 mb-5'>
        <div className='row m-0 gy-3 mt-5'>
        {/* one */}
          <div className='col-md-4 text-center'>
            <div className='position-relative d-flex justify-content-center align-items-center'>
            <img src={imageUp11} alt='imageDown1'/>
              <div style={{position:'absolute'}}>
                <img src={ imageDown11} alt='imageUp1'/>
              </div>
            
            </div>
            <div className='text-center px-lg-5 pt-4'>
              <p style={{fontSize:'18px',color:"rgba(101, 101, 101, 1)"}}>اللون السماوي يشير الي مستوي مبتدئ، يناسبك ان كنت حديث التخرج أو لديك خبرة سنتين بحد أقصى. </p>
            </div>
          </div>
          {/* two */}
          <div className='col-md-4 text-center'>
            <div className='position-relative d-flex justify-content-center align-items-center'>
            <img src={imageUp22} alt='imageDown2'/>
              <div style={{position:'absolute'}}>
                <img src={ imageDown22} alt='imageUp2'/>
              </div>
              
            </div>
            <div className='text-center px-lg-5 pt-4'>
              <p style={{fontSize:'18px',color:"rgba(101, 101, 101, 1)"}}> اللون البرتقالي يشير الي مستوي محترف، يناسبك ان كانت لديك خبرة عملية من ٣ سنوات إلى ٩ سنوات.  </p>
            </div>
          </div>
          {/* Three */}
          <div className='col-md-4 text-center'>
            <div className='position-relative d-flex justify-content-center align-items-center'>
            <img src={imageUp33} alt='imageDown3'/>
              <div style={{position:'absolute'}}>
                <img src={ imageDown33} alt='imageUp3'/>
              </div>
             
            </div>
            <div className='text-center px-lg-5 pt-4'>
              <p style={{fontSize:'18px',color:"rgba(101, 101, 101, 1)"}}>اللون الأخضر يشير الي مستوي خبير، يناسبك ان كانت لديك خبرة 10 سنوات فأكثر. </p>
            </div>
          </div>
        </div>
    </div>
    </div>
  
    </>
  )
}

export default ProfessionalCertification
