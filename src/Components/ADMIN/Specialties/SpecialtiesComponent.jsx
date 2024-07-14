import React, { useEffect, useRef, useState } from 'react'
import icon1 from '../../../Assents/Images/ADMIN/Specialties/Trash_duotone.svg'
import icon2 from '../../../Assents/Images/ADMIN/Specialties/Edit_duotone_line.svg'
import uploadImage from '../../../Assents/Images/ADMIN/Specialties/Upload_light.svg';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { HandelDeleteMainSpecialty, HandelUpdateMainSpecialty } from '../../../store/SpecialtiesSlice'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import { MenuItem, Select } from '@mui/material'
import typeIcon1 from '../../../Assents/Images/ProfessionalCertification/Beaker.svg'
import typeIcon2 from '../../../Assents/Images/ProfessionalCertification/Atom.svg'
import typeIcon3 from '../../../Assents/Images/ProfessionalCertification/Telecope.svg'
import toast, { Toaster } from 'react-hot-toast';

// Yup validation schema
const validationSchema = Yup.object({
  title: Yup.string().required('العنوان مطلوب'),
  Type: Yup.string().required('النوع مطلوب'),
  desc: Yup.string()
    .required('الوصف مطلوب')
    .max(500, 'الوصف يجب أن يكون أقل من 500 حرف'),
  image: Yup.mixed().required('الصورة مطلوبة'),
});

