import React, { useEffect, useState } from "react";
import style from "../../Assents/Style/Homepage.module.css";
import circle from "../../Assents/Images/Homepage/Circle.png";
import cuate from "../../Assents/Images/Homepage/cuate.svg";
import CustomTitle from "../../Components/CustomTitle/CustomTitle";
import CustomHomeDesc from "../../Components/CustomHomeDesc/CustomHomeDesc";
import image1 from "../../Assents/Images/Homepage/undraw_data_processing_yrrv.svg";
import image2 from "../../Assents/Images/Homepage/undraw_time_management_re_tk5w.svg";
import image3 from "../../Assents/Images/Homepage/undraw_online_resume_re_ru7s.svg";
import image4 from "../../Assents/Images/Homepage/undraw_completed_steps_re_h9wc.svg";
import image5 from "../../Assents/Images/Homepage/undraw_online_information_re_erks.svg";
import CustomHomeNumber from "../../Components/CustomHomeNumber/CustomHomeNumber";
import sep1 from "../../Assents/Images/Homepage/separators/Line 19 (1).png";
import sep2 from "../../Assents/Images/Homepage/separators/Line 20.png";
import sep3 from "../../Assents/Images/Homepage/separators/Line 21.png";
import { useDispatch } from "react-redux";
import { HandelGetAllCertificate } from "../../store/CertificateSlice";
import { HandelGetAllMainSpecialty, HandelGetAllSubSpecialty } from "../../store/SpecialtiesSlice";
import { useNavigate } from "react-router-dom";
import { HandelPutCountOfVisitors, HandelSendEmailFromHomePage } from "../../store/AuthSlice";
import style2 from '../../Assents/Style/Auth.module.css';
import * as Yup from 'yup'
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
const HomePage = () => {  
  const navigate = useNavigate()
  const [numberOfCertificate , setNumberOfCertificate] = useState(0)
  const [numberOfMainSpeciality , setNumberOfMainSpeciality] = useState(0)
  const [numberOfSubSpeciality , setNumberOfSubSpeciality] = useState(0)
  const [organizationCount , setOrganizationCount] = useState(0)
  const dispatch  =  useDispatch()
  const countOrganizations = (data) => {
    // Check if data is defined and is an array
    if (!Array.isArray(data)) {
      console.error('Data is not an array:', data);
      return; // Exit the function if data is not an array
    }
  
    const uniqueOrganizations = new Set(data.map(item => item.organizationName));
    setOrganizationCount(uniqueOrganizations.size);
  }
  const specialize =["الاتصالات و تقنية المعلومات",
    "إدارة الأعمال",
    "الهندسة",
    "الموارد البشرية",
    "المحاسبة والإدارة المالية",
    "المشتريات وسلاسل الإمداد",
    "العلوم",
    "العلوم الصحية",
    "التأمين وإدارة المخاطر",
    "الصحة والسلامة المهنية",
    "التصميم",
    "الإرشاد المهني",
    "الزراعة وعلوم الأغذية",
    "السياحة والفندقة",
    "العلاقات العامة والإعلام",
    "القانون والحوكمة والالتزام",
    "اللغات والترجمة",
    "العلوم الاجتماعية",
    "نظم المعلومات الجغرافية",]
  const getAllNeededData = async()=>{
      await dispatch(HandelPutCountOfVisitors(0))
      const res1 = await dispatch(HandelGetAllCertificate())
      countOrganizations(res1.payload.data)
      setNumberOfCertificate(res1.payload.data.length)
      const res2 = await dispatch(HandelGetAllMainSpecialty())
      setNumberOfMainSpeciality(res2.payload.data.length)
      const res3 = await dispatch(HandelGetAllSubSpecialty())
      setNumberOfSubSpeciality(res3.payload.data.length)
      
  }
  const validationSchema = Yup.object({
    fullName: Yup.string().required('الاسم الكامل مطلوب'),
    country: Yup.string().required('الدولة مطلوبة'),
    educationLevel: Yup.string().required('المستوى التعليمي مطلوب'),
    specialization: Yup.string().required('التخصص مطلوب'),
  });
  const sendEmail = async (val)=>{
    console.log(val);
    const res = await dispatch(HandelSendEmailFromHomePage(val))
    console.log(res);
    if(res.payload.success){
      toast.success(res.payload.message)
    }else{
      toast.error(res.payload.data.message)
    }
  }
  const formik = useFormik({
    initialValues: {
      fullName: '',
      country: '',
      educationLevel: '',
      specialization: '',
    },
    validationSchema: validationSchema,
    onSubmit: sendEmail
  });
  const [show,setShow] = useState(false)
  const handleClose = () => setShow(false);

  useEffect(()=>{
    getAllNeededData()
    setShow(true)
  },[])

  return (
    <>
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
      <div className={[style.font, " p-0 m-0"].join(" ")}>
      {/* section 1 */}
      <div className="row p-0 m-0">
        <div className="col-md-5 pe-5 d-flex justify-content-center mt-5 flex-column align-items- pb-lg-5">
          <div className="w-75 mb-4">
            <p className={style.p}>
              منصة اختصاص المنصة الأضخم عربيًا في مجال الشهادات الإحترافية،
              نساعدك على تحقيق أهدافك المهنية من خلال توفير المعلومات والتدريب
              اللازم للحصول على الشهادات الاحترافية في مختلف التخصصات. منصتنا
              مخصصة لدعمك في كل خطوة من رحلتك المهنية، سواء كنت مبتدئًا تبحث عن
              البداية أو محترفًا تسعى لتعزيز مهاراتك وخبراتك.
            </p>
          </div>
          <button
            onClick={()=>navigate('/OurServices')}
            // disabled={!(LoginForm.isValid && LoginForm.dirty)}
            type="button"
            className={[style.submitbutton, "btn mb-5"].join(" ")}
          >
            ابدأ رحلة التعلم
          </button>
        </div>
        <div className="col-md-7 d-none d-lg-block p-0 text-start">
          <div
            className="  p-0 text-start"
            style={{ position: "relative", zIndex: -1, marginTop: "-100px" }}
          >
            <img
              className={[style.imageWidth, "me-auto"].join(" ")}
              src={circle}
              alt="circle"
            />
            <div style={{ position: "absolute", top: "25%", left: "15%" }}>
              <img className={style.imageWidth2} src={cuate} alt="cuate" />
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="mb-5 d-flex justify-content-center flex-column align-items-center">
        <div className="mb-5  text-center">
          <CustomTitle title={"ما يميزنا"} />
        </div>
        <div className="text-center  m-0  p-0 container">
          <CustomHomeDesc
            title={"قاعدة بيانات شاملة"}
            desc={
              "نقدم لك أكبر قاعدة بيانات للتخصصات والشهادات الاحترافية، مصممة خصيصًا لمساعدتك في تحقيق أهدافك المهنية. سواء كنت مبتدئًا تستعد لدخول سوق العمل أو محترفًا تسعى لتعزيز مهاراتك، نحن هنا لدعمك في كل خطوة من رحلتك."
            }
            img={image1}
            dir={"L"}
          />
          <div >
          <img className={style.customheigth}  src={sep1} alt="sep1" />

          </div>
          <CustomHomeDesc
            title={"نوفر وقتك وجهدك"}
            desc={
              "بفضل قاعدة بياناتنا الثرية نوفر الوقت والجهد للباحثين عن عمل وللمهنين في البحث عن افضل الشهادات الاحترافية. "
            }
            img={image2}
            dir={"R"}
          />
          <img className={style.customheigth} src={sep2} alt="sep1" />

          <CustomHomeDesc
            title={"خدمات الإرشاد المهني"}
            desc={
              "نقدم لك أكبر قاعدة بيانات للتخصصات والشهادات الاحترافية، مصممة خصيصًا لمساعدتك في تحقيق أهدافك المهنية. سواء كنت مبتدئًا تستعد لدخول سوق العمل أو محترفًا تسعى لتعزيز مهاراتك، نحن هنا لدعمك في كل خطوة من رحلتك."
            }
            img={image3}
            dir={"L"}
          />
          <img className={style.customheigth} src={sep3} alt="sep1" />

          <CustomHomeDesc
            title={"المنظمات التدريبية"}
            desc={
              "نوفر لك أكبر تجمع للمنظمات التدريبية للإستفادة من خدماتهم ودوراتهم التدريبية."
            }
            img={image4}
            dir={"R"}
          />
          <img className={style.customheigth} src={sep1} alt="sep1" />

          <CustomHomeDesc
            title={"سهولة الوصول للمعلومات"}
            desc={
              "بتصميم جديد سهل وجذاب نوفر لك تجربة ولا أسهل في الوصول لأي معلومة تريدها."
            }
            img={image5}
            dir={"L"}
          />
        </div>
      </div>

      {/* section 3 */}
      <div>
        <div className="text-center mb-5 container">
          <CustomTitle title={" أرقامنا"} />
          <div className="row m-0 gy-3">
            <div className="col-md-3">
              <CustomHomeNumber num={numberOfCertificate?numberOfCertificate:0} text={"عدد الشهادات الاحترافية"} />
            </div>
            <div className="col-md-3">
              <CustomHomeNumber num={numberOfMainSpeciality} text={"عدد التخصصات الرئيسية"} />
            </div>
            <div className="col-md-3">
              <CustomHomeNumber num={numberOfSubSpeciality} text={"عدد التخصصات الفرعية"} />
            </div>
            <div className="col-md-3">
              <CustomHomeNumber num={organizationCount} text={"عدد المنظمات"} />
            </div>
          </div>
        </div>
      </div>     

      {show&&(
       
        <div className={`modal fade ${show ? 'show' : ''}`} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden={!show} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className={["modal-content rounded-5",style2.imageModel].join(' ')} >          <div className="modal-body p-5 pb-0">
            <div className="text-start">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose} />
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="mt-5">
                <div className="text-center">
                  <p style={{ fontSize: '32px', fontWeight: 'bold', color: 'rgba(31, 42, 68, 1)' }}>لنتعرف عليك أكثر</p>
                </div>
                <div className="row m-0 p-0">
                  <div className="col-md-6">
                    <label className="my-3 fw-bold" style={{ color: 'rgba(31, 42, 68, 1)' }}>الاسم الكامل</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      style={{ border: '1px solid rgba(149, 152, 155, 1)' }}
                      id="fullName"
                      name="fullName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.fullName}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <div className="text-danger">{formik.errors.fullName}</div>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <label className="my-3 fw-bold" style={{ color: 'rgba(31, 42, 68, 1)' }}>الدولة</label>
                    <input
                      type="text"
                      className="form-control rounded-0"
                      style={{ border: '1px solid rgba(149, 152, 155, 1)' }}
                      id="country"
                      name="country"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.country}
                    />
                    {formik.touched.country && formik.errors.country ? (
                      <div className="text-danger">{formik.errors.country}</div>
                    ) : null}
                  </div>
                  <div className="my-3">
                    <label htmlFor="educationLevel" className="form-label fw-bold">
                      المستوي التعليمي
                    </label>
                    <select
                      id="educationLevel"
                      name="educationLevel"
                      className="form-select rounded-0"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.educationLevel}
                      style={{ border: '1px solid rgba(149, 152, 155, 1)' }}
                    >
                      <option value="">اختر المستوى التعليمي</option>
                      <option value="المرحلة الثانوية">المرحلة الثانوية</option>
                      <option value="مرحلة الدبلوم">مرحلة الدبلوم</option>
                      <option value="مرحلة البكالوريوس"> مرحلة البكالوريوس</option>
                      <option value="مرحلة الماجستير" >مرحلة الماجستير</option>
                      <option value="مرحلة الدكتوراه">مرحلة الدكتوراه</option>

                    </select>
                    {formik.touched.educationLevel && formik.errors.educationLevel ? (
                      <div className="text-danger">{formik.errors.educationLevel}</div>
                    ) : null}
                  </div>
                  <div className="my-3">
                    <label htmlFor="specialization" className="form-label fw-bold">
                      التخصص
                    </label>
                    <select
                      type="text"
                      className="form-select rounded-0"
                      style={{ border: '1px solid rgba(149, 152, 155, 1)' }}
                      id="specialization"
                      name="specialization"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.specialization}
                    >
                      <option value="">اختر التخصص  </option>
                      {specialize.map((el)=>{
                        return(
                          <option value={el}>{el}</option>
                        )
                      })}
                    </select>
                    {formik.touched.specialization && formik.errors.specialization ? (
                      <div className="text-danger">{formik.errors.specialization}</div>
                    ) : null}
                  </div>
                  <div className="text-center mt-5">
                    <button
                      type="submit"
                      className="py-3 text-white btn px-5 mb-5"
                      style={{ backgroundColor: 'rgba(31, 42, 68, 1)', width: 'auto' }}
                    >
                      تأكيد
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

      )}
      
    </div>
    </>
  );
};

export default HomePage;
