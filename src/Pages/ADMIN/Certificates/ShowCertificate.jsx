import React, { useEffect, useState } from 'react';
import { useFormik, FieldArray, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { Button, Modal } from 'react-bootstrap';
import uploadImage from '../../../Assents/Images/ADMIN/Specialties/Upload_light.svg';
import urlIcon from '../../../Assents/Images/ADMIN/Certificate/link_light.png';
import deleteIcon from '../../../Assents/Images/ADMIN/Certificate/Trash_duotone.png';

import style from '../../../Assents/Style/Auth.module.css';
import { useDispatch } from 'react-redux';
import { HandelAddDirectEducation, HandelAddSelfEducation, HandelAddSupportSide, HandelDeleteCertificate, HandelDeleteDirectEducation, HandelDeleteSelfEducation, HandelDeleteSupportSide, HandelGetSingleCertificate, HandelUpdateCertificate, HandelUpdateDirectEducation, HandelUpdateSelfEducation, HandelUpdateSupportSide } from '../../../store/CertificateSlice';
import { HandelGetAllSubSpecialty } from '../../../store/SpecialtiesSlice';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const ShowCertificate = () => {
  const {id}= useParams()
  const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [link, setLink] = useState('');
    const [loading,setloading]=useState(false)
    const [currentFieldIndex, setCurrentFieldIndex] = useState(null);
    const handleShow = (index) => {
        setCurrentFieldIndex(index);
        setShow(true);
    };
    const handleClose = () => setShow(false);
    const handleSaveLink = (setFieldValue) => {
        setFieldValue(`selfEducation[${currentFieldIndex}].selfEducationURL`, link);
        setShow(false);
        setLink('');
    };


    const [show2, setShow2] = useState(false);
    const [link2, setLink2] = useState('');
    const [currentFieldIndex2, setCurrentFieldIndex2] = useState(null);
    const handleShow2 = (index) => {
        setCurrentFieldIndex2(index);
        setShow2(true);
    };
    const handleClose2 = () => setShow2(false);
    const handleSaveLink2 = (setFieldValue) => {
        setFieldValue(`directEducation[${currentFieldIndex2}].directEducationURL`, link2);
        setShow2(false);
        setLink2('');
    };

    const [show3, setShow3] = useState(false);
    const [link3, setLink3] = useState('');
    const [currentFieldIndex3, setCurrentFieldIndex3] = useState(null);
    const handleShow3 = (index) => {
        setCurrentFieldIndex3(index);
        setShow3(true);
    };
    const handleClose3 = () => setShow3(false);
    const handleSaveLink3 = (setFieldValue) => {
        setFieldValue(`supportSide[${currentFieldIndex3}].supportSideUrl`, link3);
        setShow3(false);
        setLink3('');
    };
    const [previews, setPreviews] = useState({ selfEducation: [], directEducation: [], supportSide: [] });

    const handleImageChangeImages = (event, field, index, type) => {
      const file = event.target.files[0];
      formik.setFieldValue(`${field}[${index}].Image`, file);
  
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews((prev) => {
            const newPreviews = { ...prev };
            newPreviews[type][index] = reader.result;
            return newPreviews;
          });
        };
        reader.readAsDataURL(file);
      } else {
        setPreviews((prev) => {
          const newPreviews = { ...prev };
          newPreviews[type][index] = null;
          return newPreviews;
        });
      }
    };
    const formik = useFormik({
        initialValues: {
            certificateImage: null,
            certificateName: '',
            organizationImage: null,
            organizationName: '',
            Description: '',
            Specialties: '',
            JobTitle: '',
            Prerequisites: '',

            scientificMethods: '',
            SupportedLanguages: '',
            NumberOfTests: '',

            CertificateValidityPeriod: '',

            selfEducation: [{ id:'',selfEducationTitle: '', Image: null, selfEducationURL: '' }],
            directEducation: [{ id:'',directEducationTitle: '', Image: null, directEducationURL: '' }],
            supportSide: [{ supportSideUrl:'', id:'',supportSideTitle: '', Image: null}],
            trainingCost:'',
            testCost:'',
            totalCost:'',
            SubSpecialtyId:'',
            Level:''
        },
        validationSchema: Yup.object({
            certificateName: Yup.string().required('هذا الحقل مطلوب'),
            certificateImage: Yup.mixed().required('هذا الحقل مطلوب'),
            organizationName: Yup.string().required('هذا الحقل مطلوب'),
            organizationImage: Yup.mixed().required('هذا الحقل مطلوب'),
            Description: Yup.string().required('هذا الحقل مطلوب'),
            Specialties: Yup.string().required('هذا الحقل مطلوب'),
            JobTitle: Yup.string().required('هذا الحقل مطلوب'),
            Prerequisites: Yup.string().required('هذا الحقل مطلوب'),
            scientificMethods: Yup.string().required('هذا الحقل مطلوب'),
            SupportedLanguages: Yup.string().required('هذا الحقل مطلوب'),
            NumberOfTests: Yup.string().required('هذا الحقل مطلوب'),
            CertificateValidityPeriod: Yup.string().required('هذا الحقل مطلوب'),

            selfEducation: Yup.array().of(
                Yup.object().shape({
                    selfEducationTitle: Yup.string().required('هذا الحقل مطلوب'),
                    Image: Yup.mixed().required('هذا الحقل مطلوب'),
                    selfEducationURL: Yup.string().url('Invalid URL'),
                })
            ),
            directEducation: Yup.array().of(
                Yup.object().shape({
                    directEducationTitle: Yup.string().required('هذا الحقل مطلوب'),
                    Image: Yup.mixed().required('هذا الحقل مطلوب'),
                    directEducationURL: Yup.string().url('Invalid URL'),
                })
            ),
            supportSide: Yup.array().of(
                Yup.object().shape({
                    supportSideTitle: Yup.string().required('هذا الحقل مطلوب'),
                    supportSideUrl:Yup.string().url('Invalid URL'),
                    Image: Yup.mixed().required('هذا الحقل مطلوب'),
                })
            ),
            trainingCost: Yup.number().required('هذا الحقل مطلوب'),
            testCost:Yup.number().required('هذا الحقل مطلوب'),
            totalCost:Yup.number().required('هذا الحقل مطلوب'),
            SubSpecialtyId:Yup.string().required('هذا الحقل مطلوب'),
            Level:Yup.string().required('هذا الحقل مطلوب'),
        }),
        onSubmit: AddCertificate
    });
    const dispatch = useDispatch()
    async function AddCertificate (values){
      setloading(true)
        console.log(values);
        const formData = new FormData();
        // ^ ================ Data For Certificate ===========================

        formData.append('certificateImage', values.certificateImage);
        formData.append('certificateName', values.certificateName);
        formData.append('organizationImage', values.organizationImage);
        formData.append('organizationName', values.organizationName);
        formData.append('Description', values.Description);
        formData.append('Specialties', values.Specialties);
        formData.append('JobTitle', values.JobTitle);
        formData.append('Prerequisites', values.Prerequisites);
        formData.append('scientificMethods', values.scientificMethods);
        formData.append('SupportedLanguages', values.SupportedLanguages);
        formData.append('NumberOfTests', values.NumberOfTests);
        formData.append('CertificateValidityPeriod', values.CertificateValidityPeriod);
        formData.append('trainingCost', values.trainingCost);
        formData.append('testCost', values.testCost);
        formData.append('totalCost', values.totalCost);
        formData.append('SubSpecialtyId',values.SubSpecialtyId)
        formData.append('Level',values.Level)
        const res = await dispatch(HandelUpdateCertificate({formData,id}))
        console.log(res.payload);
        const GlobalCertificateId=res.payload.data._id
        //^========================== Data For selfEducation  ===================
        console.log(values.selfEducation);
        // if(id){
            for (const item of values.selfEducation) {

                const formData = new FormData();
                formData.append("selfEducationTitle",item.selfEducationTitle)
                formData.append("selfEducationURL",item.selfEducationURL)
                formData.append("Image",item.Image)
                let res = {}
                if(item.id){
                  res = await dispatch(HandelUpdateSelfEducation({formData,id:item.id}))
                }else{
                  res = await dispatch(HandelAddSelfEducation({ formData, id:GlobalCertificateId }));
                }
                console.log(res.payload.data)
                
            }
    
            for (const item of values.directEducation) {
    
                const formData = new FormData();
                formData.append("directEducationTitle",item.directEducationTitle)
                formData.append("directEducationURL",item.directEducationURL)
                formData.append("Image",item.Image)
                let res = {}
                if(item.id){
                  res = await dispatch(HandelUpdateDirectEducation({formData,id:item.id}))
                }else{
                  res = await dispatch(HandelAddDirectEducation({ formData, id:GlobalCertificateId }));
                }
                console.log(res.payload.data)
            }
            // console.log(values.directEducation);
            for (const item of values.supportSide) {
    
                const formData = new FormData();
                formData.append("supportSideTitle",item.supportSideTitle)
                formData.append("supportSideUrl", item.supportSideUrl);
                formData.append("Image",item.Image)
                let res = {}
                if(item.id){
                  res = await dispatch(HandelUpdateSupportSide({formData,id:item.id}))
                }else{
                  res = await dispatch(HandelAddSupportSide({ formData, id:GlobalCertificateId }));
                }
                console.log(res.payload.data)
            }
        // }
        console.log(values.supportSide);
        setloading(false)
        
    }

    // Image One
    const [preview, setPreview] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue('certificateImage', file);
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setPreview(null);
        }
      };
    // Image Two
    const [preview2, setPreview2] = useState(null);
    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        formik.setFieldValue('organizationImage', file);
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview2(reader.result);
          };
          reader.readAsDataURL(file);
        } else {
          setPreview2(null);
        }
      };
    //& get All Sub Specialty
    const [subSpecialty,setAllSubSpecialty] = useState([])
    const getAllSpecialty = async ()=>{
        const res = await dispatch(HandelGetAllSubSpecialty())
        setAllSubSpecialty(res.payload.data)
    }
    const [SubSpecialtyID,setSubSpecialtyID]=useState("")
    useEffect(()=>{
      for (const item of subSpecialty) {
        if(item._id === SubSpecialtyID){
          console.log("sssssss");
          setselectedValueSubSpecialty(item.Title)
          formik.setFieldValue('SubSpecialtyId', item._id);

        }
      }
    },[subSpecialty])
    const getCertificate =async()=>{
        const res = await dispatch(HandelGetSingleCertificate(id))
        console.log("res",res.payload);
        
        formik.values.Description = res.payload.data.Description

        setSubSpecialtyID (res.payload.data.SubSpecialtyId)
        
        formik.values.certificateName = res.payload.data.certificateName
        setPreview(res.payload.data.certificateImage.secure_url)
        formik.setFieldValue('certificateImage', res.payload.data.certificateImage);
        formik.setFieldValue('organizationImage', res.payload.data.organizationImage);
        formik.setFieldValue('organizationName', res.payload.data.organizationName);

        setPreview2(res.payload.data.organizationImage.secure_url)
        formik.setFieldValue('Level', res.payload.data.Level);

        setselectedValueLevel(res.payload.data.Level)
        formik.setFieldValue('Specialties', res.payload.data.Specialties);
        formik.setFieldValue('JobTitle', res.payload.data.JobTitle);

        formik.setFieldValue('Prerequisites', res.payload.data.Prerequisites);
        formik.setFieldValue('scientificMethods', res.payload.data.scientificMethods);
        formik.setFieldValue('SupportedLanguages', res.payload.data.SupportedLanguages);
        formik.setFieldValue('NumberOfTests', res.payload.data.NumberOfTests);
        formik.setFieldValue('CertificateValidityPeriod', res.payload.data.CertificateValidityPeriod);
        formik.setFieldValue('trainingCost', res.payload.data.trainingCost);
        formik.setFieldValue('testCost', res.payload.data.testCost);
        formik.setFieldValue('totalCost', res.payload.data.totalCost);

        let tempselfEducations =[]
        let index=0;
        for (const item of res.payload.data.selfEducations) {
          const selfEdu = {
            selfEducationTitle:item.selfEducationTitle,
            Image:item.Image,
            selfEducationURL:item.selfEducationURL,
            id:item._id,
          }
          previews.selfEducation[index] = item.Image.secure_url
          index++;
          tempselfEducations.push(selfEdu)
        }
        formik.setFieldValue('selfEducation', tempselfEducations);


        let tempDrectEducations =[]
        index=0;
        for (const item of res.payload.data.directEducations) {
          const DrectEdu = {
            directEducationTitle:item.directEducationTitle,
            Image:item.Image,
            directEducationURL:item.directEducationURL,
            id:item._id,
          }
          previews.directEducation[index] = item.Image.secure_url
          index++;
          tempDrectEducations.push(DrectEdu)
        }
        formik.setFieldValue('directEducation', tempDrectEducations);



        let tempsupportSides =[]
        index=0;
        for (const item of res.payload.data.supportSides) {
          const DrectEdu = {
            supportSideTitle:item.supportSideTitle,
            Image:item.Image,
            id:item._id,
          }
          previews.supportSide[index] = item.Image.secure_url
          index++;
          tempsupportSides.push(DrectEdu)
        }
        formik.setFieldValue('supportSide', tempsupportSides);
    }
    useEffect(()=>{
        getAllSpecialty()
        getCertificate()
    },[])
    const [selectedValueSubSpecialty, setselectedValueSubSpecialty] = useState("");
    const handleOptionClickSubSpecialty = (id,Title) => {
        setselectedValueSubSpecialty(Title);
        formik.setFieldValue("SubSpecialtyId", id);
        console.log(id);
      };
    const [selectedValueLevel,setselectedValueLevel] = useState("")
    const handleOptionClickType = (Title) => {
        setselectedValueLevel(Title);
        formik.setFieldValue("Level", Title);
      };

      // *********************************** Handel Delete Certificate =======================
      async function HandelDeleteModel  (){
        console.log("ddddddddddddd");
        const res = await dispatch(HandelDeleteCertificate(id))
        console.log(res.payload);

        //^========================== Data For selfEducation  ===================
        // if(id){
            for (const item of formik.values.selfEducation) {
              console.log("222");
                const res = await dispatch(HandelDeleteSelfEducation(item.id))
                console.log(res.payload.data)
                
            }
    
            for (const item of formik.values.directEducation) {
                const res = await dispatch(HandelDeleteDirectEducation(item.id))    
                console.log(res.payload.data)
            }
            for (const item of formik.values.supportSide) {
                const res = await dispatch(HandelDeleteSupportSide(item.id))
                console.log(res.payload.data)
            }
      }

      // & Delete Specific SelfEducation

      const DeleteSelfEducation =async (id)=>{
        const res = await dispatch(HandelDeleteSelfEducation(id))
        console.log(res.payload.data)
        if(res.payload.success){
          toast.success(res.payload.message)
        }else{
          toast.success(res.payload.data.message)
        }
      }
      const DeleteDirectEducation =async (id)=>{
        const res = await dispatch(HandelDeleteDirectEducation(id))
        console.log(res.payload.data)
        if(res.payload.success){
          toast.success(res.payload.message)
        }else{
          toast.success(res.payload.data.message)
        }
      }
      const DeletesupportSide =async (id)=>{
        const res = await dispatch(HandelDeleteSupportSide(id))
        console.log(res.payload.data)
        if(res.payload.success){
          toast.success(res.payload.message)
        }else{
          toast.success(res.payload.data.message)
        }
      }

      
    return (
        <FormikProvider value={formik}>
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
            <div className={style.font}>
            <div className="my-3 px-4">
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
        
        {subSpecialty.map((el)=>{
          return <li><a className={[style.input ,style.smMargine,"dropdown-item", "form-control"].join(" ")} href="#" onClick={() => handleOptionClickSubSpecialty(el._id,el.Title)}>{el.Title}</a></li>
        })}
        </ul>
      </div>
      {formik.touched.SubSpecialtyId && formik.errors.SubSpecialtyId ? (
        <div className="alert py-1 alert-danger ">
          <p>{formik.errors.SubSpecialtyId}</p>
        </div>
      ) : null}
    </div>
                <div className='px-4 mt-2'>
                <div className='d-flex justify-content-between mb-2 align-items-center'>
                <div><p className='fw-bold pt-3' style={{ fontSize: '18px' }}>تفاصيل الشهادة</p></div>

                  <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className=' border bg-white shadow rounded-circle d-flex justify-content-center align-items-center' style={{width:'40px',height:'40px'}}>
                      <img  className='w-75' src={deleteIcon} alt=''/>
                  </div>
                </div>
                    {/* //& Certificate */}
                    <div className='border pb-4 rounded-2'>
                        <div className='px-4 pt-4'>
                            <div className='row gy-3'>
                                <div className='col-md-3'>
                                    <label htmlFor="certificateImage" className="form-label" style={{ fontSize: '18px' }}>صورة الشهادة</label>
           <div className='pe-2  rounded-2' style={{ backgroundColor: 'rgba(247, 247, 247, 1)', height: '60px' }}>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
        id="certificateImage"
      />
      <p style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: '100%' }} onClick={() => document.getElementById('certificateImage').click()}>
        {preview ? (
          <img className='m-auto' src={preview} alt="Selected" style={{ height: '100%', objectFit: 'contain' }} />
        ) : (
          <>
            <img src={uploadImage} alt='uploadImage' style={{ height: '100%', objectFit: 'contain' }} />
            <span style={{ marginLeft: '10px' }}>أضف صورة</span>
          </>
        )}
      </p>
    </div>
                                    
                                    {formik.touched.certificateImage && formik.errors.certificateImage ? (
                                        <div className="alert py-1 alert-danger">{formik.errors.certificateImage}</div>
                                    ) : null}
                                </div>
                                <div className='col-md-9'>
                                    <label htmlFor="certificateName" className="form-label" style={{ fontSize: '18px' }}>اسم الشهادة</label>
                                    <input
                                        type="text"
                                        placeholder='اضف اسم الشهادة'
                                        className="form-control py-3 border-0"
                                        id="certificateName"
                                        style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                        {...formik.getFieldProps('certificateName')}
                                    />
                                    {formik.touched.certificateName && formik.errors.certificateName ? (
                                        <div className="alert py-1 alert-danger">{formik.errors.certificateName}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className='row gy-3'>
                                <div className='col-md-3'>
                                    <label htmlFor="organizationImage" className="form-label" style={{ fontSize: '18px' }}>صورة المنظمة</label>
                                    <div className='pe-2  rounded-2' style={{ backgroundColor: 'rgba(247, 247, 247, 1)', height: '60px' }}>
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange2}
        id="organizationImage"
      />
      <p style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: '100%' }} onClick={() => document.getElementById('organizationImage').click()}>
        {preview2 ? (
          <img className='m-auto' src={preview2} alt="Selected" style={{ height: '100%', objectFit: 'contain' }} />
        ) : (
          <>
            <img src={uploadImage} alt='uploadImage' style={{ height: '100%', objectFit: 'contain' }} />
            <span style={{ marginLeft: '10px' }}>أضف صورة</span>
          </>
        )}
      </p>
    </div>
                                    {formik.touched.organizationImage && formik.errors.organizationImage ? (
                                        <div className="alert py-1 alert-danger">{formik.errors.organizationImage}</div>
                                    ) : null}
                                </div>
                                <div className='col-md-9'>
                                    <label htmlFor="organizationName" className="form-label" style={{ fontSize: '18px' }}>اسم المنظمة</label>
                                    <input
                                        type="text"
                                        placeholder='اضف اسم المنظمة'
                                        className="form-control py-3 border-0"
                                        id="organizationName"
                                        style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                        {...formik.getFieldProps('organizationName')}
                                    />
                                    {formik.touched.organizationName && formik.errors.organizationName ? (
                                        <div className="alert py-1 alert-danger">{formik.errors.organizationName}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        <div className='d-flex p-4 py-2'>
                            <div className='w-100'>
                                <label htmlFor="Description" className="form-label" style={{ fontSize: '18px' }}>نبذة عن الشهادة</label>
                                <textarea
                                    type="text"
                                    placeholder='اكتب نبذة مختصرة عن الشهادة'
                                    className="form-control py-3 border-0"
                                    id="Description"
                                    style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                    {...formik.getFieldProps('Description')}
                                />
                                {formik.touched.Description && formik.errors.Description ? (
                                    <div className="alert py-1 alert-danger">{formik.errors.Description}</div>
                                ) : null}
                            </div>
                        </div>
                        <div className="my-3 px-4">
      <label htmlFor="Level" className="form-label">
       مستوي الشهاده
      </label>
      <div className={[style.dropdown,"dropdown my-0 p-0"].join(" ")} >
        <button
        className={[style.input,style.smMargine,"form-btn  mb-0 dropdown-toggle w-100", "form-control"].join(" ")}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="">{selectedValueLevel || 'اختر مستوي الشهاده'}</span>
          </button>
        <ul className={["dropdown-menu position- w-100 border-0  "].join(" ")}>
        
        <li><a className={[style.input ,style.smMargine,"dropdown-item", "form-control"].join(" ")} href="#" onClick={() => handleOptionClickType("مبتدئ")}>مبتدئ</a></li>
        <li><a className={[style.input ,style.smMargine,"dropdown-item", "form-control"].join(" ")} href="#" onClick={() => handleOptionClickType("متوسط")}>متوسط</a></li>
        <li><a className={[style.input ,style.smMargine,"dropdown-item", "form-control"].join(" ")} href="#" onClick={() => handleOptionClickType("عالي")}>عالي</a></li>

        </ul>
      </div>
      {formik.touched.Level && formik.errors.Level ? (
        <div className="alert py-1 alert-danger ">
          <p>{formik.errors.Level}</p>
        </div>
      ) : null}
    </div>
                    </div>
                    {/* //& Specialties */}
                    <div className='border p-4 mt-4 rounded-2'>
                        <div>
                            <p className="form-label" style={{ fontSize: '18px' }}>التخصصات التي تدعمها الشهادة</p>
                            <input
                                type="text"
                                placeholder='اضف التخصصات المدعومة'
                                className="form-control py-3 border-0"
                                style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                {...formik.getFieldProps('Specialties')}
                            />
                            {formik.touched.Specialties && formik.errors.Specialties ? (
                                <div className="alert py-1 alert-danger">{formik.errors.Specialties}</div>
                            ) : null}
                        </div>
                        <div className='my-3'>
                            <p className="form-label" style={{ fontSize: '18px' }}>المسمي الوظيفي</p>
                            <input
                                type="text"
                                placeholder='اضف المسمي الوظيفي بالعربية والانجليزية'
                                className="form-control py-3 border-0"
                                style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                {...formik.getFieldProps('JobTitle')}
                            />
                            {formik.touched.JobTitle && formik.errors.JobTitle ? (
                                <div className="alert py-1 alert-danger">{formik.errors.JobTitle}</div>
                            ) : null}
                        </div>
                        <div>
                            <p className="form-label" style={{ fontSize: '18px' }}>المتطلبات المسبقة</p>
                            <input
                                type="text"
                                placeholder='اضف المتطلبات المسبقة لهذه الشهادة'
                                className="form-control py-3 border-0"
                                style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                {...formik.getFieldProps('Prerequisites')}
                            />
                            {formik.touched.Prerequisites && formik.errors.Prerequisites ? (
                                <div className="alert py-1 alert-danger">{formik.errors.Prerequisites}</div>
                            ) : null}
                        </div>
                        <div className='my-3'>
                            <p className="form-label" style={{ fontSize: '18px' }}>المنهج العلمي</p>
                            <textarea
                                type="text"
                                placeholder='اكتب المنهج العلمي والمحتوي الموجود للشهادة'
                                className="form-control py-3 border-0"
                                style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                {...formik.getFieldProps('scientificMethods')}
                            />
                            {formik.touched.scientificMethods && formik.errors.scientificMethods ? (
                                <div className="alert py-1 alert-danger">{formik.errors.scientificMethods}</div>
                            ) : null}
                        </div>
                        <div>
                            <p className="form-label" style={{ fontSize: '18px' }}>اللغات المدعومة</p>
                            <input
                                type="text"
                                placeholder='الإنجليزية، الألمانية، الفرنسية'
                                className="form-control py-3 border-0"
                                style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                {...formik.getFieldProps('SupportedLanguages')}
                            />
                            {formik.touched.SupportedLanguages && formik.errors.SupportedLanguages ? (
                                <div className="alert py-1 alert-danger">{formik.errors.SupportedLanguages}</div>
                            ) : null}
                        </div>
                    </div>
                    {/* //& Training */}
                    <div className='border p-4 mt-4 rounded-2'>
      <div className='row gy-3'>
        <div className='col-md-6'>
          <p className="form-label" style={{ fontSize: '18px' }}>عدد الاختبارات</p>
          <input
            type="text"
            placeholder='7'
            className="form-control py-3 border-0"
            style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
            {...formik.getFieldProps('NumberOfTests')}
          />
          {formik.touched.NumberOfTests && formik.errors.NumberOfTests ? (
            <div className="alert py-1 alert-danger">{formik.errors.NumberOfTests}</div>
          ) : null}
        </div>
        <div className='col-md-6'>
          <p className="form-label" style={{ fontSize: '18px' }}>مدة صلاحية الشهادة</p>
          <input
            type="text"
            placeholder='4 سنوات'
            className="form-control py-3 border-0"
            style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
            {...formik.getFieldProps('CertificateValidityPeriod')}
          />
          {formik.touched.CertificateValidityPeriod && formik.errors.CertificateValidityPeriod ? (
            <div className="alert py-1 alert-danger">{formik.errors.CertificateValidityPeriod}</div>
          ) : null}
        </div>
      </div>

      <div className='my-4'>
        <p style={{ fontSize: '18px' }}>جهات التدريب</p>
      </div>
      <label className="form-label fw-bold" style={{ fontSize: '15px' }}>تعليم ذاتي</label>

      <FieldArray name="selfEducation">
  {({ remove, push }) => (
    <>
      {formik.values.selfEducation.map((field, index) => (
        <div key={index} className='row gy-3'>
          <div className='col-md-3'>
            <div className='pe-2 rounded-2 mb-1' style={{ backgroundColor: 'rgba(247, 247, 247, 1)', height: '60px' }}>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => handleImageChangeImages(event, 'selfEducation', index, 'selfEducation')}
                id={`trainingFieldFile-${index}`}
              />
              <p style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: '100%' }} onClick={() => document.getElementById(`trainingFieldFile-${index}`).click()}>
                {previews.selfEducation[index] ? (
                  <img className='m-auto' src={previews.selfEducation[index]} alt="Selected" style={{ height: '100%', objectFit: 'contain' }} />
                ) : (
                  <>
                    <img src={uploadImage} className='ms-2 mt-3' alt='uploadImage' style={{ height: '100%', objectFit: 'contain' }} />
                    <span>أضف صورة</span>
                  </>
                )}
              </p>
            </div>
            {formik.touched.selfEducation?.[index]?.Image && formik.errors.selfEducation?.[index]?.Image ? (
              <div className="alert py-1 alert-danger">{formik.errors.selfEducation[index].Image}</div>
            ) : null}
          </div>
          <div className='col-md-9'>
            <div className='d-flex px-3 rounded-3' style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}>
              <input
                type="text"
                placeholder='أضف اسم الجهة'
                className="form-control py-3 border-0"
                id={`trainingFieldName-${index}`}
                style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                {...formik.getFieldProps(`selfEducation[${index}].selfEducationTitle`)}
              />
              <div>
                <img src={urlIcon} alt='' onClick={() => handleShow(index)} style={{ cursor: 'pointer' }} />
              </div>
              <button
                type="button"
                onClick={() => {remove(index)
                        DeleteSelfEducation(formik.values.selfEducation[index].id)
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'red',
                  cursor: 'pointer',
                  marginLeft: '10px'
                }}
              >
                حذف
              </button>
            </div>
            {formik.touched.selfEducation?.[index]?.selfEducationTitle && formik.errors.selfEducation?.[index]?.selfEducationTitle ? (
              <div className="alert py-1 alert-danger">{formik.errors.selfEducation[index].selfEducationTitle}</div>
            ) : null}
          </div>
        </div>
      ))}
      <div>
        <p style={{ cursor: 'pointer', color: 'black' }} onClick={() => push({ selfEducationTitle: '', Image: null, selfEducationURL: '' })}>
          + أضف جهة تدريب جديدة
        </p>
      </div>
    </>
  )}