const SpecialtiesComponent = ({id,Img,TypeIcon,Title,Desc,Type}) => {
  const [icon,setIcon] = useState("")

    useEffect(()=>{
        if(Title==="الكيمياء"){
            setIcon(typeIcon1)
        }else if(Title==="الفيزياء"){
            setIcon(typeIcon2)
        }else if(Title==="الاحياء"){
            setIcon(typeIcon3)
        }
    },[])
  const dispatch = useDispatch()

  // ^ Handel Delete
  const navigate = useNavigate()
  const HandelDeleteModel =async()=>{
    const res = await dispatch(HandelDeleteMainSpecialty(id))
    console.log(res);
  }

  // ^Handel Update
  const fileInputRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      title: Title || '',
      Type: Type || '',
      desc: Desc || '',
      image: null,
    },
    validationSchema,
    onSubmit: UpdateSpecialties
  });
  async function UpdateSpecialties(values){
    console.log(values);
    const formData = new FormData();
    formData.append('Title', values.title);
    formData.append('Type', values.Type);
    formData.append('Description', values.desc);
    formData.append('Image', values.image);
    const res = await dispatch(HandelUpdateMainSpecialty({formData,id}))
    if(res.payload.success === true){
      toast.success(res.payload.message);
    }else{
      toast.error(res.payload.data.message);
    }
  }
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue('image', file);
    }
  };
  
  return (
      <div className='col-md-4 '>
        <Toaster
  toastOptions={{
    success: {
      style: {
        background: 'green',
        color:'white',
        fontWeight:'bold'
      },
    },
    error: {
      style: {
        background: '#951233',
        color:'white',
        fontWeight:'bold'
      },
    },
  }}
/>
            <div  className='rounded-4 d-flex justify-content-center align-items-center  text-center position-relative ' style={{height:'250px',backgroundColor:'rgba(247, 247, 247, 1)'}}>
                <div className='d-flex  align-content-center' onClick={()=>navigate(`/Admin/MainSpecialties/${id}`)}><img   style={{height:'200px'}}  src={Img} className='m-auto w-75'   alt='img1'/></div>
                <div className='pb-2'></div>
                <div className='bg-white p-1 d-flex' style={{border:"1px solid rgba(247, 247, 247, 1)",position:'absolute',top:0,left:0,borderBottomRightRadius:'15px',borderTopLeftRadius:'15px'}}>
                <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img className='w-75 '  style={{cursor:'pointer'}} src={icon2}   alt='icon2'/>
                </div>
                <div data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <img className='w-75' style={{cursor:'pointer'}} src={icon1}   alt='icon1'/>
                </div>
                </div>
            </div>
            <div className='ps-4 d-flex align-items-center mt-2 justify-content-center'>
            <img src={icon} alt=''/>
                <p className='text-center pt-3 me-3' style={{fontSize:'24px',color:'rgba(31, 42, 68, 1)'}}>{Title}</p>
            </div>
            <p className='pe-2' style={{color:'rgba(101, 101, 101, 1)',fontSize:'18px'}}>
                {Desc}
            </p>


<div>

  {/* Modal Update */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog ">
    <div className="modal-content">
      <form onSubmit={formik.handleSubmit}>
        <div className="modal-body modal-lg">
          <div className="modal-heade p-2 pb-4 d-flex justify-content-between">
            <h1 className="modal-title fs-5" id="exampleModalLabel">تعديل التخصص</h1>
            <button Type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          
          <div className="mb-3">
            <label htmlFor="title" className="form-label fw-bold mb-3">
              عنوان التخصص
            </label>
            <input
              Type="text"
              className="form-control border-0 py-2"
              id="title"
              name="title"
              style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="alert py-1 alert-danger">
                <p>{formik.errors.title}</p>
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="Type" className="form-label fw-bold mb-3">
              نوع التخصص
            </label>
            <Select
              id="Type"
              name="Type"
              value={formik.values.Type}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              displayEmpty
              className="form-control border-0 py-2"
              style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
            >
              <MenuItem value="" disabled>اختر نوع التخصص</MenuItem>
              <MenuItem value="علمي">علمي</MenuItem>
              <MenuItem value="إنساني وأدبي">إنساني وأدبي</MenuItem>
              <MenuItem value="إداري">إداري</MenuItem>
              <MenuItem value="صحي">صحي</MenuItem>
            </Select>
            {formik.touched.Type && formik.errors.Type ? (
              <div className="alert py-1 alert-danger">
                <p>{formik.errors.Type}</p>
              </div>
            ) : null}
          </div>

          <div className="mb-3">
            <label htmlFor="desc" className="form-label fw-bold mb-3">
              نبذة عن التخصص
            </label>
            <textarea
              className="form-control border-0 py-2"
              id="desc"
              name="desc"
              style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
              rows={5}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.desc}
            />
            {formik.touched.desc && formik.errors.desc ? (
              <div className="alert py-1 alert-danger">
                <p>{formik.errors.desc}</p>
              </div>
            ) : null}
          </div>

          <div>
            <input
              Type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileChange}
            />
            <p
              style={{ cursor: 'pointer' }}
              onClick={handleButtonClick}
            >
              <img src={uploadImage} className='ms-2 mt-3' alt='uploadImage' />
              <span>
                أضف صورة معبرة عن التخصص
              </span>
            </p>
            {formik.touched.image && formik.errors.image ? (
              <div className="alert py-1 alert-danger">
                <p>{formik.errors.image}</p>
              </div>
            ) : null}
          </div>

          <div className='text-start'>
            <button Type="submit" className='btn text-white rounded-3 mt-1 px-5 py-2' data-bs-dismiss="modal" style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>
              تعديل
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  </div>
  {/* Modal Delete */}
  <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        
        <div className="modal-body text-center py-4">
          <p className='pb-4'>هل أنت متأكد من حذف هذا التخصص</p>
          <div >
          <button type="button" className="btn ms-4 w-25 text-white  py-2" style={{backgroundColor:'rgba(5, 201, 60, 1)'}} data-bs-dismiss="modal">تجاهل</button>
          <button onClick={()=>HandelDeleteModel()} type="button" className="btn w-25 text-white px-4 py-2" style={{backgroundColor:'rgba(208, 0, 0, 1)'}} data-bs-dismiss="modal">حذف</button>
        
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

        </div>
  )
}

export default SpecialtiesComponent
