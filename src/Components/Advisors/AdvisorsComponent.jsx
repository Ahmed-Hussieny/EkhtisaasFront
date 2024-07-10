import React from 'react';
import icon1 from '../../Assents/Images/ADMIN/Advisors/@.png';
import icon2 from '../../Assents/Images/ADMIN/Advisors/Vector (8).png';
import icon3 from '../../Assents/Images/ADMIN/Advisors/x.png';
import icon4 from '../../Assents/Images/ADMIN/Advisors/web.png';
import { useNavigate } from 'react-router-dom';

const AdvisorsComponent = ({ id, Image, Name, Rate, Description, Email, LinkedIn, X, website }) => {
  const openEmail = (recipient, subject, body) => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  const navigate = useNavigate();
  const renderStars = (rate) => {
    return Array.from({ length: rate }, (_, index) => (
      <span key={index} role="img" aria-label="star">⭐</span>
    ));
  };

  return (
    <div className='col-md-4 ' >
      <div className='position-relative rounded-3 '>
        <img style={{cursor:'pointer'}} onClick={() => navigate(`/Admin/ShowAdvisors/${id}`)} src={Image} alt={`${Name}`} className='rounded-3 w-100' />
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
          
            <div style={{cursor:'pointer'}} onClick={() => openEmail(Email, 'Hello!', 'I wanted to reach out and say hello.')} className=' d-flex justify-content-center align-items-center'>
              <img src={icon1} alt='Email icon' />
            </div>
           <div>
           <a style={{textDecoration:'none',color:'black',cursor:'pointer'}} href={`${LinkedIn}`}  className="d-flex align-items-center" target='_blank' rel="noreferrer">
              <img src={icon2} alt='LinkedIn icon' />
              </a>
            </div>
            
           
            <div>
            <a style={{textDecoration:'none',color:'black',cursor:'pointer'}} href={`${X}`}  className="d-flex align-items-center" target='_blank' rel="noreferrer">

              <img src={icon3} alt='X (Twitter) icon' />
              </a>
            </div>
            <div>
            <a style={{textDecoration:'none',color:'black',cursor:'pointer'}} href={`${website}`}  className="d-flex align-items-center" target='_blank' rel="noreferrer">
            <img src={icon4} alt='Website icon' />
</a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisorsComponent;
