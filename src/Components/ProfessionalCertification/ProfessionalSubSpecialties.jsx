import React, { useEffect, useState } from 'react'
import typeIcon1 from '../../Assents/Images/ProfessionalCertification/Beaker.svg'
import typeIcon2 from '../../Assents/Images/ProfessionalCertification/Atom.svg'
import typeIcon3 from '../../Assents/Images/ProfessionalCertification/Telecope.svg'
import { useNavigate } from 'react-router-dom'

const ProfessionalSubSpecialties = ({Type,TypeIcon,id,Img,Title,Desc}) => {
    const [icon,setIcon] = useState(typeIcon1)

    useEffect(()=>{
        if(Title==="الكيمياء"){
            setIcon(typeIcon1)
        }else if(Title==="الفيزياء"){
            setIcon(typeIcon2)
        }else if(Title==="الاحياء"){
            setIcon(typeIcon3)
        }
    },[])


    //^ Get the first 8 words
    const words = Desc.split(' ');
    const firstEightWords = words.slice(0, 8).join(' ');

    const navigate = useNavigate()
    // 
  return (
    <div className='col-md-4 '>
    <div onClick={()=>navigate(`/professionalCertifications/${id}`)} className='rounded-4  d-flex align-items-center  text-center position-relative ' style={{height:'250px',backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <div className='' ><img  src={Img} className='m-auto w-75'   alt='img1'/></div>
       
    </div>
    <div className='ps-4 d-flex align-items-center mt-2 justify-content-center'>
    <img src={icon} alt=''/>
        <p className='text-center pt-3 me-3' style={{fontSize:'24px',color:'rgba(31, 42, 68, 1)'}}>{Title}</p>
    </div>
    <p className='pe-2' style={{color:'rgba(101, 101, 101, 1)',fontSize:'17px'}}>
        {firstEightWords}...
    </p>
    </div>
  )
}

export default ProfessionalSubSpecialties
