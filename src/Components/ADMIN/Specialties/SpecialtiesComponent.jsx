import React from 'react'
import icon1 from '../../../Assents/Images/ADMIN/Specialties/Trash_duotone.svg'
import icon2 from '../../../Assents/Images/ADMIN/Specialties/Edit_duotone_line.svg'
const SpecialtiesComponent = ({Img,TypeIcon,Title,Desc}) => {
  return (
      <div className='col-md-4 '>
            <div className='rounded-4 text-center position-relative pb-' style={{backgroundColor:'rgba(247, 247, 247, 1)'}}>
            <div className='pt-2'></div>
                <div><img src={Img} className='m-auto'   alt='img1'/></div>
                <div className='pb-2'></div>
                <div className='bg-white p-1' style={{border:"1px solid rgba(247, 247, 247, 1)",position:'absolute',top:0,left:0,borderBottomRightRadius:'15px',borderTopLeftRadius:'15px'}}>
                <img className='w-50' style={{cursor:'pointer'}} src={icon2}   alt='icon2'/>
                <img className='w-50' style={{cursor:'pointer'}} src={icon1}   alt='icon1'/>
                </div>
            </div>
            <div className='ps-4 d-flex align-items-center mt-2 justify-content-center'>
            <img src={TypeIcon} alt=''/>
                <p className='text-center pt-3 me-3' style={{fontSize:'24px',color:'rgba(31, 42, 68, 1)'}}>{Title}</p>
            </div>
            <p className='pe-2' style={{color:'rgba(101, 101, 101, 1)',fontSize:'18px'}}>
                {Desc}
            </p>
        </div>
  )
}

export default SpecialtiesComponent
