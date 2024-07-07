import React, { useEffect, useState } from 'react'
import style from '../../../Assents/Style/Auth.module.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { HandelGetAllSpecialists } from '../../../store/SpecialistSlice'
import SpecialistComponent from '../../../Components/Specialist/SpecialistComponent'

const Specialist = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [Advisors , setAdvisors] = useState([])
    const getAllAdvisors=async ()=>{
        const res = await dispatch(HandelGetAllSpecialists())
        console.log(res.payload.data);
        setAdvisors(res.payload.data)
    }
    useEffect(()=>{
        getAllAdvisors()
    },[])
  return (
    <div className={style.font}>
    <div className='mt-3 px-4 '>
    {/* //& Header */}
    <div className=' d-flex justify-content-between align-items-center'>
        <div>
            <p className='fw-bold pt-2' style={{fontSize:'18px'}}> متخصصين السيرة الذاتية ولينكدين</p>
        </div>
        <div>
            <button onClick={()=>navigate('/Admin/AddSpecialist')} className='btn text-white px-4 py-2' style={{backgroundColor:'rgba(31, 42, 68, 1)'}}>+ اضافة متخصص جديد </button>
        </div>
      </div>

    {/* //& List Data */}
    <div>
        <div className='row gy-3 m-0 mt-5'>
        {Advisors.map((el)=>{
            return <SpecialistComponent Category={el.Category} Image={el.Image.secure_url} id={el._id} Name={el.name} />
        })}
        </div>
    </div>
    </div>
      
    </div>
  )
}

export default Specialist
