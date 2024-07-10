import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { HandelGetSingleMainSpecialty } from '../../../store/SpecialtiesSlice';
import searchicon from '../../../Assents/Images/search/Search_alt_light.svg';
import style from '../../../Assents/Style/search.module.css';
import chemistryIcon from '../../../Assents/Images/ADMIN/Specialties/Beaker.png';
import ArrowIcon from '../../../Assents/Images/ADMIN/Specialties/Vector (3).svg';
import { Pagination } from '@mui/material';
import SpecialtiesSubComponent from '../../../Components/ADMIN/Specialties/SpecialtiesSubComponent';

const MainSpecialties = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [MainSpecialtyData, setMainSpecialtyData] = useState({});
  const [SubSpecialtyData, setSubSpecialtyData] = useState([]);
  const [filteredSubSpecialtyData, setFilteredSubSpecialtyData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPageForScientificData, setCurrentPageForScientificData] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getMainData = async () => {
    try {
      const res = await dispatch(HandelGetSingleMainSpecialty(id));
      setMainSpecialtyData(res.payload.data);
      const subData = res.payload.data.SubSpecialtyies || [];
      setSubSpecialtyData(Array.isArray(subData) ? subData : [subData]);
      setFilteredSubSpecialtyData(Array.isArray(subData) ? subData : [subData]);
    } catch (error) {
      console.error('Failed to fetch main specialty data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    getMainData();
  }, [id]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchInput(searchTerm);
    const filteredData = SubSpecialtyData.filter(item =>
      item.Title.toLowerCase().includes(searchTerm) 
    );
    setFilteredSubSpecialtyData(filteredData);
  };

  const itemsPerPage = 6;

  const handlePageChangeForScientificData = (event, value) => {
    setCurrentPageForScientificData(value);
  };

  const currentDataForScientificData = filteredSubSpecialtyData.slice((currentPageForScientificData - 1) * itemsPerPage, currentPageForScientificData * itemsPerPage);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className={[style.font, "m-0 p-0"].join(" ")}>
      <div className='container m-auto gy-3 row d-flex align-items-center'>
        <div className='col-md-2'>
          <p style={{ fontSize: '22px' }}>التخصصات</p>
        </div>
        <div className='col-md-8'>
          <div style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }} className="input-group rounded-4 py-2">
            <div className="input-group-prepend bg-transparent border-0">
              <span className="input-group-text bg-transparent border-0" id="basic-addon1">
                <img src={searchicon} alt="search icon" />
              </span>
            </div>
            <input type="text" className={`${style.input} form-control border-0`} placeholder="ابحث عن ما تريده هنا" aria-label="Search" value={searchInput} onChange={handleSearch} />
          </div>
        </div>
        <div className='col-md-2'>
          <button className='btn text-white w-100 rounded-4 mt-1 py-3' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>بحث</button>
        </div>
      </div>
      <div className='px-3 mt-5'>
        <div className='row gy-3 align-items-center'>
          <div className='col-md-5 text-center'>
            <img src={MainSpecialtyData?.Image?.secure_url} className='w-75' alt=''/>
          </div>
          <div className='col-md-7'>
            <div className='d-flex align-items-center'>
              <img src={chemistryIcon} alt=''/>
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
      <div className='d-flex justify-content-center  align-items-center'>
        <div>
          <p style={{fontSize:'30px',fontWeight:500}}>التخصصات الفرعية</p>
        </div>
        <div>
          <img className='pb-5 me-2 w-75' src={ArrowIcon} alt=''/>
        </div>
      </div>
      <div>
        {currentDataForScientificData.length > 0 ? (
          <>
            <div className='row m-0 gy-3 px-lg-5'>
              {currentDataForScientificData.map((el) => (
                <SpecialtiesSubComponent MainTitle={el.MainTitle} Type={el.Type} id={el._id} key={el._id} Img={el.Image.secure_url} TypeIcon={chemistryIcon} Title={el.Title} Desc={el.Description} />
              ))}
            </div>
            <div className='d-flex justify-content-center my-5'>
              <Pagination
                count={Math.ceil(filteredSubSpecialtyData.length / itemsPerPage)}
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
      <div className='m-0 p-0'>
        <div className='text-start ms-5'>
          <button onClick={() => navigate(`/Admin/AddNewSubSpecialties/${MainSpecialtyData.Title}`)} className='btn text-white ms-auto rounded-4 mt-1 px-5 py-3 mb-5' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>+ اضافة تخصص فرعي</button>
        </div>
      </div>
    </div>
  );
};

export default MainSpecialties;
