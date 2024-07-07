import React from 'react';
import image from '../../Assents/Images/ADMIN/Advisors/image 4.png';
import icon1 from '../../Assents/Images/ADMIN/Advisors/@.png';
import icon2 from '../../Assents/Images/ADMIN/Advisors/Vector (8).png';
import icon3 from '../../Assents/Images/ADMIN/Advisors/x.png';
import icon4 from '../../Assents/Images/ADMIN/Advisors/web.png';
import { useNavigate } from 'react-router-dom';

const AdvisorsComponent = ({ id, Image, Name, Rate, Description, Email, LinkedIn, X, website }) => {
  const navigate = useNavigate();
  const renderStars = (rate) => {
    return Array.from({ length: rate }, (_, index) => (
      <span key={index} role="img" aria-label="star">⭐</span>
    ));
  };

  return (
    <div className='col-md-4 ' >
      <div className='position-relative rounded-3 ' onClick={() => navigate(`/Admin/ShowAdvisors/${id}`)}>
        <img src={Image} alt={`${Name}`} className='rounded-3 w-100' />
        <div className='rounded-4 p-3 w-75 m-auto' style={{ color: 'rgba(41, 41, 41, 1)', position: 'relative', bottom: '50px', left: 0, backgroundColor: 'rgba(242, 247, 252, 1)' }}>
          <div className='row gy-'>
            <div className='col-md-6 text-center'>
              <p className='fw-bold'>{Name}</p>
            </div>
            <div className='col-md-6 text-center'>
              {renderStars(Rate)}
            </div>
          </div>
          <div className='text-center pt-2'>
            <p>{Description}</p>
          </div>
          <div className='d-flex px-lg-5 justify-content-between align-items-center'>
            <div>
              <img src={icon1} alt='Email icon' />
            </div>
            <div>
              <img src={icon2} alt='LinkedIn icon' />
            </div>
            <div>
              <img src={icon3} alt='X (Twitter) icon' />
            </div>
            <div>
              <img src={icon4} alt='Website icon' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorsComponent;
