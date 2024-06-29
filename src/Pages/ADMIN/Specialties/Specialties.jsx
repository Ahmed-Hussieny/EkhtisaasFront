import React from 'react'
import style from '../../../Assents/Style/search.module.css'
import searchicon from '../../../Assents/Images/search/Search_alt_light.svg'
import {  Pagination, Tab, Tabs } from '@mui/material';
import chemistryImg from '../../../Assents/Images/ADMIN/Specialties/pana.png'
import chemistryIcon from '../../../Assents/Images/ADMIN/Specialties/Beaker.png'
import PhysicsImg from '../../../Assents/Images/ADMIN/Specialties/bro.png'
import PhysicsIcon from '../../../Assents/Images/ADMIN/Specialties/Atom.png'
import GeoImg from '../../../Assents/Images/ADMIN/Specialties/pana (2).png'
import GeoIcon from '../../../Assents/Images/ADMIN/Specialties/Telecope.png'
import SpecialtiesComponent from '../../../Components/ADMIN/Specialties/SpecialtiesComponent';

const Specialties = () => {
    const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={style.font}>
      <div className='container  m-auto row mt-4 d-flex align-items-center'>
      <div className='col-md-2'>      <p style={{fontSize:'22px'}}>التخصصات </p>
</div>

        <div className='col-md-8'>
        <div style={{backgroundColor:'rgba(247, 247, 247, 1)'}} className="input-group rounded-4 py-2">
  <div className="input-group-prepend bg-transparent border-0">
    <span className="input-group-text bg-transparent border-0" id="basic-addon1">
        <img src={searchicon}/>
    </span>
  </div>
  <input type="text" className={[style.input,"form-control border-0"].join(" ")} placeholder="ابحث عن ما تريده هنا" aria-label="Username" aria-describedby="basic-addon1" />
</div>
        </div>
    <div className='col-md-2'>
    <button className='btn text-white w-100 rounded-4 mt-1  py-3' style={{backgroundColor:'rgba(31, 42, 68, 1)'}}>بحث</button>

    </div>

    </div>
    <div className='d-flex justify-content-center my-5'>
    
    <Tabs
  value={value}
  onChange={handleChange}
  aria-label="wrapped label tabs example"
  className='d-flex justify-content-between'
>
  <Tab
    value="one"
    color='rgba(101, 101, 101, 1)'
    label="علمي"
    wrapped
    className='border-bottom border-2 me-4'
    style={{fontSize:'22px'}}
  />
  <Tab value="two" label="إنساني وأدبي" className='border-bottom border-2 me-4'  style={{fontSize:'22px'}}/>
  <Tab value="three" label="إداري" className='border-bottom border-2 me-4'  style={{fontSize:'22px'}}/>
  <Tab value="four" label="صحي" className='border-bottom border-2 me-4'  style={{fontSize:'22px'}}/>

</Tabs>
    </div>
    {(value==="one")?
    <>
    <div className='row m-0 gy-3 px-5'>
        <SpecialtiesComponent Img={chemistryImg} TypeIcon={chemistryIcon} Title={"الكيمياء"} Desc={" العلم الذي يدرس المادة والتغيُّرات التي تطرأ عليها، .."}/>
        <SpecialtiesComponent Img={PhysicsImg} TypeIcon={PhysicsIcon} Title={"الفيزياء"} Desc={" العلم الذي يدرس المادة والتغيُّرات التي تطرأ عليها، .."}/>
        <SpecialtiesComponent Img={GeoImg} TypeIcon={GeoIcon} Title={"الاحياء"} Desc={" العلم الذي يدرس المادة والتغيُّرات التي تطرأ عليها، .."}/>
        <SpecialtiesComponent Img={chemistryImg} TypeIcon={chemistryIcon} Title={"الكيمياء"} Desc={" العلم الذي يدرس المادة والتغيُّرات التي تطرأ عليها، .."}/>
        <SpecialtiesComponent Img={PhysicsImg} TypeIcon={PhysicsIcon} Title={"الفيزياء"} Desc={" العلم الذي يدرس المادة والتغيُّرات التي تطرأ عليها، .."}/>
        <SpecialtiesComponent Img={GeoImg} TypeIcon={GeoIcon} Title={"الاحياء"} Desc={" العلم الذي يدرس المادة والتغيُّرات التي تطرأ عليها، .."}/>

    </div>
    </>:""}
    <div className='d-flex justify-content-center my-5'>
    <Pagination count={10} variant="outlined" className='text-danger'   shape="rounded" />

    </div>

    <div className='text-start ms-5'>
    <button className='btn text-white ms-auto rounded-4 mt-1 px-5  py-3 mb-5' style={{backgroundColor:'rgba(31, 42, 68, 1)'}}>+ اضافة تخصص رئيسي</button>
    </div>
    </div>
  )
}

export default Specialties
