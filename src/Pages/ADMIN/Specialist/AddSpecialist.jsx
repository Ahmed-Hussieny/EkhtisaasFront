import React, { useState } from "react";
import style from "../../../Assents/Style/Auth.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import uploadImage from "../../../Assents/Images/ADMIN/Specialties/Upload_light.svg";
import icon1 from "../../../Assents/Images/ADMIN/Advisors/Vector (4).svg";
import icon2 from "../../../Assents/Images/ADMIN/Advisors/flowbite_linkedin-solid.svg";
import icon3 from "../../../Assents/Images/ADMIN/Advisors/Vector (5).svg";
import icon4 from "../../../Assents/Images/ADMIN/Advisors/Vector (8).svg";
import icon5 from "../../../Assents/Images/ADMIN/Advisors/Vector (7).svg";
import star from "../../../Assents/Images/ADMIN/Advisors/mdi_star.png";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { HandelAddSpecialist } from "../../../store/SpecialistSlice";
const Star = ({ filled, onClick }) => {
  return (
    <span
      className="star"
      style={{ fontSize: "25px", cursor: "pointer" }}
      onClick={onClick}
    >
      {filled ? "⭐" : "☆"}
    </span>
  );
};
const AddSpecialist = () => {
  const [rating, setRating] = useState(0);
    const navigate = useNavigate()
    const [loading,setloding]=useState(false)
  const handleStarClick = (index) => {
    setRating(index);
    formik.setFieldValue("Rate",index)
    console.log(`Rated: ${index} stars`);
  };
  const formik = useFormik({
    initialValues: {
      Image: null,
      name: "",
      Description: "",
      ExperienceInYears: "",
      experienceDescription: "",

      Services: "",
      PriceOfServices: "",
      Category:"",
      email: "",
      linkedIn: "",
      X: "",
      website: "",
      Rate: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("هذا الحقل مطلوب"),
      Image: Yup.mixed().required("هذا الحقل مطلوب"),
      Description: Yup.string().required("هذا الحقل مطلوب"),
      ExperienceInYears: Yup.string().required("هذا الحقل مطلوب"),
      experienceDescription: Yup.string().required("هذا الحقل مطلوب"),
      Services: Yup.string().required("هذا الحقل مطلوب"),
      PriceOfServices: Yup.string().required("هذا الحقل مطلوب"),
      email: Yup.string(),
      linkedIn: Yup.string().url("Invalid URL"),
      X: Yup.string().url("Invalid URL"),
      website: Yup.string().url("Invalid URL"),
      Rate: Yup.number(),
      Category:Yup.string().required("هذا الحقل مطلوب"),
    }),
    onSubmit: AddSpecialist,
  });
  async function AddSpecialist(val) {
    setloding(true)
    console.log(val);
    const formdata = new FormData()
    formdata.append("name",formik.values.name)
    formdata.append("Image",formik.values.Image)
    formdata.append("Description",formik.values.Description)
    formdata.append("ExperienceInYears",formik.values.ExperienceInYears)
    formdata.append("experienceDescription",formik.values.experienceDescription)
    formdata.append("Services",formik.values.Services)
    formdata.append("PriceOfServices",formik.values.PriceOfServices)
    formdata.append("email",formik.values.email)
    formdata.append("linkedIn",formik.values.linkedIn)
    formdata.append("Category",formik.values.Category)
    formdata.append("X",formik.values.X)
    formdata.append("website",formik.values.website)
    formdata.append("Rate",formik.values.Rate)
    const res = await dispatch(HandelAddSpecialist(formdata))
        console.log(res.payload);
        if(res.payload.success){
            toast.success(res.payload.message)
        }else{
            toast.error(res.payload.data.message)
        }
        setloding(false)
  }
  const dispatch = useDispatch();
  // Image One
  const [preview, setPreview] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    formik.setFieldValue("Image", file);
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


  const [selectedValueCategory,setselectedValueCategory] = useState("")
    const handleOptionClickType = (Title) => {
        setselectedValueCategory(Title);
        formik.setFieldValue("Category", Title);
      };
  return (
    <div className="px-4 ">
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
    <div></div>
        <div className={[style.font,"mb-5"].join(" ")}>
      {/* Header */}
      <div className="mt-3  ">
        <p className="fw-bold pt-2" style={{ fontSize: "18px" }}>
          {" "}
          إضافة  متخصص
        </p>
      </div>
      <div className="border pb-4 rounded-2">
        <div className="px-4 pt-4">
          <div className="row gy-3">
          {/* Image */}
            <div className="col-md-3">
              <label
                htmlFor="Image"
                className="form-label"
                style={{ fontSize: "18px" }}
              >
                {" "}
                صورة المتخصص
              </label>
              <div
                className="pe-2  rounded-2"
                style={{
                  backgroundColor: "rgba(247, 247, 247, 1)",
                  height: "60px",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  id="Image"
                />
                <p
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                  onClick={() =>
                    document.getElementById("Image").click()
                  }
                >
                  {preview ? (
                    <img
                      className="m-auto"
                      src={preview}
                      alt="Selected"
                      style={{ height: "100%", objectFit: "contain" }}
                    />
                  ) : (
                    <>
                      <img
                        src={uploadImage}
                        alt="uploadImage"
                        style={{ height: "100%", objectFit: "contain" }}
                      />
                      <span style={{ marginLeft: "10px" }}>أضف صورة</span>
                    </>
                  )}
                </p>
              </div>

              {formik.touched.Image &&
              formik.errors.Image ? (
                <div className="alert py-1 alert-danger">
                  {formik.errors.Image}
                </div>
              ) : null}
            </div>
            {/* name */}
            <div className="col-md-9">
              <label
                htmlFor="name"
                className="form-label"
                style={{ fontSize: "18px" }}
              >
                {" "}
                اسم المتخصص
              </label>
              <input
                type="text"
                placeholder="اضف اسم المتخصص المهني"
                className="form-control py-3 border-0"
                id="name"
                style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name &&
              formik.errors.name ? (
                <div className="alert py-1 alert-danger">
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
          </div>
        </div>
              {/* Desc */}
        <div className="d-flex p-4 py-2">
          <div className="w-100">
            <label
              htmlFor="Description"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              {" "}
              نبذة عن المتخصص       
                   </label>
            <textarea
              type="text"
              placeholder="اكتب نبذة مختصرة عن متخصص السيرة الذاتية ولينكد ان"
              className="form-control py-3 border-0"
              id="Description"
              style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
              {...formik.getFieldProps("Description")}
            />
            {formik.touched.Description && formik.errors.Description ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.Description}
              </div>
            ) : null}
          </div>
        </div>
           
        <div className="row gy-3 p-4 py-2">
         {/* ExperienceInYears */}
          <div className="col-md-3">
            <label
              htmlFor="ExperienceInYears"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              {" "}
              الخبرة بالسنوات
            </label>
            <input
              type="text"
              placeholder="مثال: 4 سنوات"
              className="form-control py-3 border-0"
              id="ExperienceInYears"
              style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
              {...formik.getFieldProps("ExperienceInYears")}
            />
            {formik.touched.ExperienceInYears && formik.errors.ExperienceInYears ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.ExperienceInYears}
              </div>
            ) : null}
          </div>
          {/* experienceDescription */}
          <div className="col-md-9">
            <label
              htmlFor="experienceDescription"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              {" "}
              نبذة عن خبرة المتخصص
            </label>
            <input
              type="text"
              placeholder="اضف خبرة المتخصص"
              className="form-control py-3 border-0"
              id="experienceDescription"
              style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
              {...formik.getFieldProps("experienceDescription")}
            />
            {formik.touched.experienceDescription && formik.errors.experienceDescription ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.experienceDescription}
              </div>
            ) : null}
          </div>
        </div>
            {/* Services */}
        <div className="d-flex p-4 py-2">
          <div className="w-100">
            <label
              htmlFor="Services"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              {" "}
              الخدمات
            </label>
            <textarea
              type="text"
              placeholder="اكتب تفاصيل الخدمات"
              className="form-control py-3 border-0"
              id="Services"
              style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
              {...formik.getFieldProps("Services")}
            />
            {formik.touched.Services && formik.errors.Services ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.Services}
              </div>
            ) : null}
          </div>
        </div>
            {/* PriceOfServices */}
        <div className="d-flex p-4 py-2">
          <div className="w-100">
            <label
              htmlFor="PriceOfServices"
              className="form-label"
              style={{ fontSize: "18px" }}
            >
              {" "}
              سعر الخدمات
            </label>
            <input
              type="text"
              placeholder="0:00 ريال سعودي"
              className="form-control py-3 border-0"
              id="PriceOfServices"
              style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
              {...formik.getFieldProps("PriceOfServices")}
            />
            {formik.touched.PriceOfServices && formik.errors.PriceOfServices ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.PriceOfServices}
              </div>
            ) : null}
          </div>
        </div>

        {/* //^ HnaaGategory */}
        <div className="my-3 px-4">
      <label htmlFor="Category" className="form-label">
      التصنيف
      </label>
      <div className={[style.dropdown,"dropdown my-0 p-0"].join(" ")} >
        <button
        className={[style.input,style.smMargine,"form-btn  mb-0 dropdown-toggle w-100", "form-control"].join(" ")}
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="">{selectedValueCategory || 'اختر التصنيف'}</span>
          </button>
          <ul className={["dropdown-menu position- w-100 border-0"].join(" ")}>
  <li>
    <div
      className={[style.input, style.smMargine, "dropdown-item", "form-control"].join(" ")}
      onClick={(e) => {
        handleOptionClickType("تصنيف A");
      }}
    >
      تصنيف A
    </div>
  </li>
  <li>
    <div
      className={[style.input, style.smMargine, "dropdown-item", "form-control"].join(" ")}
     
      onClick={(e) => {
        handleOptionClickType("تصنيف B");
      }}
    >
      تصنيف B
    </div>
  </li>
  <li>
    <div
      className={[style.input, style.smMargine, "dropdown-item", "form-control"].join(" ")}

      onClick={(e) => {
        handleOptionClickType("تصنيف C");
      }}
    >
      تصنيف C
    </div>
  </li>
