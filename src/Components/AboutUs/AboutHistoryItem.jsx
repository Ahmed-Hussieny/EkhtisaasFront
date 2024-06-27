import React from 'react'
import style from '../../Assents/Style/AboutUs.module.css'
const AboutHistoryItem = ({type,year,title,Desc}) => {
  return (
    <>
    {(type===1)?
    <>     <li className={[style.timelineItem,style.timelineItem2," "].join(" ")}>
                <div className={[style.linear,"  ms-auto s w-50 rounded-4 px-3 py-2 text-center"].join(" ")}>
                  <h3
                    style={{ fontSize: "22px" }}
                    className="fw-bold pt-2 text-white"
                  >
                    {year}
                  </h3>
                </div>
              </li>
              <li className={[style.timelineItem," "].join(" ")} style={{ direction: "ltr" }}>
                <div className="text-start pt-2">
                  <h3 style={{ color: "rgba(26, 205, 124, 1)" }}>
{title}                  </h3>
                  <div className="bg-white shadow p-4 text-center pt-5 mt-5 rounded-4">
                    <p
                      style={{
                        color: "rgba(101, 101, 101, 1)",
                        fontSize: "18px",
                      }}
                    >
                    {Desc}
                    </p>
                  </div>
                </div>
              </li>
                <li className={style.clear} />
    </>
    :
    <>
    <li className={[style.timelineItem,style.timelineItem2," "].join(" ")} style={{ direction: "ltr" }}>
              <div className={[style.linear,"  me-auto s w-50 rounded-4 px-3 py-2 text-center"].join(" ")}>

                  <h3
                    style={{ fontSize: "22px" }}
                    className="fw-bold pt-2 text-white"
                  >
                    {year}
                  </h3>
                </div>
              </li>
              <li className={[style.timelineItem," "].join(" ")}>
                <div className="text-end pt-2">
                  <h3 style={{ color: "rgba(26, 205, 124, 1)" }}>{title}</h3>
                  <div className="bg-white shadow p-4 text-center pt-5 mt-5 rounded-4">
                    <p
                      style={{
                        color: "rgba(101, 101, 101, 1)",
                        fontSize: "18px",
                      }}
                    >
                    {Desc}
                                        </p>
                  </div>
                </div>
              </li>
              <li className={style.clear} />
    </>}

    </>
  )
}

export default AboutHistoryItem
