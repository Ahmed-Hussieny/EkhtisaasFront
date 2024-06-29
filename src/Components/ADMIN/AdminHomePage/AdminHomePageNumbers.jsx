import React from 'react'

const AdminHomePageNumbers = ({Text,number}) => {
  return (
    <div className='p-3 pt-4 bg-transparent  text-center w-100' >
      <h5 style={{fontSize:'16px' , color:'rgba(70, 70, 70, 1)'}} className='mb-4'>
      {Text}
      </h5>
      <p className='pb-0' style={{fontSize:'22px',color:'rgba(31, 42, 68, 1)',fontWeight:800}}>{number}</p>
    </div>
  )
}

export default AdminHomePageNumbers
