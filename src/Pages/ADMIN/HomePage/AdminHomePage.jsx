import React from 'react'
import AdminHomePageNumbers from '../../../Components/ADMIN/AdminHomePage/AdminHomePageNumbers'
import CanvasJSReact from '@canvasjs/react-charts';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const AdminHomePage = () => {
  const options = {
    animationEnabled: true,
    // exportEnabled: true,
    
    theme: "light1", //"light1", "dark1", "dark2"
    title: {
        // text: "Simple Column Chart with Index Labels"
    },
    axisY: {
      
        includeZero: false
    },
    data: [{
        // type: "line", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        // indexLabelFontColor: "#5A5757",
        // indexLabelPlacement: "outside",
        dataPoints: [
            {  y: 51,label: "الرئيسية",color:'rgba(98, 178, 253, 1)' },
            { y: 55,label: "خدماتنا",color:'rgba(155, 223, 196, 1)' },
            { y: 50,label: "التخصصات",color:'rgba(249, 155, 171, 1)' },
            { y: 45,label: "الشهادات",color:'rgba(255, 180, 79, 1)' },
            { y: 40 ,label: "من نحن",color:'rgba(159, 151, 247, 1)'},
            {  y: 50,label: "تواصل معنا",color:'rgba(206, 214, 222, 1)' },
        ]
    }]
}
  return (
      <div className='mt-5 pe-5'>
        <p style={{fontSize:'22px'}}>الرئيسية</p>

        <div className='w-100'>
        <div className='mt-4 row m-0'>
        <div className='col-md-3' >
          <div className='rounded-4' style={{backgroundColor:'rgba(224, 245, 254, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد الزوار الحاليين"} number={657}/>
          </div>
        </div>
        <div className='col-md-3' >
        <div className='rounded-4' style={{backgroundColor:'rgba(224, 245, 254, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد الزوار الحاليين"} number={657}/>
          </div>
        </div>
        <div className='col-md-3' >
        <div className='rounded-4' style={{backgroundColor:'rgba(224, 245, 254, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد الزوار الحاليين"} number={657}/>
          </div>
        </div>
        <div className='col-md-3' >
          <div className='rounded-4' style={{backgroundColor:'rgba(224, 245, 254, 1)'}}>
            <AdminHomePageNumbers  Text={"عدد الزوار الحاليين"} number={657}/>
          </div>
        </div>
        
      </div>
      <div className='mt-5'>
      <CanvasJSChart options={options} 
            />
      </div>
        </div>
      </div>
     
  )
}

export default AdminHomePage
