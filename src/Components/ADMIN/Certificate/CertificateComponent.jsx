import React from 'react';
import { useNavigate } from 'react-router-dom';

const CertificateComponent = ({ Id,Title, Description, Level, Image }) => {
  console.log(Level);
    const navigate = useNavigate()
  const getBorderColor = (level) => {
    if (level === "مبتدئ") return "rgba(40, 170, 222, 1)";
    if (level === "متوسط") return "rgba(243, 151, 26, 1)";
    return "rgba(42, 177, 118, 1)";
  };

  return (
    <div style={{cursor:'pointer'}} onClick={()=>navigate(`/Admin/ShowCertificate/${Id}`)}>
        <div
      className="rounded-4 position-relative"
      style={{
        border: '1px solid',
        borderColor: getBorderColor(Level),
      }}
    >
    <div style={{position:'absolute',top:0,left:0}}>
        <div  style={{backgroundColor:getBorderColor(Level),borderTopLeftRadius:'15px',borderBottomRightRadius:'15px'}}>
        <p style={{fontSize:'15px'}} className='px-4 text-white py-1'>{Level}</p>
        </div>
    </div>
    <div className='mt-5 mb-3 text-center'>
        <p>شعار المنظمة</p>
        <div>
        <img className='w-50 ' src={Image} alt={Title} />
        </div>
    </div>
    </div>
      <div className='text-center'>
      <h4>{Title}</h4>
      </div>
      <div>
      <p>{Description}</p>
      </div>
    </div>
  );
};

export default CertificateComponent;
