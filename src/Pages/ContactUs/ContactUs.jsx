import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from '../../Assents/Style/ContactUs.module.css';
import icon1 from '../../Assents/Images/ContactUs/Linkedin icon.png';
import icon2 from '../../Assents/Images/ContactUs/X Icon.png';
import icon3 from '../../Assents/Images/ContactUs/Youtube icon.svg';
import icon4 from '../../Assents/Images/ContactUs/Email Icon.svg';
import { HandelGetCountOfVisitors, HandelPutCountOfVisitors, sendEmailFromContactUsPage } from '../../store/AuthSlice';
import toast, { Toaster } from 'react-hot-toast';

const ContactUs = () => {
  const dispatch = useDispatch();
  const [pageData , setPageData] = useState([])
  const putPageCount = async () => {
    await dispatch(HandelPutCountOfVisitors(6));
  };
  const HandelLinks = async ()=>{
    const res = await dispatch(HandelGetCountOfVisitors())
    setPageData(res.payload.data)
  }
  useEffect(() => {
    putPageCount();
    HandelLinks()
  }, []);

  const validationSchema = Yup.object({
    name: Yup.string().required('الاسم مطلوب'),
    email: Yup.string().email('البريد الإلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
    text: Yup.string().required('الرسالة مطلوبة'),
  });

  const sendEmail = async(values)=>{
    console.log(values);
    const res = await dispatch(sendEmailFromContactUsPage(values))
    if(res.payload.success){
      toast.success(res.payload.message)
    }else{
      toast.error(res.payload.data.message)
    }
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: '',
    },
    validationSchema: validationSchema,
    onSubmit: sendEmail
  });
  const openEmail = (recipient, subject, body) => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className={style.font}>
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
      <div className={style.bgImage}>
        <div className="my-5 text-center">
          <p style={{ fontSize: '40px' }}>تواصل معنا</p>
          <p className="mt-4" style={{ color: 'rgba(70, 70, 70, 1)', fontSize: '22px' }}>
            هل تواجه مشكلة او لديك استفسار ما؟ تواصل معنا الان واحصل علي إجابة لكل أسئلتك
          </p>
        </div>
        <div className="container my-5">
          <div className="bg-white shadow p-4 rounded-4">
            <form onSubmit={formik.handleSubmit}>
              <div className="row gx-5 gy-2 m-0 p-0">
                <div className="col-md-7">
                  <div>
                    <div className="mb-3">
                      <label htmlFor="name" style={{ fontSize: '22px' }} className="form-label">
                        الإسم
                      </label>
                      <input
                        type="text"
                        className={`${style.input} form-control`}
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                      />
                      {formik.touched.name && formik.errors.name ? (
                        <div className="alert py-1 alert-danger">
                          <p>{formik.errors.name}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" style={{ fontSize: '22px' }} className="form-label">
                        البريد الالكتروني
                      </label>
                      <input
                        type="email"
                        className={`${style.input} form-control`}
                        id="email"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="alert py-1 alert-danger">
                          <p>{formik.errors.email}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="text" style={{ fontSize: '22px' }} className="form-label">
                        الرسالة
                      </label>
                      <textarea
                        rows={4}
                        className={`${style.input} form-control`}
                        id="text"
                        name="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.text}
                      />
                      {formik.touched.text && formik.errors.text ? (
                        <div className="alert py-1 alert-danger">
                          <p>{formik.errors.text}</p>
                        </div>
                      ) : null}
                    </div>
                    <button type="submit" className="btn text-white w-100 mt-3 py-3" style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>
                      إرسال
                    </button>
                  </div>
                </div>
                <div className={`${style.linear} col-md-5 rounded-4 p-4`}>
                  <div className="text-center px-4 pt-4 fw-bold">
                    <p style={{ color: 'rgba(31, 42, 68, 1)', fontSize: '22px' }}>تواصل معنا علي منصات التواصل المختلفة</p>
                  </div>
                  <ul className="list-unstyled mt-5">
                    <li >
                    <a style={{textDecoration:'none',color:'black'}} href={`${pageData.LinkedIn}`} className="d-flex align-items-center" target='_blank'>

                      <div>
                        <img src={icon1} alt="LinkedIn" />
                      </div>
                      <div>
                        
                          <p className="pt-3 me-4">Ekthisaas/linkedin</p>

                     
                      </div>
                      </a>
                    </li>
                    <li className='my-4'>
                    <a style={{textDecoration:'none',color:'black'}} href={`${pageData.X}`} className="d-flex align-items-center" target='_blank'>
                      <div>
                        <img src={icon2} alt="X" />
                      </div>
                      <div>
                        <p className="pt-3 me-4">Ekthisaas/X</p>
                      </div>
                      </a>
                    </li>
                    <li className='my-4'>
                    <a style={{textDecoration:'none',color:'black'}} href={`${pageData.Youtube}`} className="d-flex align-items-center" target='_blank'>

                      <div>
                        <img src={icon3} alt="YouTube" />
                      </div>
                      <div>
                        <p className="pt-3 me-4">Ekthisaas/youtube</p>
                      </div>
                      </a>
                    </li>
                    <li onClick={() => openEmail(pageData.Email, 'Hello!', 'I wanted to reach out and say hello.')} className=' d-flex justify-content-center align-items-center'>

                      <div >
                        <img src={icon4} alt="Email" />
                      </div>
                      <div>
                        <p className="pt-3 me-4">Ekthisaas@gmail.com</p>
                      </div>
                     
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
