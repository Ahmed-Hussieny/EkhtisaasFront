import React, { useState } from 'react'
import style from '../../Assents/Style/search.module.css'
import searchicon from '../../Assents/Images/search/Search_alt_light.svg'
import EmptyData from '../../Assents/Images/search/pana.svg'
const Search = () => {
    const [Data , setData] = useState([])
  return (
    <div className={style.font}>
          <div className='container  m-auto row mt-5'>
        <div className='col-md-10'>
        <div style={{backgroundColor:'rgba(247, 247, 247, 1)'}} className="input-group rounded-4 py-2">
  <div className="input-group-prepend bg-transparent border-0">
    <span className="input-group-text bg-transparent border-0" id="basic-addon1">
        <img src={searchicon}/>
    </span>
  </div>
  <input type="text" className={[style.input,"form-control border-0"].join(" ")} placeholder="ابحث عن ما تريده هنا" aria-label="Username" aria-describedby="basic-addon1" />
</div>
        </div>
    <div className='col-md-2'>
    <button className='btn text-white w-100 rounded-4 mt-1  py-3' style={{backgroundColor:'rgba(31, 42, 68, 1)'}}>بحث</button>

    </div>

    </div>
    <div className='container mt-5'>
        {(Data.length>0)?"":
       <>
       <div className='text-center'>
       <img src={EmptyData} alt='EmptyData'/>
       <p className='my-5' style={{fontSize:'22px'}}>للأسف لم نجد نتيجة لبحثك، ابحث مرة اخري بكلمات واضحة.</p>
       </div>
       </>
       }
    </div>
    </div>
  )
}

export default Search
