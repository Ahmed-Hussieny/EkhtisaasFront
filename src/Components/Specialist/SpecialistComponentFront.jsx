import React from 'react';

import { useNavigate } from 'react-router-dom';

const SpecialistComponentFront = ({ id, Image, Name,Category}) => {
  const navigate = useNavigate();
  const getBorderColor = (Category) => {
    if (Category === "تصنيف A") return "rgba(0, 175, 80, 1)";
    if (Category === "تصنيف B") return "rgba(237, 125, 49, 1)";
    return "rgba(252, 216, 111, 1)";
  };
  return (
    // 
    <div className='col-md-4 ' >
      <div className='rounded-3 position-relative' onClick={() => navigate(`/ShowSpecialistDetails/${id}`)} >
        <img src={Image} alt={`${Name}`} className='rounded-3 w-100' />
        <div style={{position:'absolute',top:0,left:0}}>
        <div  style={{backgroundColor:getBorderColor(Category),borderTopLeftRadius:'15px',borderBottomRightRadius:'15px'}}>
        <p style={{fontSize:'15px'}} className='px-4 text-white py-1'>{Category}</p>
        </div>
        </div>
      </div>
      <div className='text-center mt-4'>
        <p className='fw-bold' style={{fontSize:'22px'}}>
          {Name}
        </p>
      </div>
    </div>
  );
};

export default SpecialistComponentFront;