</ul>

      </div>
      {formik.touched.Category && formik.errors.Category ? (
        <div className="alert py-1 alert-danger ">
          <p>{formik.errors.Category}</p>
        </div>
      ) : null}
    </div>
        {/* email */}
        <div className="px-4">
          <div className="input-group   pt-2">
            <span
              className="input-group-text border-0  rounded-end-3 rounded-start-0"
              id="basic-addon1"
            >
              <img src={icon1} alt="" />
            </span>
            <input
              type="email"
              placeholder="email@gmail.com"
              className="form-control py-3 border-0 rounded-start-3 rounded-end-0"
              id="email"
              style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
              {...formik.getFieldProps("email")}
            />
          </div>
          <div className="  pb-2">
            {formik.touched.email && formik.errors.email ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
        </div>
            {/* linkedIn */}
        <div className="px-4">
          <div className="input-group   pt-2">
            <span
              className="input-group-text border-0  rounded-end-3 rounded-start-0"
              id="basic-addon1"
            >
              <img src={icon2} alt="" />
            </span>
            <input
              type="text"
              placeholder="alaa/linkedin  "
              className="form-control py-3 border-0 rounded-start-3 rounded-end-0"
              id="linkedIn"
              style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
              {...formik.getFieldProps("linkedIn")}
            />
          </div>
          <div className="  pb-2">
            {formik.touched.linkedIn && formik.errors.linkedIn ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.linkedIn}
              </div>
            ) : null}
          </div>
        </div>
        {/* X */}
        <div className="px-4">
          <div className="input-group   pt-2">
            <span
              className="input-group-text border-0  rounded-end-3 rounded-start-0"
              id="basic-addon1"
            >
              <img src={icon4} alt="" />
            </span>
            <input
              type="text"
              placeholder="alaa/x  "
              className="form-control py-3 border-0 rounded-start-3 rounded-end-0"
              id="X"
              style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
              {...formik.getFieldProps("X")}
            />
          </div>
          <div className="  pb-2">
            {formik.touched.X && formik.errors.X ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.X}
              </div>
            ) : null}
          </div>
        </div>
        {/* website */}
        <div className="px-4">
          <div className="input-group   pt-2">
            <span
              className="input-group-text border-0  rounded-end-3 rounded-start-0"
              id="basic-addon1"
            >
              <img src={icon5} alt="" />
            </span>
            <input
              type="text"
              placeholder="www.web.com"
              className="form-control py-3 border-0 rounded-start-3 rounded-end-0"
              id="website"
              style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
              {...formik.getFieldProps("website")}
            />
          </div>
          <div className="  pb-2">
            {formik.touched.website && formik.errors.website ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.website}
              </div>
            ) : null}
          </div>
        </div>

        <div className="px-4">
          <div
            style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
            className="input-group  rounded-3 pe-4  py-3"
          >
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <Star
                  key={index}
                  filled={index < rating}
                  onClick={() => handleStarClick(index + 1)}
                />
              ))}
            </div>
          </div>
          <div className="  pb-2">
            {formik.touched.Description && formik.errors.Description ? (
              <div className="alert py-1 alert-danger">
                {formik.errors.Description}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
    <div className='row'>
                            <div className='col-md-6'></div>
                            <div className='col-md-6'>
                                <div className='row mb-5'>
                                <div className='col-md-6'>
                                {loading ?(
                                    <button type="button" className='btn text-white rounded-2 py-3 mt-1 w-100' style={{ backgroundColor: 'rgba(40, 42, 68, 1)' }}>
                                    <i className="fa-solid fa-spinner fa-spin"></i>
                                                </button>
                                ):(
                                      <button disabled={loading} onClick={formik.handleSubmit} type="submit" className='btn text-white rounded-2 py-3 mt-1 w-100' style={{ backgroundColor: 'rgba(31, 42, 68, 1)' }}>
                                      إضافة متخصص      
                                            </button>
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
  );
};

export default AddSpecialist;
