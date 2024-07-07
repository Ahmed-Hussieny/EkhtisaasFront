import React from 'react'
import icon1 from '../../../Assents/Images/ADMIN/Specialties/Trash_duotone.svg'
import icon2 from '../../../Assents/Images/ADMIN/Specialties/Edit_duotone_line.svg'
import EditModel from './EditModel'
import DeleteModel from './DeleteModel'
import { useNavigate } from 'react-router-dom'
const SpecialtiesComponent = ({id,Img,TypeIcon,Title,Desc,Type}) => {
  const navigate = useNavigate()
  return (
      <div className='col-md-4 ' onClick={()=>navigate(`/Admin/MainSpecialties/${id}`)}>
            <div className='rounded-4 text-center position-relative pb-' style={{backgroundColor:'rgba(247, 247, 247, 1)'}}>
            <div className='pt-2'></div>
                <div><img src={Img} className='m-auto'   alt='img1'/></div>
                <div className='pb-2'></div>
                <div className='bg-white p-1 d-flex' style={{border:"1px solid rgba(247, 247, 247, 1)",position:'absolute',top:0,left:0,borderBottomRightRadius:'15px',borderTopLeftRadius:'15px'}}>
                <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img className='w-50'  style={{cursor:'pointer'}} src={icon2}   alt='icon2'/>
                </div>
                <div data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <img className='w-50' style={{cursor:'pointer'}} src={icon1}   alt='icon1'/>
                </div>
                </div>
            </div>
            <div className='ps-4 d-flex align-items-center mt-2 justify-content-center'>
            <img src={TypeIcon} alt=''/>
                <p className='text-center pt-3 me-3' style={{fontSize:'24px',color:'rgba(31, 42, 68, 1)'}}>{Title}</p>
            </div>
            <p className='pe-2' style={{color:'rgba(101, 101, 101, 1)',fontSize:'18px'}}>
                {Desc}
            </p>


<div>

  {/* Modal1 */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <EditModel id={id} Type={Type} Title={Title} Desc={Desc}/>
    </div>
  </div>
  {/* Modal2 */}
  <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <DeleteModel id={id}/>
    </div>
  </div>
</div>

        </div>
  )
}

export default SpecialtiesComponent
