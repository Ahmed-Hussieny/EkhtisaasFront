import React, { useEffect, useState } from "react";
import style from "../../Assents/Style/ProfessionalCertification.module.css";
import image1 from '../../Assents/Images/ProfessionalCertification/pana.svg'
import icon1 from '../../Assents/Images/ProfessionalCertification/Group 51 (1).svg'
import icon2 from '../../Assents/Images/ProfessionalCertification/Vector 9.png'
import { MenuItem,Tab, Pagination, Select, Tabs, useMediaQuery } from "@mui/material";

import { useDispatch } from "react-redux";
import { HandelGetAllMainSpecialty } from "../../store/SpecialtiesSlice";
import ProfessionalSpecialties from "../../Components/ProfessionalCertification/ProfessionalSpecialties";

const ProfessionalCertificationSpecialties = () => {
  const dispatch = useDispatch()
  //^ prepar to show the data from DB

  // ^ All Data using After Filter
  const [ScientificData, setScientificData] = useState([]);
  const [HumanAndLiteraryData, setHumanAndLiteraryData] = useState([]);
  const [AdministrativeData, setAdministrativeData] = useState([]);
  const [HealthyData, setHealthyData] = useState([]);
  const [MainDataCount, setMainDataCount] = useState([]);

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [value, setValue] = useState('one');
  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };
   // ^ value of tabs
   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

  // ^ Pagination state
  const itemsPerPage = 6;
  //& for ScientificData ===============================================================
      const [currentPageForScientificData, setCurrentPageForScientificData] = useState(1);
      const handlePageChangeForScientificData = (event, value) => {
        setCurrentPageForScientificData(value);
      };
      const currentDataForScientificData = ScientificData.slice((currentPageForScientificData - 1) * itemsPerPage, currentPageForScientificData * itemsPerPage);

   //& for HumanAndLiteraryData ===============================================================
   const [currentPageForHumanAndLiteraryData, setCurrentPageForHumanAndLiteraryData] = useState(1);
   const handlePageChangeForHumanAndLiteraryData = (event, value) => {
     setCurrentPageForHumanAndLiteraryData(value);
   };
   const currentDataForHumanAndLiteraryData = HumanAndLiteraryData.slice((currentPageForHumanAndLiteraryData - 1) * itemsPerPage, currentPageForHumanAndLiteraryData * itemsPerPage);

   //& for AdministrativeData ===============================================================
   const [currentPageForAdministrativeData, setCurrentPageForAdministrativeData] = useState(1);
   const handlePageChangeForAdministrativeData = (event, value) => {
     setCurrentPageForAdministrativeData(value);
   };
   const currentDataForAdministrativeData = AdministrativeData.slice((currentPageForAdministrativeData - 1) * itemsPerPage, currentPageForHumanAndLiteraryData * itemsPerPage);

      //& for HumanAndLiteraryData ===============================================================
      const [currentPageForHealthyData, setCurrentPageForHealthyData] = useState(1);
      const handlePageChangeForHealthyData = (event, value) => {
        setCurrentPageForHealthyData(value);
      };
      const currentDataForHealthyData = HealthyData.slice((currentPageForHealthyData - 1) * itemsPerPage, currentPageForHumanAndLiteraryData * itemsPerPage);
  // ^ Get All Data
  const GetAllMainSpecialties = async () => {
    const res = await dispatch(HandelGetAllMainSpecialty());
    const MainData = res.payload.data;
    setMainDataCount(MainData.length)
    const ScientificData = MainData.filter((item) => item.Type === "علمي");
    setScientificData(ScientificData);

    const HumanAndLiteraryData = MainData.filter((item) => item.Type === "إنساني وأدبي");
    setHumanAndLiteraryData(HumanAndLiteraryData);

    const AdministrativeData = MainData.filter((item) => item.Type === "إداري");
    setAdministrativeData(AdministrativeData);

    const HealthyData = MainData.filter((item) => item.Type === "صحي");
    setHealthyData(HealthyData);
  };

  useEffect(() => {
    GetAllMainSpecialties();
  }, []);
  return (
    <div className={style.font}>
      <div className="mt-5 text-center">
        <p style={{ fontSize: "35px", fontWeight: 500 }}>الشهادات الاحترافية</p>
      </div>
      {/* 1 */}
      <div className="container mt-5">
      <div className="row m-0 gy-3 d-flex align-items-center">
        <div className="col-md-6">
          <p style={{fontSize:'22px',color:'rgba(70, 70, 70, 1)'}}>
            الشهادات الاحترافية هي مؤهلات تُمنح للأفراد الذين يستوفون معايير
            معينة في مجالات تخصصهم. تُعتبر هذه الشهادات إثباتًا للمهارات
            والمعرفة التي يمتلكها الفرد في مجال معين، وغالبًا ما تكون معترف بها
            من قبل الجهات المهنية والصناعية المختلفة. يُعتمد على هذه الشهادات
            لتأكيد الكفاءة المهنية والقدرة على الأداء بكفاءة واحترافية في بيئة
            العمل.
          </p>
        </div>
        <div className="col-md-6 d-none d-lg-block">
          <img src={image1} alt="" className="w-100"/>
        </div>
      </div>
      </div>
      {/* 2 */}
      <div className={[style.bgImage,'py-5 mt-5 text-center'].join(" ")}>
        <div className="pt-5 ps-5 justify-content-center d-flex">
          <div >
            <img src={icon1} alt=""/>
          </div>
          <div className="pt-5 ps-4">
              <p style={{fontSize:'60px',fontWeight:'bold'}}>{MainDataCount}</p>
          </div>
        </div>
        <div style={{fontSize:'30px'}}>
        <p>تخصص رئيسي</p>
      </div>
      </div>
      {/* 3 */}
      <div className="mt-5">
        {/* header */}
        <div className="text-center">
          <p className="m-0" style={{fontSize:'30px',fontWeight:400}}>المسارات</p>
          <div className="pt-0 mt-0">
            <img src={icon2} alt="" className="pe-5 me-5 pt-0"/>
          </div>
        </div>
        {/* show the Data from DB */}
        <div>
        <div className='d-flex justify-content-center my-5'>
        {isSmallScreen ? (
          <Select
            value={value}
            onChange={handleSelectChange}
            aria-label="wrapped label select example"
          >
            <MenuItem value="one" style={{ fontSize: '22px' }}>علمي</MenuItem>
            <MenuItem value="two" style={{ fontSize: '22px' }}>إنساني وأدبي</MenuItem>
            <MenuItem value="three" style={{ fontSize: '22px' }}>إداري</MenuItem>
            <MenuItem value="four" style={{ fontSize: '22px' }}>صحي</MenuItem>
          </Select>
        ) : (
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
            className='d-flex justify-content-center'
          >
            <Tab
              value="one"
              color='rgba(101, 101, 101, 1)'
              label="علمي"
              wrapped
              className='border-bottom border-2 me-4'
              style={{ fontSize: '22px' }}
            />
            <Tab
              value="two"
              label="إنساني وأدبي"
              className='border-bottom border-2 me-4'
              style={{ fontSize: '22px' }}
            />
            <Tab
              value="three"
              label="إداري"
              className='border-bottom border-2 me-4'
              style={{ fontSize: '22px' }}
            />
            <Tab
              value="four"
              label="صحي"
              className='border-bottom border-2 me-4'
              style={{ fontSize: '22px' }}
            />
          </Tabs>
        )}
      </div>

      {(value === "one") && (
        <>
        
        {(currentDataForScientificData.length>0)?
        <>
          <div className='row m-0 gy-3 px-lg-5'>
            {currentDataForScientificData?.map((el) => (
            <ProfessionalSpecialties Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} Title={el.Title} Desc={el.Description} />
            ))}

          </div>
          <div className='d-flex justify-content-center my-5'>
            <Pagination
              count={Math.ceil(ScientificData.length / itemsPerPage)}
              page={currentPageForScientificData}
              onChange={handlePageChangeForScientificData}
              variant="outlined"
              className='text-danger'
              shape="rounded"
            />
          </div>
        </>
        :
        <div className='d-flex justify-content-center my-5'>
          <Pagination count={0} variant="outlined" className='text-danger' shape="rounded" />
        </div>
        }
        </>
        
      )}
      {(value === "two") && (
        <>
        {currentDataForHumanAndLiteraryData.length>0?
          <>
          <div className='row m-0 gy-3 px-lg-5'>
            {/* {currentDataForHumanAndLiteraryData?.map((el) => (
              <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
            ))} */}
            
          </div>
          <div className='d-flex justify-content-center my-5'>
            <Pagination
              count={Math.ceil(HumanAndLiteraryData.length / itemsPerPage)}
              page={currentPageForHumanAndLiteraryData}
              onChange={handlePageChangeForHumanAndLiteraryData}
              variant="outlined"
              className='text-danger'
              shape="rounded"
            />
          </div>
        </>
        : <div className='d-flex justify-content-center my-5'>
          <Pagination count={0} variant="outlined" className='text-danger' shape="rounded" />
        </div>}
        </>
        
      )} 
      {(value === "three") && (
        <>
        {currentDataForAdministrativeData.length>0?
          <>
          <div className='row m-0 gy-3 px-lg-5'>
            {/* {currentDataForAdministrativeData?.map((el) => (
              <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
            ))} */}
            
          </div>
          <div className='d-flex justify-content-center my-5'>
            <Pagination
              count={Math.ceil(AdministrativeData.length / itemsPerPage)}
              page={currentPageForAdministrativeData}
              onChange={handlePageChangeForAdministrativeData}
              variant="outlined"
              className='text-danger'
              shape="rounded"
            />
          </div>
        </>
        : <div className='d-flex justify-content-center my-5'>
          <Pagination count={0} variant="outlined" className='text-danger' shape="rounded" />
        </div>}
        </>
        
      )} 
      {(value === "four") && (
        <>
        {currentDataForHealthyData.length>0?
          <>
          <div className='row m-0 gy-3 px-lg-5'>
            {/* {currentDataForHealthyData?.map((el) => (
              <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
            ))} */}
            
          </div>
          <div className='d-flex justify-content-center my-5'>
            <Pagination
              count={Math.ceil(HealthyData.length / itemsPerPage)}
              page={currentPageForHealthyData}
              onChange={handlePageChangeForHealthyData}
              variant="outlined"
              className='text-danger'
              shape="rounded"
            />
          </div>
        </>
        : <div className='d-flex justify-content-center my-5'>
          <Pagination count={0} variant="outlined" className='text-danger' shape="rounded" />
        </div>}
        </>
        
      )} 
        </div>

        {/* Desc the path*/}
        <div className="container-fluid my-5" >
        {/* header */}
          <div className="row m-0 gy-4">
              <div className="col-md-3">
                <div className="rounded-4  py-4 text-center"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(255, 255, 255, 1)'}}>
                    <p className="m-0" style={{fontWeight:'600',fontSize:'28px',color:'rgba(31, 42, 68, 1)'}}>المسار</p>
                </div>
              </div>
              <div className="col-md-9">
              <div className="rounded-4  py-4 text-center"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(255, 255, 255, 1)'}}>
              <p className="m-0" style={{fontWeight:'600',fontSize:'28px',color:'rgba(31, 42, 68, 1)'}}>شرح المسار</p>
                </div>
              </div>
          </div>
          {/* first row */}
          <div className="row m-0 gy-4">
              <div className="col-md-3 ">
                <div className="rounded-4  py-4 text-center"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(7, 101, 133, 1)'}}>
                    <p className="m-0" style={{fontWeight:'600',fontSize:'28px',color:'rgba(255, 255, 255, 1)'}}>علمي</p>
                </div>
              </div>
              <div className="col-md-9 ">
              <div className="rounded-4  py-3"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(247, 247, 247, 1)'}}>
              <p className="m-0 px-lg-5 px-3" style={{fontWeight:'400',fontSize:'20px',color:'rgba(101, 101, 101, 1)'}}> مسار يهدف إلى تعريف الطلاب بالأساسيات العلمية في الرياضيات والفيزياء والكيمياء وعلوم الأحياء،                                                                              بالإضافة إلى مهارات حل المشكلات ومهارات التواصل العلمي.</p>
                </div>
              </div>
          </div>
          {/* second row */}
          <div className="row m-0 gy-4">
              <div className="col-md-3 ">
                <div className="rounded-4  py-4 text-center"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(92, 215, 251, 1)'}}>
                    <p className="m-0" style={{fontWeight:'600',fontSize:'28px',color:'rgba(255, 255, 255, 1)'}}>إنساني وأدبي</p>
                </div>
              </div>
              <div className="col-md-9 ">
              <div className="rounded-4  py-3"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(247, 247, 247, 1)'}}>
              <p className="m-0 px-lg-5 px-3" style={{fontWeight:'400',fontSize:'20px',color:'rgba(101, 101, 101, 1)'}}> مسار يهدف إلى تعريف الطلاب بالأساسيات العلمية في الرياضيات والفيزياء والكيمياء وعلوم الأحياء،                                                                              بالإضافة إلى مهارات حل المشكلات ومهارات التواصل العلمي.</p>
                </div>
              </div>
          </div>
          {/* third row */}
          <div className="row m-0 gy-4">
              <div className="col-md-3 ">
                <div className="rounded-4  py-4 text-center"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(76, 231, 160, 1)'}}>
                    <p className="m-0" style={{fontWeight:'600',fontSize:'28px',color:'rgba(255, 255, 255, 1)'}}> إداري</p>
                </div>
              </div>
              <div className="col-md-9 ">
              <div className="rounded-4  py-3"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(247, 247, 247, 1)'}}>
              <p className="m-0 px-lg-5 px-3" style={{fontWeight:'400',fontSize:'20px',color:'rgba(101, 101, 101, 1)'}}> مسار يهدف إلى تعريف الطلاب بالأساسيات العلمية في الرياضيات والفيزياء والكيمياء وعلوم الأحياء،                                                                              بالإضافة إلى مهارات حل المشكلات ومهارات التواصل العلمي.</p>
                </div>
              </div>
          </div>
          {/* fourth row */}
          <div className="row m-0 gy-4">
              <div className="col-md-3 ">
                <div className="rounded-4  py-4 text-center"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(31, 42, 68, 1)'}}>
                    <p className="m-0" style={{fontWeight:'600',fontSize:'28px',color:'rgba(255, 255, 255, 1)'}}> صحي</p>
                </div>
              </div>
              <div className="col-md-9 ">
              <div className="rounded-4  py-3"  style={{boxShadow:'0px 0px 13px rgb(236, 236, 236)',backgroundColor:'rgba(247, 247, 247, 1)'}}>
              <p className="m-0 px-lg-5 px-3" style={{fontWeight:'400',fontSize:'20px',color:'rgba(101, 101, 101, 1)'}}> مسار يهدف إلى تعريف الطلاب بالأساسيات العلمية في الرياضيات والفيزياء والكيمياء وعلوم الأحياء،                                                                              بالإضافة إلى مهارات حل المشكلات ومهارات التواصل العلمي.</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default ProfessionalCertificationSpecialties;