</FieldArray>
      <label className="form-label fw-bold" style={{ fontSize: '15px' }}>تعليم مباشر</label>

      <FieldArray name="directEducation">
  {({ remove, push }) => (
    <>
      {formik.values.directEducation.map((field, index) => (
        <div key={index} className='row gy-3'>
          <div className='col-md-3'>
            <div className='pe-2 rounded-2 mb-1' style={{ backgroundColor: 'rgba(247, 247, 247, 1)', height: '60px' }}>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => handleImageChangeImages(event, 'directEducation', index, 'directEducation')}
                id={`trainingFieldFile2-${index}`}
              />
              <p style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: '100%' }} onClick={() => document.getElementById(`trainingFieldFile2-${index}`).click()}>
                {previews.directEducation[index] ? (
                  <img className='m-auto' src={previews.directEducation[index]} alt="Selected" style={{ height: '100%', objectFit: 'contain' }} />
                ) : (
                  <>
                    <img src={uploadImage} className='ms-2 mt-3' alt='uploadImage' style={{ height: '100%', objectFit: 'contain' }} />
                    <span>أضف صورة</span>
                  </>
                )}
              </p>
            </div>
            {formik.touched.directEducation?.[index]?.Image && formik.errors.directEducation?.[index]?.Image ? (
              <div className="alert py-1 alert-danger">{formik.errors.directEducation[index].Image}</div>
            ) : null}
          </div>
          <div className='col-md-9'>
            <div className='d-flex px-3 rounded-3' style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}>
              <input
                type="text"
                placeholder='أضف اسم الجهة'
                className="form-control py-3 border-0"
                id={`trainingFieldName2-${index}`}
                style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                {...formik.getFieldProps(`directEducation[${index}].directEducationTitle`)}
              />
              <div>
                <img src={urlIcon} alt='' onClick={() => handleShow2(index)} style={{ cursor: 'pointer' }} />
              </div>
              <button
                type="button"
                onClick={() => {remove(index)
                  DeleteDirectEducation(formik.values.directEducation[index].id)}}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'red',
                  cursor: 'pointer',
                  marginLeft: '10px'
                }}
              >
                حذف
              </button>
            </div>
            {formik.touched.directEducation?.[index]?.directEducationTitle && formik.errors.directEducation?.[index]?.directEducationTitle ? (
              <div className="alert py-1 alert-danger">{formik.errors.directEducation[index].directEducationTitle}</div>
            ) : null}
          </div>
        </div>
      ))}
      <div>
        <p style={{ cursor: 'pointer', color: 'black' }} onClick={() => push({ directEducationTitle: '', Image: null, directEducationURL: '' })}>
          + أضف جهة تدريب جديدة
        </p>
      </div>
    </>
  )}
