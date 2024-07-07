import React, { useEffect, useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { MenuItem, Select } from '@mui/material';
import uploadImage from '../../../Assents/Images/ADMIN/Specialties/Upload_light.svg';
import { useDispatch } from 'react-redux';
import { HandelUpdateMainSpecialty } from '../../../store/SpecialtiesSlice';

// Yup validation schema
const validationSchema = Yup.object({
  title: Yup.string().required('العنوان مطلوب'),
  Type: Yup.string().required('النوع مطلوب'),
  desc: Yup.string()
    .required('الوصف مطلوب')
    .max(500, 'الوصف يجب أن يكون أقل من 500 حرف'),
  image: Yup.mixed().required('الصورة مطلوبة'),
});

const EditModel = ({ id, Title, Desc,Type }) => {
  const fileInputRef = useRef(null);

  const [ErrorMessage , setErrorMessage] = useState("")
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
  const dispatch = useDispatch()
  async function UpdateSpecialties(values){
    console.log(values);
    const formData = new FormData();
    formData.append('Title', values.title);
    formData.append('Type', values.Type);
    formData.append('Description', values.desc);
    formData.append('Image', values.image);
    const res = await dispatch(HandelUpdateMainSpecialty({formData,id}))
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
            <h1 className="modal-title fs-5" id="exampleModalLabel">تعديل التخصص</h1>
            <button Type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          {ErrorMessage?
    <div className='alert alert-success'>
      <p>{ErrorMessage}</p>
    </div>:""}
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
            <button Type="submit" className='btn text-white rounded-3 mt-1 px-5 py-2' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>
              تعديل
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditModel;
