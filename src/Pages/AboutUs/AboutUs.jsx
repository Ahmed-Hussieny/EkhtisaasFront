import React, { useEffect } from "react";
// import "./style.css";
import style from "../../Assents/Style/AboutUs.module.css";
import img from "../../Assents/Images/AboutUs/illustration.svg";
import AboutUsComponent from "../../Components/AboutUs/AboutUsComponent";
import icon1 from "../../Assents/Images/AboutUs/Union.svg";
import icon2 from "../../Assents/Images/AboutUs/Group 86.svg";
import icon3 from "../../Assents/Images/AboutUs/Vector (1).svg";
import icon4 from "../../Assents/Images/AboutUs/Group 51.svg";
import Img2 from "../../Assents/Images/AboutUs/cuate.svg";
import AboutHistoryItem from "../../Components/AboutUs/AboutHistoryItem";
import { HandelPutCountOfVisitors } from "../../store/AuthSlice";
import { useDispatch } from "react-redux";

const AboutUs = () => {
  const dispatch =useDispatch()

  const putPageCount = async()=>{
    await dispatch(HandelPutCountOfVisitors(5))
}
useEffect(()=>{
putPageCount()
},[])
  return (
    <div className={style.font}>
      <div className="container mt-5">
        {/* section 1 */}
        <div className="text-center">
          <h3 style={{fontSize:'37px'}} className="py-3">من نحن</h3>
        </div>
        <div className="row my-5 gy-3 d-flex align-items-center">
          <div className="col-md-6 px-3 text-center">
            <p
              className="px-2"
              style={{
                fontSize: "20px",
                lineHeight: 1.8,
                fontWeight: 400,
                color: "rgba(70, 70, 70, 1)",
              }}
            >
              منصة إختصاص هي منصة تدعم المحتوى العربي في مجال التطوير والإرشاد
              المهني في المجال الوظيفي الذي يتمثـل في الشهادات الإحترافية
              لمساعدة المهنيين وحديثين التخرج في تطوير مهاراتهم وإكتشاف المسار
              الوظيفــي تقدم المنصة قائمة بالتخصصات المهنية وربطها بالمهن
              الوظيفية والشهادات الإحترافية المطلوبة في سـوق العمل تعتبر منصة
              إختصاص أكبـــر منصة عربية تهتم بالتخصصات المهنية في مجال التطوير
              المهني والشهادات الإحترافية
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src={img} alt="img" className="w-75" />
          </div>
        </div>
        {/* section 2 */}
        <div className="mt-5 pt-5">
          <div>
            <AboutUsComponent
              icon={icon1}
              text={"رؤيتنا"}
              desc={
                "رؤيتنا أن تصبح منصة إختصاص أكبر منصة عربية في مجال التخصصات المهنية والتطوير المهني والشهادات الإحترافية"
              }
            />
          </div>
          <div className="py-5">
            <AboutUsComponent
              icon={icon2}
              text={"رسالتنا"}
              desc={
                "تكوين بيئة تحفيزية للمهنيين وحديثين التخرج في إكتشاف مسارهم الوظيفي والحصول على أفضل الفرص في مجـال التخصصات المهنية والحث على أهمية الشهادات الإحترافية في سوق العمل"
              }
            />
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className={style.bgImage}>
        <div className="row d-flex py-5 w-100  align-items-center">
          <div className="col-md-6 py-5">
            <div className="d-flex justify-content-center ">
              <div className=" pb-5">
                <img className="w-75" src={icon3} alt="" />
              </div>
              <div className="pt-5">
                <h3 style={{ fontSize: "40px" }}>أهدافنا</h3>
              </div>
            </div>
            <div className="container mt-5 pe-5">
              <ul
                className="px-3 fs-5"
                style={{ color: "rgba(70, 70, 70, 1)" }}
              >
                <li
                  style={{ fontSize: "20px", lineHeight: 1.7 }}
                  className="py-2 "
                >
                  التعريف بالمهن والتخصصات المهنية ومواكبة متطلبات سوق العمل{" "}
                </li>
                <li
                  style={{ fontSize: "20px", lineHeight: 1.7 }}
                  className="py-2 "
                >
                  تمكيـن المهنيين وحديثين التخرج من تطوير مهاراتهم الوظيفيـة
                </li>
                <li
                  style={{ fontSize: "20px", lineHeight: 1.7 }}
                  className="py-2 "
                >
                  {" "}
                  زيادة الوعي فــي مجال الشهـادات الإحترافية
                </li>
                <li
                  style={{ fontSize: "20px", lineHeight: 1.7 }}
                  className="py-2 "
                >
                  {" "}
                  تطوير خدمات الإرشاد المهني لمساعدة المهنيين وحديثين التخرج في
                  إكتشاف مسارهم الوظيف
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 py-5 text-center">
            <img src={Img2} />
          </div>
        </div>
      </div>


      {/* section 4 */}
      <div className={style.font}>
        <section className="my-5">
          <div className="container pb-5">
          {/* title */}
            <div className="title-box text-center white">
              <div className="d-flex justify-content-center ms-5 ">
                <div className=" pb-5">
                  <img className="w-75" src={icon4} alt="" />
                </div>
                <div className="pt-5">
                  <h3 style={{ fontSize: "40px" }}>خبراتنا</h3>
                </div>
              </div>{" "}
            </div>


            {/* Timeline */}
            <ul className={[style.timeline," py-5 list-unstyled"].join(" ")}>
            {/* item 1 */}
            <AboutHistoryItem type={1} year={2024} title={"نكمل رحلتنا"} Desc={"قمنا بتطوير دليل الشهادات الإحترافية النسخة الثانية ليضم أكثر من 62 تخصص و 435 شهادة "}/>
 {/* item 2 */}
<AboutHistoryItem type={2} year={2023} title={"خطوة جديدة"} Desc={"أكملنا رحلتنا في عام 2023 بإنشاء دليل الشهادات الإحترافية النسخة الثانية والذي يضم أكثر من 62 تخصص و 435 شهادة."}/>
                 {/* item 3 */}
              <AboutHistoryItem type={1} year={2022} title={"بداية التطوير"} Desc={"قمنا بتطوير دليل الشهادات الإحترافية النسخة الأولي ليضم أكثر من 37 تخصص و 371 شهادة"}/>


          
    

               {/* item 4 */}
          <AboutHistoryItem type={2} year={2022} title={"بداية الرحلة"} Desc={"بدأت رحلتنا في عام 2022 بإنشاء دليل الشهادات الإحترافية النسخة الأولي والذي يضم أكثر من 15 تخصص و 180 شهادة."}/>
                
            
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