</FieldArray>
    </div>
                     {/* //& Support */}
                     <div className='border p-4 mt-4 rounded-2'>
                    <p style={{ fontSize: '18px' }}> جهة الدعم</p>

                    <FieldArray name="supportSide">
  {({ remove, push }) => (
    <>
      {formik.values.supportSide.map((field, index) => (
        <div key={index} className='row gy-3'>
          <div className='col-md-3'>
            <div className='pe-2 rounded-2 mb-1' style={{ backgroundColor: 'rgba(247, 247, 247, 1)', height: '60px' }}>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(event) => handleImageChangeImages(event, 'supportSide', index, 'supportSide')}
                id={`trainingFieldFile3-${index}`}
              />
              <p style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: '100%' }} onClick={() => document.getElementById(`trainingFieldFile3-${index}`).click()}>
                {previews.supportSide[index] ? (
                  <img src={previews.supportSide[index]} alt="Selected" className='m-auto' style={{ height: '100%', objectFit: 'contain' }} />
                ) : (
                  <>
                    <img src={uploadImage} className='ms-2 mt-3' alt='uploadImage' style={{ height: '100%', objectFit: 'contain' }} />
                    <span>أضف صورة</span>
                  </>
                )}
              </p>
            </div>
            {formik.touched.supportSide?.[index]?.Image && formik.errors.supportSide?.[index]?.Image ? (
              <div className="alert py-1 alert-danger">{formik.errors.supportSide[index].Image}</div>
            ) : null}
          </div>
          <div className='col-md-9'>
            <div className='d-flex px-3 mb-2 rounded-3' style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}>
              <input
                type="text"
                placeholder='برنامج النخبة'
                className="form-control py-3 border-0"
                id={`trainingFieldName-${index}`}
                style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                {...formik.getFieldProps(`supportSide[${index}].supportSideTitle`)}
              />            <img src={urlIcon} alt='' onClick={() => handleShow3(index)} style={{ cursor: 'pointer' }} />

              <button
                type="button"
                onClick={() => {remove(index)
                  DeletesupportSide(formik.values.supportSide[index].id)}}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'red',
                  cursor: 'pointer',
                  marginLeft: '10px'
                }}
              >
                حذف
              </button>
            </div>
            {formik.touched.supportSide?.[index]?.supportSideTitle && formik.errors.supportSide?.[index]?.supportSideTitle ? (
              <div className="alert py-1 alert-danger">{formik.errors.supportSide[index].supportSideTitle}</div>
            ) : null}

            {formik.touched.supportSide?.[index]?.supportSideUrl && formik.errors.supportSide?.[index]?.supportSideUrl ? (
              <div className="alert py-1 alert-danger">{formik.errors.supportSide[index].supportSideUrl}</div>
            ) : null}
          </div>
        </div>
      ))}
      <div>
        <p style={{ cursor: 'pointer', color: 'black' }} onClick={() => push({ supportSideTitle: '', Image: null, supportSideUrl: '' })}>
          + أضف جهة دعم جديدة
        </p>
      </div>
    </>
  )}
