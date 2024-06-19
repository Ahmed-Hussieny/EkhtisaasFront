import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import logo from "../../Assents/Images/Auth/logo (2).png";
import style from "../../Assents/Style/Auth.module.css";
import ArrowTop from "../../Assents/Images/Auth/ArrowTop.png";
import ArrowBottom from "../../Assents/Images/Auth/ArrowBottom.png";
import success from "../../Assents/Images/Auth/Check_ring_duotone.svg";
import fail from "../../Assents/Images/Auth/Dell_duotone.svg";
import { HandelVerifyEmail } from '../../store/AuthSlice';
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
    const {userToken} = useParams()
    const navigate = useNavigate()
    console.log(userToken);
    const [res,setRes]= useState('');
    let [ErrorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch()
    const HandelverifyEmail=async()=>{
      const formData = {
        userToken
      }
      const res = await dispatch(HandelVerifyEmail(formData))
      console.log(res);
      setErrorMessage(res.payload.message)
      if(res.payload.status === 200){
        setRes(true)
      }else{
        setRes(false)
      }
    }
    useEffect(()=>{
      HandelverifyEmail()
    },[])
  return (
    <div>
    <div className="m-0 p-0">
      <div className="row m-0 p-0">
        <div className={[style.mainContainer, "col-md-6"].join(" ")}>
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
        <div style={{overflow:'auto'}} className={[style.loginFormContainer, "col-md-6"].join(" ")}>
            {/* Logo */}
            <div className="w-75">
            {res?
              <div className="text-center">
              <img className="w-50" src={success} alt="logo" />
              <div className={[style.input].join(" ")}>
                <h6 className=" text-success">{ErrorMessage}</h6>
              </div>
              <button
                onClick={()=>navigate('/')}
                type="submit"
                className={[style.submitbutton, "btn"].join(" ")}
              >
                تسجيل الدخول
              </button>
              </div>
            :<div>
            <div className="text-center">
              <img className="w-50" src={fail} alt="logo" />
              <div className={[style.input].join(" ")}>
                <h6 className=" text-success">{" انتهت صلاحية"}</h6>
                
              </div>
              <button
                onClick={()=>navigate('/')}
                type="submit"
                className={[style.submitbutton, "btn"].join(" ")}
              >
                اعاده ارسال بريد التفعيل
                  </button>
              </div>
            </div>}
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VerifyEmail
