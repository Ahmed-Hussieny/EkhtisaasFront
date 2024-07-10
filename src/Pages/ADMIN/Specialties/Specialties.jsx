import React, { useEffect, useState } from 'react';
import style from '../../../Assents/Style/search.module.css';
import searchicon from '../../../Assents/Images/search/Search_alt_light.svg';
import { MenuItem, Pagination, Select, Tab, Tabs, useMediaQuery } from '@mui/material';
import chemistryIcon from '../../../Assents/Images/ADMIN/Specialties/Beaker.png';
import SpecialtiesComponent from '../../../Components/ADMIN/Specialties/SpecialtiesComponent';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { HandelGetAllMainSpecialty } from '../../../store/SpecialtiesSlice';

const Specialties = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [searchInput, setSearchInput] = useState('');
  const [filteredScientificData, setFilteredScientificData] = useState([]);
  const [filteredHumanAndLiteraryData, setFilteredHumanAndLiteraryData] = useState([]);
  const [filteredAdministrativeData, setFilteredAdministrativeData] = useState([]);
  const [filteredHealthyData, setFilteredHealthyData] = useState([]);

  const handleSelectChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    handleSearch(value);
  }

  const [ScientificData, setScientificData] = useState([]);
  const [HumanAndLiteraryData, setHumanAndLiteraryData] = useState([]);
  const [AdministrativeData, setAdministrativeData] = useState([]);
  const [HealthyData, setHealthyData] = useState([]);

  const handleSearch = (searchTerm) => {
    const lowercasedFilter = searchTerm.toLowerCase();

    const filterData = (data) => {
      return data.filter(item =>
        item.Title.toLowerCase().includes(lowercasedFilter)
      );
    }

    setFilteredScientificData(filterData(ScientificData));
    setFilteredHumanAndLiteraryData(filterData(HumanAndLiteraryData));
    setFilteredAdministrativeData(filterData(AdministrativeData));
    setFilteredHealthyData(filterData(HealthyData));
  }

  const itemsPerPage = 6;

  const [currentPageForScientificData, setCurrentPageForScientificData] = useState(1);
  const handlePageChangeForScientificData = (event, value) => {
    setCurrentPageForScientificData(value);
  };
  const currentDataForScientificData = filteredScientificData.slice((currentPageForScientificData - 1) * itemsPerPage, currentPageForScientificData * itemsPerPage);

  const [currentPageForHumanAndLiteraryData, setCurrentPageForHumanAndLiteraryData] = useState(1);
  const handlePageChangeForHumanAndLiteraryData = (event, value) => {
    setCurrentPageForHumanAndLiteraryData(value);
  };
  const currentDataForHumanAndLiteraryData = filteredHumanAndLiteraryData.slice((currentPageForHumanAndLiteraryData - 1) * itemsPerPage, currentPageForHumanAndLiteraryData * itemsPerPage);

  const [currentPageForAdministrativeData, setCurrentPageForAdministrativeData] = useState(1);
  const handlePageChangeForAdministrativeData = (event, value) => {
    setCurrentPageForAdministrativeData(value);
  };
  const currentDataForAdministrativeData = filteredAdministrativeData.slice((currentPageForAdministrativeData - 1) * itemsPerPage, currentPageForAdministrativeData * itemsPerPage);

  const [currentPageForHealthyData, setCurrentPageForHealthyData] = useState(1);
  const handlePageChangeForHealthyData = (event, value) => {
    setCurrentPageForHealthyData(value);
  };
  const currentDataForHealthyData = filteredHealthyData.slice((currentPageForHealthyData - 1) * itemsPerPage, currentPageForHealthyData * itemsPerPage);

  const GetAllMainSpecialties = async () => {
    const res = await dispatch(HandelGetAllMainSpecialty());
    const MainData = res.payload.data;

    const ScientificData = MainData.filter((item) => item.Type === "علمي");
    setScientificData(ScientificData);
    setFilteredScientificData(ScientificData);

    const HumanAndLiteraryData = MainData.filter((item) => item.Type === "إنساني وأدبي");
    setHumanAndLiteraryData(HumanAndLiteraryData);
    setFilteredHumanAndLiteraryData(HumanAndLiteraryData);

    const AdministrativeData = MainData.filter((item) => item.Type === "إداري");
    setAdministrativeData(AdministrativeData);
    setFilteredAdministrativeData(AdministrativeData);

    const HealthyData = MainData.filter((item) => item.Type === "صحي");
    setHealthyData(HealthyData);
    setFilteredHealthyData(HealthyData);
  };

  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
            <input type="text" className={[style.input, "form-control border-0"].join(" ")} placeholder="ابحث عن ما تريده هنا" onKeyUp={handleInputChange} />
          </div>
        </div>

        <div className='col-md-2'>
          <button onClick={handleInputChange} className='btn text-white w-100 rounded-4 mt-1 py-3' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>بحث</button>
        </div>
      </div>

      <div className='d-flex justify-content-center my-5'>
        {isSmallScreen ? (
          <Select
            value={value}
            onChange={handleSelectChange}
            aria-label="wrapped label select example"
          >
            <MenuItem value="one" className={[style.font,""].join(' ')}
 style={{ fontSize: '22px' }}>علمي</MenuItem>
            <MenuItem value="two" className={[style.font,""].join(' ')} style={{ fontSize: '22px' }}>إنساني وأدبي</MenuItem>
            <MenuItem value="three" className={[style.font,""].join(' ')} style={{ fontSize: '22px' }}>إداري</MenuItem>
            <MenuItem value="four" className={[style.font,""].join(' ')} style={{ fontSize: '22px' }}>صحي</MenuItem>
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
          {(currentDataForScientificData.length > 0) ?
            <>
              <div className='row m-0 gy-3 px-lg-5'>
                {currentDataForScientificData?.map((el) => (
                  <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
                ))}

              </div>
              <div className='d-flex justify-content-center my-5'>
                <Pagination
                  count={Math.ceil(filteredScientificData.length / itemsPerPage)}
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
          {currentDataForHumanAndLiteraryData.length > 0 ?
            <>
              <div className='row m-0 gy-3 px-lg-5'>
                {currentDataForHumanAndLiteraryData?.map((el) => (
                  <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
                ))}

              </div>
              <div className='d-flex justify-content-center my-5'>
                <Pagination
                  count={Math.ceil(filteredHumanAndLiteraryData.length / itemsPerPage)}
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
          {currentDataForAdministrativeData.length > 0 ?
            <>
              <div className='row m-0 gy-3 px-lg-5'>
                {currentDataForAdministrativeData?.map((el) => (
                  <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
                ))}

              </div>
              <div className='d-flex justify-content-center my-5'>
                <Pagination
                  count={Math.ceil(filteredAdministrativeData.length / itemsPerPage)}
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
          {currentDataForHealthyData.length > 0 ?
            <>
              <div className='row m-0 gy-3 px-lg-5'>
                {currentDataForHealthyData?.map((el) => (
                  <SpecialtiesComponent Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
                ))}

              </div>
              <div className='d-flex justify-content-center my-5'>
                <Pagination
                  count={Math.ceil(filteredHealthyData.length / itemsPerPage)}
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
