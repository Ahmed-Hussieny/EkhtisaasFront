import React from 'react'
import AdminHomePageNumbers from '../../../Components/ADMIN/AdminHomePage/AdminHomePageNumbers'
import { LineChart, lineElementClasses, markElementClasses } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts';
import style from  '../../../Assents/Style/Auth.module.css'
const AdminHomePage = () => {


  return (
      <div className={[style.font,'mt-5 px-5'].join(" ")}>
        <p style={{fontSize:'22px'}}>الرئيسية</p>

        <div className='w-100'>
        <div className='mt-4 gy-3 row m-0'>
        <div className='col-md-3' >
          <div className='rounded-4' style={{backgroundColor:'rgba(240, 250, 255, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد الزوار الحاليين"} number={657}/>
          </div>
        </div>
        <div className='col-md-3' >
        <div className='rounded-4' style={{backgroundColor:'rgba(240, 250, 255, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد الزوار الحاليين"} number={657}/>
          </div>
        </div>
        <div className='col-md-3' >
        <div className='rounded-4' style={{backgroundColor:'rgba(240, 250, 255, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد الزوار الحاليين"} number={657}/>
          </div>
        </div>
        <div className='col-md-3' >
          <div className='rounded-4' style={{backgroundColor:'rgba(240, 250, 255, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد الزوار الحاليين"} number={657}/>
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
      data: [4, 3, 5, 2, 6, 4],
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
