import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import image from "../../Assents/Images/Specialist/cuate.png";
import icon1 from "../../Assents/Images/Advisor/Vector 9.svg";
import typeIcon1 from "../../Assents/Images/ProfessionalCertification/Beaker.svg";
import typeIcon2 from "../../Assents/Images/ProfessionalCertification/Atom.svg";
import typeIcon3 from "../../Assents/Images/ProfessionalCertification/Telecope.svg";
import style from "../../Assents/Style/ProfessionalCertification.module.css";
import trueIcon from '../../Assents/Images/Specialist/Check_ring_duotone.svg'
import falseIcon from '../../Assents/Images/Specialist/Dell_duotone.svg'

import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HandelGetAllSpecialists } from "../../store/SpecialistSlice";
import SpecialistComponentFront from "../../Components/Specialist/SpecialistComponentFront";

const SpecialistPage = () => {
  const dispatch = useDispatch();
  const [icon, setIcon] = useState("");
  const [Title, setTitle] = useState("");
  useEffect(() => {
    if (Title === "الكيمياء") {
      setIcon(typeIcon1);
    } else if (Title === "الفيزياء") {
      setIcon(typeIcon2);
    } else if (Title === "الاحياء") {
      setIcon(typeIcon3);
    }
  }, [Title]);

  const [AdvisorData, setAdvisorData] = useState([]);

  //^ Get Its Data
  const getMainData = async () => {
    try {
      const res = await dispatch(HandelGetAllSpecialists());
      console.log(res.payload);
      setAdvisorData(res.payload.data);
      
    } catch (error) {
      console.error("Failed to fetch main specialty data:", error);
    } finally {
    }
  };
  useEffect(() => {
    getMainData();
  }, []);
  //   handel the pagination
  const [currentPageForScientificData, setCurrentPageForScientificData] =
    useState(1);
  const itemsPerPage = 9;
  const handlePageChangeForScientificData = (event, value) => {
    setCurrentPageForScientificData(value);
  };
  const currentDataForScientificData = AdvisorData.slice(
    (currentPageForScientificData - 1) * itemsPerPage,
    currentPageForScientificData * itemsPerPage
  );
const navigate = useNavigate()
  return (
    <>
      <div className={["container-fluid", style.font].join(" ")}>
        <div className="my-5 text-center">
          <p style={{ color: "rgba(31, 42, 68, 1)", fontSize: "30px" }}>
          خدمة اللينكدين والسيرة الذاتية          </p>
        </div>
        {/* first section */}
        <div className="px-3 my-5 ">
          <div className="row gy-3 align-items-center">
            
            <div className="col-md-6 text-center">
              <div className="d-flex align-items-center">
                <p
                  className=" px-lg-5"
                  style={{ fontSize: "20px", color: "rgba(70, 70, 70, 1)" }}
                >
                نقدم لك التوجيه والمساعدة في كتابة سيرة ذاتية 
                مميزة وإنشاء ملف لينكدين يجذب انتباه 
                أصحاب العمل المحتملين. كتابة وتنسيق احترافي لسيرتك 
                الذاتية بأسلوب جذاب ومنظم يبرز نقاط قوتك. كما 
                نساعدك في إنشاء ملف لينكدين متميز يعكس مهاراتك 
                وخبراتك بشكل أفضل، من خلال هذه الخدمة  نهدف إلى 
                تعزيز فرصك في الحصول على الوظائف التي تطمح إليها 
                وبناء شبكة علاقات مهنية قوية تدعم تطورك المهني. 
                </p>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={image} className="w-50" alt="" />
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="d-flex mt-5 justify-content-center  align-items-center">
          <div className='text-center'>
            <p style={{ fontSize: "30px", fontWeight: 500 }}>
            متخصصين اللينكدين والسيرة الذاتية
            </p>
            <div className='row m-0'>
            <div className='col-md-6'>
               
                </div>
                <div className='col-md-6'>
                <div className="me-5 pe-5">
            <img className="pb-5 me-5 " src={icon1} alt="" />
          </div>
                </div>
            </div>
          </div>
          
        </div>
        {/* third section */}
        <div>
          {currentDataForScientificData.length > 0 ? (
            <>
              <div className="row m-0 gy-3 px-lg-5">
                {currentDataForScientificData.map((el) => (
                  <SpecialistComponentFront Category={el.Category} Image={el.Image.secure_url} id={el._id} Name={el.name} />
                ))}
              </div>
              <div className="d-flex justify-content-center my-5">
                <Pagination
                  count={Math.ceil(AdvisorData.length / itemsPerPage)}
                  page={currentPageForScientificData}
                  onChange={handlePageChangeForScientificData}
                  variant="outlined"
                  className="text-danger"
                  shape="rounded"
                />
              </div>
            </>
          ) : (
            <div className="d-flex justify-content-center my-5">
              <Pagination
                count={0}
                variant="outlined"
                className="text-danger"
                shape="rounded"
              />
            </div>
          )}
        </div>
        <div className="container-fluid my-5">
          {/* row 1 */}
      <div className="row ">
        <div className="col-md-3 px-4 text-center">
          <div className="bg-white rounded-4 p-4 shadow-sm">
            <p style={{fontSize:'20px'}} className="p-0 m-0">التصنيف</p>
          </div>
        </div>
        <div className="col-md-3 px-4 text-center">
        <div className="bg-white rounded-4 p-4 shadow-sm">
            <p style={{fontSize:'20px'}} className="p-0 m-0">خدمة كتابة السيرة الذاتية</p>
          </div>   
            </div>
        <div className="col-md-3 px-4 text-center">
        <div className="bg-white rounded-4 p-4 shadow-sm">
            <p style={{fontSize:'20px'}} className="p-0 m-0">خدمة تعديل اللينكدين</p>
          </div>      
            </div>
        <div className="col-md-3 px-4 text-center">
        <div className="bg-white rounded-4 p-4 shadow-sm">
            <p style={{fontSize:'20px'}} className="p-0 m-0">خدمة الإرشاد المهني</p>
          </div>
            </div>
      </div>
      {/* row 2 */}
      <div className="row my-1 gy-3">
        <div className="col-md-3 px-4 text-center">
          <div className=" rounded-4 p-4 shadow-sm text-white" style={{backgroundColor:'rgba(0, 175, 80, 1)'}}>
            <p style={{fontSize:'20px'}} className="p-0 m-0">تصنيف A</p>
          </div>
        </div>
        <div className="col-md-3 px-4 text-center">
        <div className=" rounded-4  shadow-sm" style={{padding:'10px' ,backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <img src={trueIcon}  alt="trueIcon"/>
          </div>   
            </div>
            <div className="col-md-3 px-4 text-center">
        <div className=" rounded-4  shadow-sm" style={{padding:'10px' ,backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <img src={trueIcon}  alt="trueIcon"/>
          </div>   
            </div>
            <div className="col-md-3 px-4 text-center">
        <div className=" rounded-4  shadow-sm" style={{padding:'10px' ,backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <img src={trueIcon}  alt="trueIcon"/>
          </div>   
            </div>
      </div>
      {/* row 3 */}
      <div className="row my-1 gy-3">
        <div className="col-md-3 px-4 text-center">
          <div className=" rounded-4 p-4 shadow-sm text-white" style={{backgroundColor:'rgba(237, 125, 49, 1)'}}>
            <p style={{fontSize:'20px'}} className="p-0 m-0">تصنيف B </p>
          </div>
        </div>
        <div className="col-md-3 px-4 text-center">
        <div className=" rounded-4  shadow-sm" style={{padding:'10px' ,backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <img src={trueIcon}  alt="trueIcon"/>
          </div>   
            </div>
            <div className="col-md-3 px-4 text-center">
        <div className=" rounded-4  shadow-sm" style={{padding:'10px' ,backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <img src={trueIcon}  alt="trueIcon"/>
          </div>   
            </div>
            <div className="col-md-3 px-4 text-center">
        <div className=" rounded-4  shadow-sm" style={{padding:'8px' ,backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <img src={falseIcon}  alt="falseIcon"/>
          </div>   
            </div>
      </div>
      {/* row 4 */}
      <div className="row my-1 gy-3">
        <div className="col-md-3 px-4 text-center">
          <div className=" rounded-4 p-4 shadow-sm text-white" style={{backgroundColor:'rgba(252, 216, 111, 1)'}}>
            <p style={{fontSize:'20px'}} className="p-0 m-0">تصنيف C  </p>
          </div>
        </div>
        <div className="col-md-3 px-4 text-center">
        <div className=" rounded-4  shadow-sm" style={{padding:'10px' ,backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <img src={trueIcon}  alt="trueIcon"/>
          </div>   
            </div>
            <div className="col-md-3 px-4 text-center">
        <div className=" rounded-4  shadow-sm" style={{padding:'8px' ,backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <img src={falseIcon}  alt="falseIcon"/>
          </div>   
            </div>
            <div className="col-md-3 px-4 text-center">
        <div className=" rounded-4  shadow-sm" style={{padding:'8px' ,backgroundColor:'rgba(247, 247, 247, 1)'}}>
        <img src={falseIcon}  alt="falseIcon"/>
          </div>   
            </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SpecialistPage;
