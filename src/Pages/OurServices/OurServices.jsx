import React from 'react'
import style from '../../Assents/Style/OurServices.module.css'
import icon1 from '../../Assents/Images/OurServices/Group 89.svg'
import img1 from '../../Assents/Images/OurServices/Circle Stroke 1.svg'
import img2 from '../../Assents/Images/OurServices/cuate.svg'
import img12 from '../../Assents/Images/OurServices/Circle Stroke 2.png'
import img22 from '../../Assents/Images/OurServices/bro.svg'
import img13 from '../../Assents/Images/OurServices/Circle Stroke 3.png'
import img23 from '../../Assents/Images/OurServices/bro2.svg'
const OurServices = () => {
  return (
    <div className={style.font}>
        <div className={style.bgImage}>
        <div className='w-75 px-5 text-center mb-5'>
                    <p style={{fontSize:'32px',fontWeight:700}}>
                    تعتبر منصة اختصاص المنصة الأفضل في العالم العربي في تقديم الخدمات المهنية
                    </p>
                </div>
                <div className='w-75 px-5 text-center mb-5'>
                    <p className='px-5' style={{color:'rgba(70, 70, 70, 1)',fontSize:'22px',fontWeight:500}}>كل ما تريده لتثري معرفتك وتتقدم في مسارك المهني في مكان واحد فقط، جمعنا لك أفضل المرشدين والمدربين لتستفيد من خبراتهم وتنطلق نحو هدفك.</p>
                </div>
    </div>
    <div className="d-flex justify-content-center mt-5">
              <div className=" pb-5">
                <img className="w-75" src={icon1} alt="" />
              </div>
              <div className="pt-4">
                <h3 style={{ fontSize: "40px" }}>خدماتنا</h3>
              </div>
              
            </div>
            {/* first */}
            <div className='row m-0 p-0 d-flex align-items-center'>
                    
            <div className='col-md-6 text-center px-5'>
                <h3 style={{color:'rgba(76, 231, 160, 1)',fontSize:'30px'}}>المسار المهني للشهادات الإحترافية</h3>
                <p style={{color:'rgba(70, 70, 70, 1)',fontSize:'22px'}} className=' my-5 px-5'>نقدم مسار شامل لكل التخصصات يضم الشهادات الاحترافية الخاصة بها، نوفر تدريبات ومناهج ومدربين يساعدونك لتنجح في الحصول علي الشهادة.</p>
                <button className='btn text-white w-75 py-3' style={{backgroundColor:'rgba(31, 42, 68, 1)'}}>تصفح الخدمة</button>
            </div>
            <div className='col-md-6 p-0 d-none d-lg-block text-start position-relative'>
                    <img className='' src={img1} alt='img1'/>
                    <div className="position-absolute" style={{top:'15%',left:'28%'}}>
                    <img src={img2} alt='img2'/>
                    </div>
            </div>
              </div>
              
              {/* second */}
              <div className='row m-0 p-0 d-flex align-items-center'>
                    
              <div className='col-md-6 p-0 d-none d-lg-block text-end position-relative'>
                    <img className='' src={img12} alt='img12'/>
                    <div className="position-absolute" style={{top:'24%',left:'9%'}}>
                    <img src={img22} alt='img22'/>
                    </div>
            </div>
            <div className='col-md-6 text-center px-4'>
                <p className='fs-4'>  <span style={{color:'rgba(76, 231, 160, 1)',fontSize:'30px'}}>الإرشاد المهني للموظفين وحديثي التخرج <br/> </span>( قريبا)</p>
                <p style={{color:'rgba(70, 70, 70, 1)',fontSize:'22px'}} className=' my-5 px-5'> نوفر لك أفضل المرشدين المهنين أفرادَا ومنظمات ليساعدوك لتحقق أكبر نجاح ممكن في حياتك المهنية.</p>
                <button className='btn text-white w-75 py-3' style={{backgroundColor:'rgba(31, 42, 68, 1)'}}>تصفح الخدمة</button>
            </div>
            
              </div>

                {/* third */}
                <div className='row m-0 p-0 d-flex align-items-center'>
                    
            <div className='col-md-6 text-center px-5'>
            <p className='fs-4'>  <span style={{color:'rgba(76, 231, 160, 1)',fontSize:'30px'}}> خدمة اللينكدين والسيرة الذاتية </span>( قريبا)</p>

           
                <p style={{color:'rgba(70, 70, 70, 1)',fontSize:'22px'}} className=' my-4 px-5'>نوفر لك أفضل المرشدين المهنين أفرادَا ومنظمات ليساعدوك لتحقق أكبر نجاح ممكن في حياتك المهنية.</p>
                <button className='btn text-white w-75 py-3' style={{backgroundColor:'rgba(31, 42, 68, 1)'}}>تصفح الخدمة</button>
            </div>
            <div className='col-md-6 p-0 d-none d-lg-block text-start position-relative'>
                    <img className='' src={img13} alt='img1'/>
                    <div className="position-absolute" style={{top:'15%',left:'28%'}}>
                    <img src={img23} alt='img2'/>
                    </div>
            </div>
              </div>


    </div>
  )
}

export default OurServices
