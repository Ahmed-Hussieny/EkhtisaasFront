import React, { useEffect, useState } from 'react'
import AdminHomePageNumbers from '../../../Components/ADMIN/AdminHomePage/AdminHomePageNumbers'
import { LineChart, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts';
import style from  '../../../Assents/Style/Auth.module.css'
import { useDispatch } from 'react-redux';
import { HandelGetCountOfVisitors } from '../../../store/AuthSlice';
import { HandelGetAllCertificate } from '../../../store/CertificateSlice';
import { HandelGetAllMainSpecialty, HandelGetAllSubSpecialty } from '../../../store/SpecialtiesSlice';
import { HandelGetAllAdvisors } from '../../../store/AdvisorSlice';
import { HandelGetAllSpecialists } from '../../../store/SpecialistSlice';
const AdminHomePage = () => {

  const dispatch = useDispatch()
  const [CountOfVisitors,setCountOfVisitors] = useState(0)
  const [organizationCount , setOrganizationCount] = useState(0)
  const [numberOfMainSpeciality , setNumberOfMainSpeciality] = useState(0)
  const [numberOfPages , setNumberOfPages] = useState(21)
  const [pageData,setPageData] = useState({})

  const countOrganizations = (data) => {
    console.log('Data received:', data);
  
    if (!Array.isArray(data)) {
      console.error('Data is not an array');
      return;
    }
  
    const uniqueOrganizations = new Set(data.map(item => item.organizationName));
    setOrganizationCount(uniqueOrganizations.size);
  };
  
  const GetCountOfVisitors = async () => {
    try {
        // Get the count of visitors
        const resVisitors = await dispatch(HandelGetCountOfVisitors());
        const visitorsData = resVisitors.payload.data;
        console.log(visitorsData);
        setPageData(visitorsData);
        
        // Get all certificates
        const resCertificates = await dispatch(HandelGetAllCertificate());
        const certificatesData = resCertificates.payload.data;
        console.log(certificatesData);
        countOrganizations(certificatesData);
        
        // Get main and sub specialties
        const [resMainSpecialty, resSubSpecialty] = await Promise.all([
            dispatch(HandelGetAllMainSpecialty()),
            dispatch(HandelGetAllSubSpecialty())
        ]);
        const mainSpecialtyCount = resMainSpecialty.payload.data.length;
        const subSpecialtyCount = resSubSpecialty.payload.data.length;
        const totalSpecialtyCount = mainSpecialtyCount + subSpecialtyCount;
        setNumberOfMainSpeciality(totalSpecialtyCount);
        
        // Update count of visitors
        setCountOfVisitors(visitorsData?.countOfVisitors);
        
        // Get all advisors and specialists
        const [resAdvisors, resSpecialists] = await Promise.all([
            dispatch(HandelGetAllAdvisors()),
            dispatch(HandelGetAllSpecialists())
        ]);
        const advisorsCount = resAdvisors.payload.data.length;
        const specialistsCount = resSpecialists.payload.data.length;
        
        // Calculate the number of pages
        const numberOfPages = (totalSpecialtyCount)?totalSpecialtyCount:0 + (certificatesData.length)?certificatesData.length:0 + (advisorsCount)?advisorsCount:0 + (specialistsCount)?specialistsCount:0;
        setNumberOfPages(numberOfPages+21);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

  useEffect(()=>{
    GetCountOfVisitors()
  },[])
  return (
      <div className={[style.font,'mt-5 px-5'].join(" ")}>
        <p style={{fontSize:'22px'}}>الرئيسية</p>

        <div className='w-100'>
        <div className='mt-4 gy-3 row m-0'>
        <div className='col-md-3' >
          <div className='rounded-4' style={{backgroundColor:'rgba(240, 250, 255, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد الزوار الحاليين"} number={pageData.countOfVisitors}/>
          </div>
        </div>
        <div className='col-md-3' >
        <div className='rounded-4' style={{backgroundColor:'rgba(240, 250, 255, 1)'}}>
            <AdminHomePageNumbers  Text={"  عدد الصفحات الحالية"} number={numberOfPages}/>
          </div>
        </div>
        <div className='col-md-3' >
        <div className='rounded-4' style={{backgroundColor:'rgba(240, 250, 255, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد المنظمات الحالية"} number={organizationCount}/>
          </div>
        </div>
        <div className='col-md-3' >
          <div className='rounded-4' style={{backgroundColor:'rgba(240, 250, 255, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد التخصصات الحالية"} number={numberOfMainSpeciality}/>
          </div>
        </div>
        
      </div>
      <div className='mt-4 rounded-4' style={{border:'1px solid rgba(220, 220, 220, 1)'}}>
      <div className='row d-flex align-items-center'>
      <div className='text-center col-md-10 pe-5 ' >
      <p style={{fontSize:'22px'}} className='pt-4 pe-5'>الصفحات الأكثر زيارة</p>
      </div>
      <div className="dropdown col-md-2">
  <button className="btn btn-outline-light text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <span className='ms-4'>    اليوم
</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">امس</a></li>
  </ul>
</div>
      </div>
      <BarChart
  sx={{ width: '100%' }}
  height={300}
  yAxis={[{ disableLine: true, disableTicks: true }]}
  xAxis={[{ disableLine: true, disableTicks: true, scaleType: 'band', data: ['الرئيسية', 'خدماتنا', 'التخصصات', 'الشهادات', 'من نحن', 'تواصل معنا'] }]}
  series={[
    {
      data: [pageData.Homepage, pageData.OurServises, pageData.Specialties, pageData.Certificates, pageData.AboutUs, pageData.ContactWithUS],
      color:['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57'],
    },
    
  ]}
/>


      </div>
      <div className='-5'>
        <div className='w-100'>
        <LineChart
 yAxis={[{ disableLine: true, disableTicks: true }]}
  grid={{ horizontal: true }}
  xAxis={[{disableLine:true,disableTicks: true ,  scaleType: 'point', data: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] }]}
  series={[
    
    {
      disableLine:true, 
      data: [20000, 25000, 22000, 28000, 25000, 29000, 30000, 25000, 30000, 32000, 20000, 40000],
      area: true,
      showMark: false,
      color: 'rgba(69, 208, 238, 0.6)',
    },
  ]}
  height={300}
/>


        </div>
      </div>
        </div>
      </div>
     
  )
}

export default AdminHomePage
