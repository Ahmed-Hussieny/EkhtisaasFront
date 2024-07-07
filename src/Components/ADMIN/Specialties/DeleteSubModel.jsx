import React from 'react'
import { useDispatch } from 'react-redux'
import { HandelDeleteSubSpecialty, HandelDeleteMainSpecialty } from '../../../store/SpecialtiesSlice'

const DeleteSubModel = ({id}) => {
  const dispatch = useDispatch()
  const HandelDeleteModel =async()=>{
    const res = await dispatch(HandelDeleteSubSpecialty(id))
    console.log(res);
  }
  return (
    <div className="modal-content">
        
        <div className="modal-body text-center py-4">
          <p className='pb-4'>هل أنت متأكد من حذف هذا التخصص</p>
          <div >
          <button type="button" className="btn ms-4 w-25 text-white  py-2" style={{backgroundColor:'rgba(5, 201, 60, 1)'}} data-bs-dismiss="modal">تجاهل</button>
          <button onClick={()=>HandelDeleteModel()} type="button" className="btn w-25 text-white px-4 py-2" style={{backgroundColor:'rgba(208, 0, 0, 1)'}} data-bs-dismiss="modal">حذف</button>
        
          </div>
        </div>
        
      </div>
  )
}

export default DeleteSubModel
