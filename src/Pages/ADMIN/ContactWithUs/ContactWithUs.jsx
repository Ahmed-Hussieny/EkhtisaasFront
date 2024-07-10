
import React, {  useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from '../../../Assents/Style/search.module.css';
import { useDispatch } from 'react-redux';
import { HandelGetCountOfVisitors, HandelPutTheWebsiteInformation } from '../../../store/AuthSlice';
import toast, { Toaster } from 'react-hot-toast';

const ContactWithUs = () => {
  let [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
    LinkedIn: Yup.string(),
    X: Yup.string(),
    Youtube: Yup.string(),
    Email: Yup.mixed(),
  });

  const AddMainSpecialty =async (formData)=> {
    setLoading(true);

    const res = await dispatch(HandelPutTheWebsiteInformation(formData));
    console.log(res);
    if(res.payload.success === true){
      toast.success(res.payload.message)
    }else{
      toast.error(res.payload.data.message)
    }
    
    setLoading(false);
  }
  const AddNewSpecialtiesForm = useFormik({
    initialValues: {
      LinkedIn: '',
      X: '',
      Youtube: '',
      Email: "",
    },
    validationSchema,
    onSubmit: AddMainSpecialty 
  });

  const dispatch = useDispatch();


  return (
    <div className={[style.font, "px-4"].join(" ")}>
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
      <div className='container mt-4'>
      
        <p style={{ fontSize: '20px',fontWeight:'bold' }}>  معلومات التواصل</p>
      </div>
      <div className='container'>
        <div style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }} className='rounded-3 p-4 pb-2'>
          <form onSubmit={AddNewSpecialtiesForm.handleSubmit}>
            <div className="mb-3 text-start">
              <label htmlFor="LinkedIn" className="form-label fw-bold mb-3"> LinkedIn</label>
              <input
                type="text"
                className={[style.input, "form-control bg-white border-0 py-2 text-secondary"].join(" ")}
                id="LinkedIn"
                name="LinkedIn"
                onChange={AddNewSpecialtiesForm.handleChange}
                onBlur={AddNewSpecialtiesForm.handleBlur}
                value={AddNewSpecialtiesForm.values.LinkedIn}
              />
              {AddNewSpecialtiesForm.touched.LinkedIn && AddNewSpecialtiesForm.errors.LinkedIn ? (
                <div className="alert py-1 alert-danger">
                  <p>{AddNewSpecialtiesForm.errors.LinkedIn}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-3 text-start">
              <label htmlFor="X" className="form-label fw-bold mb-3"> X</label>
              <input
                type="text"
                className={[style.input, "form-control bg-white border-0 py-2 text-secondary"].join(" ")}
                id="X"
                name="X"
                onChange={AddNewSpecialtiesForm.handleChange}
                onBlur={AddNewSpecialtiesForm.handleBlur}
                value={AddNewSpecialtiesForm.values.X}
              />
              {AddNewSpecialtiesForm.touched.X && AddNewSpecialtiesForm.errors.X ? (
                <div className="alert py-1 alert-danger">
                  <p>{AddNewSpecialtiesForm.errors.X}</p>
                </div>
              ) : null}
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="Youtube" className="form-label fw-bold mb-3"> Youtube</label>
              <input
                type="text"
                className={[style.input, "form-control bg-white border-0 py-2 text-secondary"].join(" ")}
                id="Youtube"
                name="Youtube"
                onChange={AddNewSpecialtiesForm.handleChange}
                onBlur={AddNewSpecialtiesForm.handleBlur}
                value={AddNewSpecialtiesForm.values.Youtube}
              />
              {AddNewSpecialtiesForm.touched.Youtube && AddNewSpecialtiesForm.errors.Youtube ? (
                <div className="alert py-1 alert-danger">
                  <p>{AddNewSpecialtiesForm.errors.Youtube}</p>
                </div>
              ) : null}
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="Email" className="form-label fw-bold mb-3"> Email</label>
              <input
                type="text"
                className={[style.input, "form-control bg-white border-0 py-2 text-secondary"].join(" ")}
                id="Email"
                name="Email"
                onChange={AddNewSpecialtiesForm.handleChange}
                onBlur={AddNewSpecialtiesForm.handleBlur}
                value={AddNewSpecialtiesForm.values.Email}
              />
              {AddNewSpecialtiesForm.touched.Email && AddNewSpecialtiesForm.errors.Email ? (
                <div className="alert py-1 alert-danger">
                  <p>{AddNewSpecialtiesForm.errors.Email}</p>
                </div>
              ) : null}
            </div>

            <div className='text-center mt-5 mb-2'>
              {loading ? (
                <button
                  type="button"
                  className={["btn px-5 py-2"].join(" ")}
                  style={{backgroundColor:'#3C4B6E',color:'white'}}
                >
                  <i className="fa-solid fa-spinner fa-spin"></i>
                </button>
              ) : (
                <button
                  disabled={(loading)}
                  type="submit"
                  style={{backgroundColor:'rgb(31, 42, 68)',color:'white'}}
                  className={[style.submitbutton, "btn px-lg-5 py-2"].join(" ")}
                > تعديل
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithUs;
