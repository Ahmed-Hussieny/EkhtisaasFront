import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import image from "../../Assents/Images/Advisor/cuate.png";
import icon1 from "../../Assents/Images/Advisor/Vector 9.svg";
import typeIcon1 from "../../Assents/Images/ProfessionalCertification/Beaker.svg";
import typeIcon2 from "../../Assents/Images/ProfessionalCertification/Atom.svg";
import typeIcon3 from "../../Assents/Images/ProfessionalCertification/Telecope.svg";
import style from "../../Assents/Style/ProfessionalCertification.module.css";
import { Pagination } from "@mui/material";
import { HandelGetAllAdvisors } from "../../store/AdvisorSlice";
import { useNavigate } from "react-router-dom";
import CareerGuidanceComponent from "./CareerGuidanceComponent";

const CareerGuidance = () => {
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
      const res = await dispatch(HandelGetAllAdvisors());
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
  const currentDataForScientificData = AdvisorData?.slice(
    (currentPageForScientificData - 1) * itemsPerPage,
    currentPageForScientificData * itemsPerPage
  );
const navigate = useNavigate()
  return (
    <>
      <div className={["container-fluid", style.font].join(" ")}>
        <div className="my-5 text-center">
          <p style={{ color: "rgba(31, 42, 68, 1)", fontSize: "30px" }}>
            خدمة الإرشاد المهني للموظفين وحديثي التخرج
          </p>
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
                  تقدم خدمة الإرشاد المهني توجيهًا متخصصًا وشخصيًا للموظفين
                  وحديثي التخرج لمساعدتهم على تحقيق أهدافهم المهنية. تهدف هذه
                  الخدمة إلى تعزيز المهارات المهنية، وتوفير الإرشادات اللازمة
                  لتطوير المسار الوظيفي، وزيادة فرص النجاح في بيئة العمل. سواء
                  كنت تبحث عن تحسين مهاراتك الحالية، أو الانتقال إلى مجال جديد،
                  أو بدء مسارك المهني بنجاح، فإن خدمة الإرشاد المهني توفر لك
                  الدعم والإرشاد اللازمين لتحقيق طموحاتك المهنية.
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
          <div>
            <p style={{ fontSize: "30px", fontWeight: 500 }}>
            المرشدين المهنين
            </p>
            <div className="me-5 pe-5">
            <img className="pb-5 me-5 " src={icon1} alt="" />
          </div>
          </div>
          
        </div>
        {/* third section */}
        <div>
          {currentDataForScientificData.length > 0 ? (
            <>
              <div className="row m-0 gy-3 px-lg-5">
                {currentDataForScientificData.map((el) => (
                    <CareerGuidanceComponent Email={el.email} LinkedIn={el.linkedIn} website={el.website} X={el.X} id={el._id} Description={el.contentcareer} Name={el.name} Image={el.Image.secure_url} Rate={el.Rate}/>
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
      </div>
     
    </>
  );
};

export default CareerGuidance;
