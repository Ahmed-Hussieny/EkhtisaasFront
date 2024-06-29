import React, { useState } from "react";
import style from "../../Assents/Style/Auth.module.css";
import logo from "../../Assents/Images/Auth/logo (2).png";
import ArrowTop from "../../Assents/Images/Auth/ArrowTop.png";
import ArrowBottom from "../../Assents/Images/Auth/ArrowBottom.png";
import { useFormik } from "formik";
import * as YUP from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { HandelRegister } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { EducationalLevelDate, EmploymentStatusData, SpecializationData } from "../../utils/DataForRegister";

const Register = () => {

  let [ErrorMessage, setErrorMessage] = useState("");
  let [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [alertType,setalertType]=useState("")
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const validationSchema = YUP.object({
    name:YUP.string().required("حقل مطلوب"),
    userName: YUP.string().required("حقل مطلوب"),
    email:YUP.string().email("ادخل بريد الكتروني صحيح").required("حقل مطلوب"),
    password: YUP.string().matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/,
      "يجب أن تحتوي كلمة المرور على 7 أحرف على الأقل، وحرف صغير واحد على الأقل، وحرف كبير واحد على الأقل، ورقم واحد على الأقل، ورمز خاص واحد على الأقل"
    ).required("حقل مطلوب"),
    EducationalLevel:YUP.string().required("حقل مطلوب"),
    Specialization:YUP.string().required("حقل مطلوب"),
    EmploymentStatus:YUP.string().required("حقل مطلوب"),
    JobTitle:YUP.string().required("حقل مطلوب"),
  });
  const RegisterForm = useFormik({
    initialValues: {
        name:"",
        userName: "",
        email:"",
        password: "",
        EducationalLevel:"",
        Specialization:"",
        EmploymentStatus:"",
        JobTitle:"",
    },
    validationSchema,
    onSubmit: RegisterSubmit,
  });
  const [selectedValueEducationalLevel, setSelectedValueEducationalLevel] = useState(RegisterForm.values.EducationalLevel);
  const [selectedValueSpecialization, setSelectedValueSpecialization] = useState(RegisterForm.values.Specialization);
  const [selectedValueEmploymentStatus, setSelectedValueEmploymentStatus] = useState(RegisterForm.values.EmploymentStatus);

  const handleOptionClickEducationalLevel = (value) => {
    setSelectedValueEducationalLevel(value);
    const event = {
      target: {
        name: 'EducationalLevel',
        value
      }
    };
    RegisterForm.handleChange(event);
  };
  const handleOptionClickSpecialization = (value) => {
    setSelectedValueSpecialization(value);
    const event = {
      target: {
        name: 'Specialization',
        value
      }
    };
    RegisterForm.handleChange(event);
  };
  const handleOptionClickEmploymentStatus = (value) => {
    setSelectedValueEmploymentStatus(value);
    const event = {
      target: {
        name: 'EmploymentStatus',
        value
      }
    };
    RegisterForm.handleChange(event);
  };
  async function RegisterSubmit(val) {
    console.log(val);
    setLoading(true);
    const res = await dispatch(HandelRegister(val))
    console.log(res.payload);
    if (res.payload.status !== true) {
      setalertType('alert-danger')
    }else{
      setalertType('alert-success')
    }
    setErrorMessage(res.payload.message);
    setLoading(false);
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="m-0 p-0">
        <div className="row m-0 p-0">
        <div className="col-md-6 d-none d-lg-block m-0 p-0">
        <div className={[style.mainContainer, ].join(" ")}>
            <div className={[style.arrow, style.arrowTopLeft].join(" ")}>
              <img className="w-75" src={ArrowTop} alt="ArrowTop" />
            </div>
        
            {/* Logo */}
            <div className="w-75 m-auto">
              <img className="w-100" src={logo} alt="logo" />
            </div>

            <div className={[style.arrow, style.arrowBottomRight].join(" ")}>
              <img className="w-75" src={ArrowBottom} alt="ArrowTop" />
            </div>
          </div>
          </div>
          <div style={{overflow:'auto'}} className={[style.RegisterFormContainer, "col-md-6"].join(" ")}>
            {/* Logo */}
            <div className="w-75 m-auto mt-5">
              <h6 className={style.h6}> انشاء حساب</h6>
              {ErrorMessage ? (
                
                <div className={`alert py-1 ${alertType}`}>
    <p>{ErrorMessage}</p>
  </div>
              ) : (
                ""
              )}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  {" "}
                  الإسم
                </label>
                <input
                  type="text"
                  className={[style.input, "form-control"].join(" ")}
                  id="name"
                  name="name"
                  onChange={RegisterForm.handleChange}
                  onKeyUp={RegisterForm.handleBlur}
                  value={RegisterForm.values.name}
                />
                {RegisterForm.touched.name &&
                RegisterForm.errors.name ? (
                  <div className="alert py-1  alert-danger">
                    <p>{RegisterForm.errors.name}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  {" "}
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  className={[style.input, "form-control"].join(" ")}
                  id="userName"
                  name="userName"
                  onChange={RegisterForm.handleChange}
                  onKeyUp={RegisterForm.handleBlur}
                  value={RegisterForm.values.userName}
                />
                {RegisterForm.touched.userName &&
                RegisterForm.errors.userName ? (
                  <div className="alert py-1  alert-danger">
                    <p>{RegisterForm.errors.userName}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  {" "}
                  البريد لالكتروني
                </label>
                <input
                  type="email"
                  className={[style.input, "form-control"].join(" ")}
                  id="email"
                  name="email"
                  onChange={RegisterForm.handleChange}
                  onKeyUp={RegisterForm.handleBlur}
                  value={RegisterForm.values.email}
                />
                {RegisterForm.touched.email &&
                RegisterForm.errors.email ? (
                  <div className="alert py-1  alert-danger">
                    <p>{RegisterForm.errors.email}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
      <label htmlFor="EducationalLevel" className="form-label">
        المستوي التعليمي 
      </label>
      <div className={[style.dropdown,"dropdown my-0 p-0"].join(" ")} >
        <button
        className={[style.input,style.smMargine,"form-btn  mb-0 dropdown-toggle w-100", "form-control"].join(" ")}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="">{selectedValueEducationalLevel || 'اختر المستوي التعليمي'}</span>
          </button>
        <ul className={["dropdown-menu position- w-100 border-0  "].join(" ")}>
        {EducationalLevelDate.map((el)=>{
          return <li><a className={[style.input ,style.smMargine,"dropdown-item", "form-control"].join(" ")} href="#" onClick={() => handleOptionClickEducationalLevel(el)}>{el}</a></li>
        })}
        </ul>
      </div>
      {RegisterForm.touched.EducationalLevel && RegisterForm.errors.EducationalLevel ? (
        <div className="alert py-1 alert-danger ">
          <p>{RegisterForm.errors.EducationalLevel}</p>
        </div>
      ) : null}
    </div>
    <div className="mb-3">
      <label htmlFor="Specialization" className="form-label">
      التخصص     
    </label>
      <div className={[style.dropdown,"dropdown my-0"].join(" ")} >
        <button
        className={[style.input,style.smMargine,"form-btn mb-0 dropdown-toggle w-100", "form-control"].join(" ")}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span>{selectedValueSpecialization || 'اختر  التخصص'}</span>
          </button>
        <ul className={["dropdown-menu w-100 border-0  "].join(" ")}>
        {SpecializationData.map((el)=>{
          return  <li ><a className={[style.input ,style.smMargine,"dropdown-item", "form-control"].join(" ")} href="#" onClick={() => handleOptionClickSpecialization(el)}>{el}</a></li>
        })}
        </ul>
      </div>
      {RegisterForm.touched.Specialization && RegisterForm.errors.Specialization ? (
        <div className="alert py-1 alert-danger ">
          <p>{RegisterForm.errors.Specialization}</p>
        </div>
      ) : null}
    </div>
    <div className="mb-3">
      <label htmlFor="EmploymentStatus" className="form-label">
      الحالة الوظيفية     
    </label>
      <div className={[style.dropdown,"dropdown my-0"].join(" ")} >
        <button
        className={[style.input,style.smMargine,"form-btn mb-0 dropdown-toggle w-100", "form-control"].join(" ")}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span>{selectedValueEmploymentStatus || 'اختر  الحالة الوظيفية'}</span>
          </button>
        <ul className={["dropdown-menu w-100 border-0  "].join(" ")}>
        {EmploymentStatusData.map((el)=>{
          return <li ><a className={[style.input ,style.smMargine,"dropdown-item", "form-control"].join(" ")} href="#" onClick={() => handleOptionClickEmploymentStatus(el)}> {el}</a></li>
        })}
        </ul>
      </div>
      {RegisterForm.touched.EmploymentStatus && RegisterForm.errors.EmploymentStatus ? (
        <div className="alert py-1 alert-danger ">
          <p>{RegisterForm.errors.EmploymentStatus}</p>
        </div>
      ) : null}
    </div>
    <div className="mb-3">
                <label htmlFor="JobTitle" className="form-label">
                  {" "}
                  المسمي الوظيفي
                </label>
                <input
                  type="text"
                  className={[style.input, "form-control"].join(" ")}
                  id="JobTitle"
                  name="JobTitle"
                  onChange={RegisterForm.handleChange}
                  onKeyUp={RegisterForm.handleBlur}
                  value={RegisterForm.values.JobTitle}
                />
                {RegisterForm.touched.JobTitle &&
                RegisterForm.errors.JobTitle ? (
                  <div className="alert py-1  alert-danger">
                    <p>{RegisterForm.errors.JobTitle}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
              <label htmlFor="password" className="form-label">
                كلمة المرور
              </label>
              <div className="input-group">
                <span
                  onClick={togglePasswordVisibility}
                  className={style.showPassword}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  className={[style.input, "form-control"].join(" ")}
                  id="password"
                  name="password"
                  onChange={RegisterForm.handleChange}
                  onKeyUp={RegisterForm.handleBlur}
                  value={RegisterForm.values.password}
                />
              </div>{" "}
              {RegisterForm.touched.password && RegisterForm.errors.password ? (
                <div className="alert py-1 alert-danger">
                  <p>{RegisterForm.errors.password}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={style.rigthTextHead}>
              {/* <div>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  className={[style.rigthText, "form-check-label", "px-2"].join(
                    " "
                  )}
                  htmlFor="flexCheckDefault"
                >
                  تذكرني
                </label>
              </div>
              <div className="">
                <a href="#" className={style.rigthText}>
                  نسيت كلمة المرور؟
                </a>
              </div> */}
            </div>
            {loading ? (
              <button
                type="button"
                className={[style.submitbutton, "btn"].join(" ")}
              >
                <i className="fa-solid fa-spinner fa-spin"></i>
              </button>
            ) : (
              <button
                onClick={RegisterForm.handleSubmit}
                disabled={!(RegisterForm.isValid && RegisterForm.dirty)}
                type="submit"
                className={[style.submitbutton, "btn"].join(" ")}
              >
انشاء حساب              </button>
            )}
          </div>
          <div className={[style.ToLogin, "mt-4"].join(" ")} >
            <p>لديك حساب بالفعل ؟
            <span onClick={()=>navigate('/')}>تسجيل الدخول</span>
            </p>

            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Register;
