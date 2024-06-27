import React from 'react'
import style from  '../../Assents/Style/ContactUs.module.css'
import icon1 from '../../Assents/Images/ContactUs/Linkedin icon.png'
import icon2 from '../../Assents/Images/ContactUs/X Icon.png'
import icon3 from '../../Assents/Images/ContactUs/Youtube icon.svg'
import icon4 from '../../Assents/Images/ContactUs/Email Icon.svg'

const ContactUs = () => {
  return (
    <div className={style.font}>
    <div className={style.bgImage}>
        <div className='my-5 text-center'>
        <p style={{fontSize:'40px'}}>
        تواصل معنا
        </p>
        <p className='mt-4' style={{color:'rgba(70, 70, 70, 1)',fontSize:'22px'}}>
        هل تواجه مشكلة او لديك استفسار ما؟ تواصل معنا الان واحصل علي إجابة لكل أسئلتك
        </p>
        </div>
        <div className='container my-5'>
        <div className='bg-white shadow p-4 rounded-4'>
            <div className='row gx-5 m-0 p-0'>
                <div className='col-md-7' >
                    <div>
                    <div className="mb-3">
              <label htmlFor="userName" style={{fontSize:'22px'}} className="form-label">
                {" "}
                الإسم        
                      </label>
              <input
                type="userName"
                className={[style.input, "form-control"].join(" ")}
                id="userName"
                name="userName"
                // onChange={LoginForm.handleChange}
                // onKeyUp={LoginForm.handleBlur}
                // value={LoginForm.values.userName}
              />
              {/* {LoginForm.touched.userName && LoginForm.errors.userName ? (
                <div className="alert py-1  alert-danger">
                  <p>{LoginForm.errors.userName}</p>
                </div>
              ) : (
                ""
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="email" style={{fontSize:'22px'}} className="form-label">
                {" "}
                البريد الالكتروني        
                      </label>
              <input
                type="email"
                className={[style.input, "form-control"].join(" ")}
                id="email"
                name="email"
                // onChange={LoginForm.handleChange}
                // onKeyUp={LoginForm.handleBlur}
                // value={LoginForm.values.email}
              />
              {/* {LoginForm.touched.email && LoginForm.errors.email ? (
                <div className="alert py-1  alert-danger">
                  <p>{LoginForm.errors.email}</p>
                </div>
              ) : (
                ""
              )} */}
            </div>
            <div className="mb-3">
              <label htmlFor="text" style={{fontSize:'22px'}} className="form-label">
                {" "}
                الرسالة            
                          </label>
              <textarea
                type="text"
                rows={4}
                className={[style.input, "form-control"].join(" ")}
                id="text"
                name="text"
                // onChange={LoginForm.handleChange}
                // onKeyUp={LoginForm.handleBlur}
                // value={LoginForm.values.text}
              />
              {/* {LoginForm.touched.text && LoginForm.errors.text ? (
                <div className="alert py-1  alert-danger">
                  <p>{LoginForm.errors.text}</p>
                </div>
              ) : (
                ""
              )} */}
            </div>
            <button className='btn text-white w-100 mt-3 py-3' style={{backgroundColor:'rgba(31, 42, 68, 1)'}}>إرسال</button>

                    </div>
                </div>
                <div className={[style.linear,"col-md-5 rounded-4 p-4"].join(" ")}>
                    <div className='text-center px-4 pt-4 fw-bold'>
                        <p style={{color:'rgba(31, 42, 68, 1)',fontSize:'22px'}}>تواصل معنا علي منصات التواصل المختلفة</p>
                    </div>
                    <ul className='list-unstyled mt-5'>
                        <li className='d-flex align-items-center'>
                            <div>
                            <img src={icon1} alt='icon1'/>
                            </div>
                            <div><p className='pt-3 me-4'>Ekthisaas/linkedin</p></div>
                        </li>
                        <li className='d-flex my-4 align-items-center'>
                            <div>
                            <img src={icon2} alt='icon1'/>
                            </div>
                            <div><p className='pt-3 me-4'>Ekthisaas/X</p></div>
                        </li>
                        <li className='d-flex mb-4 align-items-center'>
                            <div>
                            <img src={icon3} alt='icon1'/>
                            </div>
                            <div><p className='pt-3 me-4'>Ekthisaas/youtube</p></div>
                        </li>
                        <li className='d-flex mb-5 align-items-center'>
                            <div>
                            <img src={icon4} alt='icon1'/>
                            </div>
                            <div><p className='pt-3 me-4'>Ekthisaas@gmail.com</p></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    </div>
      
    </div>
  )
}

export default ContactUs
