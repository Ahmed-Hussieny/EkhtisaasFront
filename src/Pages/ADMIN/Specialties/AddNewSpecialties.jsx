import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import style from '../../../Assents/Style/search.module.css';
import uploadImage from '../../../Assents/Images/ADMIN/Specialties/Upload_light.svg';
import { useDispatch } from 'react-redux';
import { HandelAddMainSpecialty } from '../../../store/SpecialtiesSlice';

const AddNewSpecialties = () => {
  const fileInputRef = useRef(null);
  let [loading, setLoading] = useState(false);
  const [ErrorMessage , setErrorMessage] = useState("")
  const [AlertType,setAlertType]=useState("alert-danger")
  const validationSchema = Yup.object({
    Title: Yup.string().required('اسم التخصص مطلوب'),
    Description: Yup.string().required('نبذة عن التخصص مطلوبة'),
    Type: Yup.string().required('نوع التخصص مطلوب'),
    Image: Yup.mixed().required('صورة التخصص مطلوبة'),
  });

  const AddNewSpecialtiesForm = useFormik({
    initialValues: {
      Title: '',
      Description: '',
      Type: '',
      Image: null,
    },
    validationSchema,
    onSubmit: AddMainSpecialty 
  });

  const dispatch = useDispatch();

  async function AddMainSpecialty(val) {
    setLoading(true);
    const formData = new FormData();
    formData.append('Title', val.Title);
    formData.append('Description', val.Description);
    formData.append('Type', val.Type);
    formData.append('Image', val.Image);

    const res = await dispatch(HandelAddMainSpecialty(formData));
    console.log(res);
    if(res.payload.success === true){
      setAlertType("alert-success")
      setErrorMessage(res.payload.message)
    }else{
      setAlertType("alert-danger")
      setErrorMessage(res.payload.data.message)
    }
    
    setLoading(false);
  }

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      AddNewSpecialtiesForm.setFieldValue('Image', file);
    }
  };

  return (
    <div className={[style.font, "px-4"].join(" ")}>
      <div className='container mt-4'>
      <div className='text-center'>
      {ErrorMessage?
        <div className={`${AlertType} alert`}>
        <p>{ErrorMessage}</p>
        </div>
      :""}
        
      </div>
        <p style={{ fontSize: '20px',fontWeight:'bold' }}>إضافة تخصص رئيسي</p>
      </div>
      <div className='container'>
        <div style={{ backgroundColor: 'rgba(247, 247, 247, 1)' }} className='rounded-3 p-4 pb-2'>
          <form onSubmit={AddNewSpecialtiesForm.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Title" className="form-label fw-bold mb-3">اسم التخصص</label>
              <input
                type="text"
                className={[style.input, "form-control bg-white border-0 py-2 text-secondary"].join(" ")}
                id="Title"
                name="Title"
                onChange={AddNewSpecialtiesForm.handleChange}
                onBlur={AddNewSpecialtiesForm.handleBlur}
                value={AddNewSpecialtiesForm.values.Title}
              />
              {AddNewSpecialtiesForm.touched.Title && AddNewSpecialtiesForm.errors.Title ? (
                <div className="alert py-1 alert-danger">
                  <p>{AddNewSpecialtiesForm.errors.Title}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="Description" className="form-label fw-bold mb-3">نبذة عن التخصص</label>
              <textarea
                className={[style.input, "form-control bg-white border-0 py-2 text-secondary"].join(" ")}
                id="Description"
                name="Description"
                rows={5}
                onChange={AddNewSpecialtiesForm.handleChange}
                onBlur={AddNewSpecialtiesForm.handleBlur}
                value={AddNewSpecialtiesForm.values.Description}
              />
              {AddNewSpecialtiesForm.touched.Description && AddNewSpecialtiesForm.errors.Description ? (
                <div className="alert py-1 alert-danger">
                  <p>{AddNewSpecialtiesForm.errors.Description}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <label htmlFor="Type" className="form-label fw-bold mb-3">نوع التخصص</label>
              <select
                className={[style.input, "form-control bg-white border-0 py-2 text-secondary"].join(" ")}
                id="Type"
                name="Type"
                onChange={AddNewSpecialtiesForm.handleChange}
                onBlur={AddNewSpecialtiesForm.handleBlur}
                value={AddNewSpecialtiesForm.values.Type}
              >
                <option value="" label="اختر نوع التخصص" />
                <option value="علمي" label="علمي" />
                <option value="إنساني وأدبي" label="إنساني وأدبي" />
                <option value="إداري" label="إداري" />
                <option value="صحي" label="صحي" />
              </select>
              {AddNewSpecialtiesForm.touched.Type && AddNewSpecialtiesForm.errors.Type ? (
                <div className="alert py-1 alert-danger">
                  <p>{AddNewSpecialtiesForm.errors.Type}</p>
                </div>
              ) : null}
            </div>

            <div>
              <input
                type="file"
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
                <span>أضف صورة معبرة عن التخصص</span>
              </p>
              {AddNewSpecialtiesForm.touched.Image && AddNewSpecialtiesForm.errors.Image ? (
                <div className="alert py-1 alert-danger">
                  <p>{AddNewSpecialtiesForm.errors.Image}</p>
                </div>
              ) : null}
            </div>

            <div className='text-start'>
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
                  disabled={!(AddNewSpecialtiesForm.isValid && AddNewSpecialtiesForm.dirty)}
                  type="submit"
                  style={{backgroundColor:'rgb(31, 42, 68)',color:'white'}}
                  className={[style.submitbutton, "btn px-lg-5 py-2"].join(" ")}
                >إضافة التخصص
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewSpecialties;
