import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MenuItem, Select } from '@mui/material';
import uploadImage from '../../../Assents/Images/ADMIN/Specialties/Upload_light.svg';
import { useDispatch } from 'react-redux';
import { HandelGetAllMainSpecialty, HandelUpdateSubSpecialty } from '../../../store/SpecialtiesSlice';

// Yup validation schema
const validationSchema = Yup.object({
  MainTitle: Yup.string().required('العنوان الرئيسي مطلوب'),
  desc: Yup.string()
    .required('الوصف مطلوب')
    .max(500, 'الوصف يجب أن يكون أقل من 500 حرف'),
  image: Yup.mixed().required('الصورة مطلوبة'),
});

const EditSubModel = ({ id, Title,MainTitle, Desc,Type }) => {
    console.log(id);
  const fileInputRef = useRef(null);

  const [MainSpecialty,setMainSpecialty]=useState([])
//   ^ find All Mian Specialty
    const GetAllMainSpecialty =async()=>{
        const res= await dispatch(HandelGetAllMainSpecialty())
        console.log( res.payload.data);
        setMainSpecialty(res.payload.data)
    }
    useEffect(()=>{
        GetAllMainSpecialty()
    },[])
  const [ErrorMessage , setErrorMessage] = useState("")
  const formik = useFormik({
    initialValues: {
      MainTitle: MainTitle || '',
      desc: Desc || '',
      image: null,
    },
    validationSchema,
    onSubmit: UpdateSpecialties
  });
  const dispatch = useDispatch()
  async function UpdateSpecialties(values){
    console.log(values);
    const formData = new FormData();
    formData.append('MainTitle', values.MainTitle);
    formData.append('Description', values.desc);
    formData.append('Image', values.image);
    const res = await dispatch(HandelUpdateSubSpecialty({formData,id}))
    if(res.payload.success === true){
      setErrorMessage(res.payload.message);
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
    <div className="modal-content">
      <form onSubmit={formik.handleSubmit}>
        <div className="modal-body modal-lg">
          <div className="modal-heade p-2 pb-4 d-flex justify-content-between">
            <h1 className="modal-title fs-5" id="exampleModalLabel"> {Title}</h1>
            <button Type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          {ErrorMessage?
    <div className='alert alert-success'>
      <p>{ErrorMessage}</p>
    </div>:""}
          

          <div className="mb-3">
            <label htmlFor="MainTitle" className="form-label fw-bold mb-3">
            التخصص الرئيسي
            </label>
            <Select
              id="MainTitle"
              name="MainTitle"
              value={formik.values.MainTitle}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              displayEmpty
              className="form-control border-0 py-2"
              style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
            >
              <MenuItem value="" disabled>اختر نوع التخصص</MenuItem>
              {MainSpecialty.map((el)=>{
                return <MenuItem value={el.Title}>{el.Title}</MenuItem>
              })}
            </Select>
            {formik.touched.MainTitle && formik.errors.MainTitle ? (
              <div className="alert py-1 alert-danger">
                <p>{formik.errors.MainTitle}</p>
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
            <button Type="submit" className='btn text-white rounded-3 mt-1 px-5 py-2' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>
              تعديل
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditSubModel;