</FieldArray>

                    </div>
                    
                    {/* //& For Cost */}
                    <div className='border p-4 my-4 mb-5 rounded-2'>
                        <p style={{ fontSize: '18px' }}>  التكلفة</p>
                        <div className='row gy-3'>
                            <div className='col-md-3'>
                                <div className='d-flex justify-content-center align-items-center p-3 rounded-3' style={{backgroundColor:'rgba(247, 247, 247, 1)'}}>
                                    <p className='p-0 m-0'>التدريب</p>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                    <input
                                        type="text"
                                        placeholder='0:00  ريال سعودي'
                                        className="form-control py-3 border-0 mb-3"
                                        id="trainingCost"
                                        style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                        {...formik.getFieldProps('trainingCost')}
                                    />
                                    {formik.touched.trainingCost && formik.errors.trainingCost ? (
                                        <div className="alert py-1 alert-danger">{formik.errors.trainingCost}</div>
                                    ) : null}
                                </div>

                           
                        </div>
                        <div className='row gy-3 my-2'>
                            <div className='col-md-3'>
                                <div className='d-flex justify-content-center align-items-center p-3 rounded-3' style={{backgroundColor:'rgba(247, 247, 247, 1)'}}>
                                    <p className='p-0 m-0'>الاختبار</p>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                    <input
                                        type="text"
                                        placeholder='0:00  ريال سعودي'
                                        className="form-control py-3 border-0 mb-3"
                                        id="testCost"
                                        style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                        {...formik.getFieldProps('testCost')}
                                    />
                                    {formik.touched.testCost && formik.errors.testCost ? (
                                        <div className="alert py-1 alert-danger">{formik.errors.testCost}</div>
                                    ) : null}
                                </div>
                           
                        </div>
                        <div className='row gy-3'>
                            <div className='col-md-3'>
                                <div className='d-flex justify-content-center align-items-center p-3 rounded-3' style={{backgroundColor:'rgba(247, 247, 247, 1)'}}>
                                    <p className='p-0 m-0'>الاجمالي</p>
                                </div>
                            </div>
                            <div className='col-md-9'>
                                    <input
                                        type="text"
                                        placeholder='0:00  ريال سعودي'
                                        className="form-control py-3 border-0 mb-3"
                                        id="totalCost"
                                        style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }}
                                        {...formik.getFieldProps('totalCost')}
                                    />
                                    {formik.touched.totalCost && formik.errors.totalCost ? (
                                        <div className="alert py-1 alert-danger">{formik.errors.totalCost}</div>
                                    ) : null}
                                </div>
                            
                          
                        </div>
                    </div>

                    {/* //& Actions */}
                    
                    <div className='mb-5'>
                        <div className='row'>
                            <div className='col-md-6'></div>
                            <div className='col-md-6'>
                                <div className='row'>
                                <div className='col-md-6'>
                                {loading ?(
                                    <button type="button" className='btn text-white rounded-2 py-3 mt-1 w-100' style={{ backgroundColor: 'rgba(40, 42, 68, 1)' }}>
                                    <i className="fa-solid fa-spinner fa-spin"></i>
                                                </button>
                                ):(
                                      <button disabled={loading}  onClick={formik.handleSubmit} type="submit" className='btn text-white rounded-2 py-3 mt-1 w-100' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>
                                      حفظ التغييرات            </button>
                                )}
                              
                                </div>
                                <div className='col-md-6'>
                                <button onClick={()=>navigate(-1)} type="button" className='btn text-dark rounded-2 py-3 mt-1 w-100' style={{ borderColor: 'rgba(31, 42, 68, 1)' }}>
                                الغاء
            </button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton style={{direction:'ltr'}}>
                        <Modal.Title>Insert Link</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter link here"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{backgroundColor:'rgba(31, 42, 68, 1)'}} className='w-100' onClick={() => handleSaveLink(formik.setFieldValue)}>
                            Save Link
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton style={{direction:'ltr'}}>
                        <Modal.Title>Insert Link</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter link here"
                            value={link2}
                            onChange={(e) => setLink2(e.target.value)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{backgroundColor:'rgba(31, 42, 68, 1)'}} className='w-100' onClick={() => handleSaveLink2(formik.setFieldValue)}>
                            Save Link
                        </Button>
                    </Modal.Footer>
                </Modal>
                
                <Modal show={show3} onHide={handleClose3}>
                    <Modal.Header closeButton style={{direction:'ltr'}}>
                        <Modal.Title>Insert Link</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter link here"
                            value={link3}
                            onChange={(e) => setLink3(e.target.value)}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button style={{backgroundColor:'rgba(31, 42, 68, 1)'}} className='w-100' onClick={() => handleSaveLink3(formik.setFieldValue)}>
                            Save Link
                        </Button>
                    </Modal.Footer>
                </Modal>
                
            </div>
            <div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
        
        <div className="modal-body text-center py-4">
          <p className='pb-4'>هل أنت متأكد من حذف هذا التخصص</p>
          <div >
          <button type="button" className="btn ms-4 w-25 text-white  py-2" style={{backgroundColor:'rgba(5, 201, 60, 1)'}} data-bs-dismiss="modal">تجاهل</button>
          <button onClick={()=>HandelDeleteModel()} type="button" className="btn w-25 text-white px-4 py-2" style={{backgroundColor:'rgba(208, 0, 0, 1)'}} data-bs-dismiss="modal">حذف</button>
        
          </div>
        </div>
        
      </div>

    </div>
  </div>
        </FormikProvider>
    );
};

export default ShowCertificate;
