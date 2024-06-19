import React, { useState } from "react";
import style from "../../Assents/Style/Auth.module.css";
import logo from "../../Assents/Images/Auth/logo (2).png";
import ArrowTop from "../../Assents/Images/Auth/ArrowTop.png";
import ArrowBottom from "../../Assents/Images/Auth/ArrowBottom.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { useFormik } from "formik";

import * as YUP from "yup";
import { Link, useNavigate } from "react-router-dom";
import { HandelLogin } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";
function Login() {
  let [ErrorMessage, setErrorMessage] = useState("");
  let [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const validationSchema = YUP.object({
    userName: YUP.string().required("حقل مطلوب"),
    password: YUP.string().matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/,
      "يجب أن تحتوي كلمة المرور على 7 أحرف على الأقل، وحرف صغير واحد على الأقل، وحرف كبير واحد على الأقل، ورقم واحد على الأقل، ورمز خاص واحد على الأقل"
    ).required("حقل مطلوب"),
  });
  const LoginForm = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema,
    onSubmit: LoginSubmit,
  });
  async function LoginSubmit(val) {
    console.log(val);
    const res = await dispatch(HandelLogin(val))
    console.log(res.payload);
    if(res.payload.status === true){
      console.log('ss');
      localStorage.setItem("Token",res.payload.Token)
      navigate('/HomePage')
    }
    if(!(res.payload.data.status)){
      setErrorMessage(res.payload.data.errMsg)
    }
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  };
  return (
    <div className="m-0 p-0">
      <div className="row m-0 p-0">
        <div className={[style.loginFormContainer, "col-md-6"].join(" ")}>
          {/* Logo */}
          <div className="w-75 m-auto">
            <h6 className={style.h6}>تسجيل الدخول</h6>
            {ErrorMessage ? (
              <div className="alert py-1  alert-danger">
                <p>{ErrorMessage}</p>
              </div>
            ) : (
              ""
            )}
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                {" "}
                اسم المستخدم
              </label>
              <input
                type="userName"
                className={[style.input, "form-control"].join(" ")}
                id="userName"
                name="userName"
                onChange={LoginForm.handleChange}
                onKeyUp={LoginForm.handleBlur}
                value={LoginForm.values.userName}
              />
              {LoginForm.touched.userName && LoginForm.errors.userName ? (
                <div className="alert py-1  alert-danger">
                  <p>{LoginForm.errors.userName}</p>
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
                  onChange={LoginForm.handleChange}
                  onKeyUp={LoginForm.handleBlur}
                  value={LoginForm.values.password}
                />
              </div>{" "}
              {LoginForm.touched.password && LoginForm.errors.password ? (
                <div className="alert py-1 alert-danger">
                  <p>{LoginForm.errors.password}</p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={style.rigthTextHead}>
              <div>
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
                <Link to="/ForgetPassword" className={style.rigthText}>
                  نسيت كلمة المرور؟
                </Link>
              </div>
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
                onClick={LoginForm.handleSubmit}
                disabled={!(LoginForm.isValid && LoginForm.dirty)}
                type="submit"
                className={[style.submitbutton, "btn"].join(" ")}
              >
                تسجيل الدخول
              </button>
            )}
          </div>
        <div className={style.ToRegister}>
            <p>
            ليس لديك حساب؟  
            <span onClick={()=>navigate('/signUp')}>  تسجيل جديد</span>
            </p>
        </div>
        </div>
        <div className={[style.mainContainer, "col-md-6 d-none d-lg-block"].join(" ")}>
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
    </div>
  );
}

export default Login;
