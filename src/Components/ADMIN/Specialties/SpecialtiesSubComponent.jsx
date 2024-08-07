import React from 'react'
import EditSubModel from './EditSubModel'
import DeleteSubModel from './DeleteSubModel'
import icon1 from '../../../Assents/Images/ADMIN/Specialties/Trash_duotone.svg'
import icon2 from '../../../Assents/Images/ADMIN/Specialties/Edit_duotone_line.svg'
import { useNavigate } from 'react-router-dom'
const SpecialtiesSubComponent = ({id,Img,MainTitle,TypeIcon,Title,Desc,Type}) => {
    return (
        <div className='col-md-4 bg'>
              <div className='rounded-4 text-center justify-content-center d-flex align-items-center position-relative pb-' style={{height:'250px',backgroundColor:'rgba(247, 247, 247, 1)'}}>
                  <div className='d-flex   align-items-center'>
                  <img style={{height:'200px'}} src={Img} className='m-auto w-75'   alt='img1'/>

                  </div>                  
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
        <EditSubModel MainTitle={MainTitle}  id={id} Type={Type} Title={Title} Desc={Desc}/>
      </div>
    </div>
    {/* Modal2 */}
    <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <DeleteSubModel id={id}/>
      </div>
    </div>
  </div>
  
          </div>
    )
}

export default SpecialtiesSubComponent
