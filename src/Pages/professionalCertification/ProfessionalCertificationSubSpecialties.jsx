import React, { useEffect, useState } from 'react'
import { HandelGetSingleMainSpecialty } from '../../store/SpecialtiesSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import typeIcon1 from '../../Assents/Images/ProfessionalCertification/Beaker.svg'
import typeIcon2 from '../../Assents/Images/ProfessionalCertification/Atom.svg'
import typeIcon3 from '../../Assents/Images/ProfessionalCertification/Telecope.svg'
import style from '../../Assents/Style/ProfessionalCertification.module.css'
import ArrowIcon from '../../Assents/Images/ADMIN/Specialties/Vector (3).svg';
import { Pagination } from '@mui/material';
import ProfessionalSubSpecialties from '../../Components/ProfessionalCertification/ProfessionalSubSpecialties';

const ProfessionalCertificationSubSpecialties = () => {
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

    const [MainSpecialtyData, setMainSpecialtyData] = useState([]);
    const [SubSpecialtyData, setSubSpecialtyData] = useState([]);

    //^ Get Its Data
    const getMainData = async () => {
        try {
          const res = await dispatch(HandelGetSingleMainSpecialty(id));
          console.log(res.payload);
          setMainSpecialtyData(res.payload.data);
          setTitle(res.payload.data.Title)
          const subData = res.payload.data.SubSpecialtyies || [];
          console.log(subData);
          setSubSpecialtyData(Array.isArray(subData) ? subData : [subData]);
          console.log(SubSpecialtyData);
        } catch (error) {
          console.error('Failed to fetch main specialty data:', error);
        } finally {
        }
      };
      useEffect(() => {
        getMainData();
      }, [id]);

    //   handel the pagination
    const [currentPageForScientificData, setCurrentPageForScientificData] = useState(1);
    const itemsPerPage = 12;
    const handlePageChangeForScientificData = (event, value) => {
      setCurrentPageForScientificData(value);
    };
    const currentDataForScientificData = SubSpecialtyData.slice((currentPageForScientificData - 1) * itemsPerPage, currentPageForScientificData * itemsPerPage);

  return (
    <>
        <div className={["container-fluid",style.font].join(" ")}>
      {/* first section */}
      <div className='px-3 my-5 '>
        <div className='row gy-3 align-items-center'>
          <div className='col-md-5 text-center'>
            <img src={MainSpecialtyData?.Image?.secure_url} className='w-50' alt=''/>
          </div>
          <div className='col-md-7'>
            <div className='d-flex align-items-center'>
              <img src={icon} alt=''/>
              <p className='pt-3' style={{fontSize:'30px',color:'rgba(31, 42, 68, 1)'}}>{MainSpecialtyData.Title}</p>
            </div>
            <div>
              <p className='pe-3 px-5 mt-3' style={{fontSize:'20px',fontWeight:400,color:'rgba(70, 70, 70, 1)'}}>
                {MainSpecialtyData.Description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className='d-flex mt-5 justify-content-center  align-items-center'>
        <div>
          <p style={{fontSize:'30px',fontWeight:500}}>التخصصات الفرعية</p>
        </div>
        <div>
          <img className='pb-5 me-2 w-75' src={ArrowIcon} alt=''/>
        </div>
      </div>
      {/* third section */}
      <div>
        {currentDataForScientificData.length > 0 ? (
          <>
            <div className='row m-0 gy-3 px-lg-5'>
              {currentDataForScientificData.map((el) => (
                <ProfessionalSubSpecialties MainTitle={el.MainTitle} Type={el.Type} id={el._id} key={el._id} Img={el.Image.secure_url}  Title={el.Title} Desc={el.Description} />
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

      
    </div>
    {/* forth section */}
    <div className={[style.bgImage2,"py-5"].join(" ")}>
        <div className='py-3 text-center'>
            <p style={{fontSize:'60px',fontWeight:'bold'}} className='text-white'>{SubSpecialtyData.length}</p>
            <p style={{fontSize:'34px' , color:'rgba(31, 42, 68, 1)'}}>تخصص فرعي</p>
        </div>
      </div>
    </>
  )
}

export default ProfessionalCertificationSubSpecialties
