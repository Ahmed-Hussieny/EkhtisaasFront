import React, { useEffect, useState } from 'react'
import style from '../../../Assents/Style/Auth.module.css'
import * as YUP from 'yup'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { HandelGetAllMainSpecialty, HandelGetSingleMainSpecialty, HandelGetSingleSubSpecialty } from '../../../store/SpecialtiesSlice';
import { useNavigate } from 'react-router-dom';
import CertificateComponent from '../../../Components/ADMIN/Certificate/CertificateComponent';
import EmptyImage from '../../../Assents/Images/ADMIN/Specialties/cuate.svg'
const Certificates = () => {

    const dispatch = useDispatch()
    const [MainSpecialty,setMainSpecialty] = useState([])
    const [SubSpecialty,setSubSpecialty] = useState([])
    const [CertificatesData,setCertificatesData] = useState([])

//& ================== Get All Main===============================
const GetAllMainSpecialty =async()=>{
    const res= await dispatch(HandelGetAllMainSpecialty())
    console.log( res.payload.data);
    setMainSpecialty(res.payload.data)
}
//& ================== select based on Main ===============================
    const validationMainSchema = YUP.object({
        MainSpecialty:YUP.string().required("حقل مطلوب"),
      });
      const CertificatesMainForm = useFormik({
        initialValues: {
            MainSpecialty:""
        },
        validationSchema:validationMainSchema,
      });
      
//& ================== select based on Sub ===============================

      const validationSubSchema = YUP.object({
        SubSpecialty: YUP.string().required("حقل مطلوب"),
      });
      const CertificatesSubForm = useFormik({
        initialValues: {
            SubSpecialty:""
        },
        validationSchema:validationSubSchema,
        onSubmit: HandelSelectedSubCertificates,
      });
      

// & ======================= Handel Selected Values =================================
      //^ For Main ===========
    const [selectedValueMainSpecialty, setselectedValueMainSpecialty] = useState("");
    const handleOptionClickMainSpecialty = (id,Title) => {
        setselectedValueMainSpecialty(Title);
        CertificatesMainForm.setFieldValue("MainSpecialty", Title);
        setselectedValueSubSpecialty("");
        HandelSelectedMainCertificates(id)
      };
      async function HandelSelectedMainCertificates (id){
            const res = await dispatch(HandelGetSingleMainSpecialty(id))
            setSubSpecialty(res.payload.data.SubSpecialtyies)
      }
    //^ For Sub ===========
      const [selectedValueSubSpecialty, setselectedValueSubSpecialty] = useState("");
    const handleOptionClickSubSpecialty = (id,Title) => {
        setselectedValueSubSpecialty(Title);
        CertificatesSubForm.setFieldValue("SubSpecialty", Title);
        console.log(Title);
        HandelSelectedSubCertificates (id)
      };
      
      async function HandelSelectedSubCertificates (id){
        const res = await dispatch(HandelGetSingleSubSpecialty(id))
        setCertificatesData(res.payload.data.Certificates)
        // setCertificates
      }
      useEffect(()=>{
        GetAllMainSpecialty()
      },[])
      const navigate = useNavigate()
  return (
       <div className={[style.font,"m-0 p-0"].join(" ")}>
      <div className='container m-auto justify-content-between mt-3 d-flex align-items-center'>
        <div className=''>
          <p style={{ fontSize: '18px' , fontWeight:'bold' }}>الشهادات الإحترافية</p>
        </div>
        <div className=''>
          <button onClick={()=>navigate('/Admin/AddNewCertificate')} className='btn text-white w-100 rounded-3 mt-1 py-3 px-4' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>+ اضافة شهادة جديدة</button>
        </div>
      </div>
      <div className='mt-2 px-4'>
      <div className="mb-3">
      <label htmlFor="MainSpecialty" className="form-label">
      التخصص الرئيسي
      </label>
      <div className={[style.dropdown,"dropdown my-0 p-0"].join(" ")} >
        <button
        className={[style.input,style.smMargine,"form-btn  mb-0 dropdown-toggle w-100", "form-control"].join(" ")}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="">{selectedValueMainSpecialty || 'اختر  التخصص الرئيسي'}</span>
          </button>
        <ul className={["dropdown-menu position- w-100 border-0  "].join(" ")}>
        {MainSpecialty?.map((el)=>{
          return (
  <li key={el._id}>
    <div
      className={[style.input, style.smMargine, "dropdown-item", "form-control"].join(" ")}
      onClick={(e) => {
        handleOptionClickMainSpecialty(el._id, el.Title);
      }}
    >
      {el.Title}
    </div>
  </li>
);        })}
        </ul>
      </div>
      {CertificatesMainForm.touched.MainSpecialty && CertificatesMainForm.errors.MainSpecialty ? (
        <div className="alert py-1 alert-danger ">
          <p>{CertificatesMainForm.errors.MainSpecialty}</p>
        </div>
      ) : null}
    </div>
    <div className="mb-3">
      <label htmlFor="SubSpecialty" className="form-label">
      التخصص الفرعي
      </label>
      <div className={[style.dropdown,"dropdown my-0 p-0"].join(" ")} >
        <button
        className={[style.input,style.smMargine,"form-btn  mb-0 dropdown-toggle w-100", "form-control"].join(" ")}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="">{selectedValueSubSpecialty || 'اختر  التخصص الفرعي'}</span>
          </button>
        <ul className={["dropdown-menu position- w-100 border-0  "].join(" ")}>
        
        {SubSpecialty?.map((el)=>{
          return (
  <li key={el._id}>
    <div
      className={[style.input, style.smMargine, "dropdown-item", "form-control"].join(" ")}
      onClick={(e) => {
        handleOptionClickSubSpecialty(el._id, el.Title);
      }}
    >
      {el.Title}
    </div>
  </li>
);
        })}
        </ul>
      </div>
      {CertificatesSubForm.touched.SubSpecialty && CertificatesSubForm.errors.SubSpecialty ? (
        <div className="alert py-1 alert-danger ">
          <p>{CertificatesSubForm.errors.SubSpecialty}</p>
        </div>
      ) : null}
    </div>
      </div>

      {/* //^ List Of Certificates */}
      <div className='px-4 mt-4'>
      <p className='fw-bold'>
      الشهادات
      </p>
      {CertificatesData.length>0?
        <div className='row gy-3'>
        {CertificatesData?.map((el)=>{
            return <div className='col-md-4'>
                <CertificateComponent Id={el._id} key={el._id} Title={el.certificateName} Description={el.Description} Level={el.Level} Image={el.certificateImage.secure_url}/>
            </div>
        })}
      </div>:
      <div className='text-center my-5'> 
        <img className='w-75' src={EmptyImage} alt='EmptyImage'/>
        <p>
        اختر التخصصات اولا
        </p>
      </div>
      }
      
      </div>
    </div>
  )
}

export default Certificates
