import React, { useEffect, useState } from 'react';
import style from '../../../Assents/Style/search.module.css';
import searchicon from '../../../Assents/Images/search/Search_alt_light.svg';
import { MenuItem, Pagination, Select, Tab, Tabs, useMediaQuery } from '@mui/material';
import chemistryImg from '../../../Assents/Images/ADMIN/Specialties/pana.png';
import chemistryIcon from '../../../Assents/Images/ADMIN/Specialties/Beaker.png';
import PhysicsImg from '../../../Assents/Images/ADMIN/Specialties/bro.png';
import PhysicsIcon from '../../../Assents/Images/ADMIN/Specialties/Atom.png';
import GeoImg from '../../../Assents/Images/ADMIN/Specialties/pana (2).png';
import GeoIcon from '../../../Assents/Images/ADMIN/Specialties/Telecope.png';
import SpecialtiesComponent from '../../../Components/ADMIN/Specialties/SpecialtiesComponent';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HandelGetAllMainSpecialty } from '../../../store/SpecialtiesSlice';

const Specialties = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  // ^ All Data using After Filter
  const [ScientificData, setScientificData] = useState([]);
  const [HumanAndLiteraryData, setHumanAndLiteraryData] = useState([]);
  const [AdministrativeData, setAdministrativeData] = useState([]);
  const [HealthyData, setHealthyData] = useState([]);

  // ^ value of tabs
  const [value, setValue] = useState('one');
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
      <div className='container m-auto gy-3 row mt-4 d-flex align-items-center'>
        <div className='col-md-2'>
          <p style={{ fontSize: '22px' }}>التخصصات</p>
        </div>

        <div className='col-md-8'>
          <div style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }} className="input-group rounded-4 py-2">
            <div className="input-group-prepend bg-transparent border-0">
              <span className="input-group-text bg-transparent border-0" id="basic-addon1">
                <img src={searchicon} />
              </span>
            </div>
            <input type="text" className={[style.input, "form-control border-0"].join(" ")} placeholder="ابحث عن ما تريده هنا" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div>

        <div className='col-md-2'>
          <button className='btn text-white w-100 rounded-4 mt-1 py-3' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>بحث</button>
        </div>
      </div>

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
            {currentDataForScientificData.map((el) => (
              <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
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
            {currentDataForHumanAndLiteraryData.map((el) => (
              <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
            ))}
            
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
            {currentDataForAdministrativeData.map((el) => (
              <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
            ))}
            
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
            {currentDataForHealthyData.map((el) => (
              <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
            ))}
            
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
      <div className='text-start ms-5'>
        <button onClick={() => navigate('/Admin/addNewSpecialties')} className='btn text-white ms-auto rounded-4 mt-1 px-5 py-3 mb-5' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>+ اضافة تخصص رئيسي</button>
      </div>
    </div>
  );
};

export default Specialties;
