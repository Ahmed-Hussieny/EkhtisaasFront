import React, { useEffect, useState } from "react";
import style from "../../Assents/Style/search.module.css";
import searchicon from "../../Assents/Images/search/Search_alt_light.svg";
import EmptyData from "../../Assents/Images/search/pana.svg";
import { useDispatch } from "react-redux";
import { HandelGetAllMainSpecialty, HandelGetAllSubSpecialty } from "../../store/SpecialtiesSlice";
import { HandelGetAllCertificate } from "../../store/CertificateSlice";
import SpecialtiesSubComponent from "../../Components/ADMIN/Specialties/SpecialtiesSubComponent";
import chemistryIcon from '../../Assents/Images/ADMIN/Specialties/Beaker.png';
import ProfessionalSubSpecialties from "../../Components/ProfessionalCertification/ProfessionalSubSpecialties";
import ProfessionalSpecialties from "../../Components/ProfessionalCertification/ProfessionalSpecialties";
import ProfessionalCertificationComponent from "../../Components/ProfessionalCertification/ProfessionalCertificationComponent";

const Search = () => {
  const [Data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [Data1, setData1] = useState([]);
  const [Data2, setData2] = useState([]);
  const [Data3, setData3] = useState([]);
  const [filteredData1, setFilteredData1] = useState([]);
  const [filteredData2, setFilteredData2] = useState([]);
  const [filteredData3, setFilteredData3] = useState([]);

  const dispatch = useDispatch()
  const GetAllData = async()=>{
    const res1 = await dispatch(HandelGetAllMainSpecialty())
    setData1(res1.payload.data)
    console.log(res1.payload.data);
    const res2 = await dispatch(HandelGetAllSubSpecialty())
    setData2(res2.payload.data)
    console.log(res2.payload.data);
    const res3 = await dispatch(HandelGetAllCertificate())
    setData3(res3.payload.data)
    console.log(res3.payload.data);

  }
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    // For Main
    const filtered1 = Data1.filter(item => 
      item.Title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData1(filtered1);
    // For Sub
    const filtered2 = Data2.filter(item => 
      item.Title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData2(filtered2);
    // for Certificate
    const filtered3 = Data3.filter(item => 
      item.certificateName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData3(filtered3);
    console.log(filtered3);
  };
  useEffect(()=>{
    GetAllData()
  },[])
  return (
    <div className={style.font}>
      <div className="container  m-auto row mt-5">
        <div className="col-md-10">
          <div
            style={{ backgroundColor: "rgba(247, 247, 247, 1)" }}
            className="input-group rounded-4 py-2"
          >
            <div className="input-group-prepend bg-transparent border-0">
              <span
                className="input-group-text bg-transparent border-0"
                id="basic-addon1"
              >
                <img src={searchicon} alt="searchicon" />
              </span>
            </div>
            <input
              type="text"
              className={[style.input, "form-control border-0"].join(" ")}
              placeholder="ابحث عن ما تريده هنا"
              
               onKeyUp={handleInputChange} 
            />
          </div>
        </div>
        <div className="col-md-2">
          <button
          onClick={handleInputChange}
            className="btn text-white w-100 rounded-4 mt-1  py-3"
            style={{ backgroundColor: "rgba(31, 42, 68, 1)" }}
          >
            بحث
          </button>
        </div>
      </div>
      <div className="container mt-5">
        {filteredData1.length+filteredData3.length+filteredData2.length > 0 ? (
          <div className="row">
            {filteredData1.map((el) => (
              <ProfessionalSpecialties Type={el.Type} id={el._id} key={el.id} Img={el.Image.secure_url} Title={el.Title} Desc={el.Description} />

              ))}
          {filteredData2.map((el) => (
                <ProfessionalSubSpecialties MainTitle={el.MainTitle} Type={el.Type} id={el._id} key={el._id} Img={el.Image.secure_url}  Title={el.Title} Desc={el.Description} />
              ))}
              {filteredData3.map((el) => (
                <ProfessionalCertificationComponent Level={el.Level} Type={el.Type} id={el._id} key={el._id} Image={el.certificateImage.secure_url}  Title={el.Title} Description={el.Description} />
              ))}
          </div>
        ) : (
          <>
            <div className="text-center">
              <img className="w-50" src={EmptyData} alt="EmptyData" />
              <p className="my-5" style={{ fontSize: "22px" }}>
                للأسف لم نجد نتيجة لبحثك، ابحث مرة اخري بكلمات واضحة.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
