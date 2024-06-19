import React from "react";
import style from "../../Assents/Style/Homepage.module.css";
import circle from "../../Assents/Images/Homepage/Circle.png";
import cuate from "../../Assents/Images/Homepage/cuate.svg";
import CustomTitle from "../../Components/CustomTitle/CustomTitle";
import CustomHomeDesc from "../../Components/CustomHomeDesc/CustomHomeDesc";
import image1 from "../../Assents/Images/Homepage/undraw_data_processing_yrrv.svg";
import image2 from "../../Assents/Images/Homepage/undraw_time_management_re_tk5w.svg";
import image3 from "../../Assents/Images/Homepage/undraw_online_resume_re_ru7s.svg";
import image4 from "../../Assents/Images/Homepage/undraw_completed_steps_re_h9wc.svg";
import image5 from "../../Assents/Images/Homepage/undraw_online_information_re_erks.svg";
import CustomHomeNumber from "../../Components/CustomHomeNumber/CustomHomeNumber";
import sep1 from "../../Assents/Images/Homepage/separators/Line 19 (1).png";
import sep2 from "../../Assents/Images/Homepage/separators/Line 20.png";
import sep3 from "../../Assents/Images/Homepage/separators/Line 21.png";
import sep4 from "../../Assents/Images/Homepage/separators/Line 22.png";

const HomePage = () => {
  return (
    <div className={[style.font, " p-0 m-0"].join(" ")}>
      {/* section 1 */}
      <div className="row p-0 m-0">
        <div className="col-md-5 pe-5 d-flex justify-content-center mt-5 flex-column align-items- pb-lg-5">
          <div className="w-75 mb-4">
            <p className={style.p}>
              منصة اختصاص المنصة الأضخم عربيًا في مجال الشهادات الإحترافية،
              نساعدك على تحقيق أهدافك المهنية من خلال توفير المعلومات والتدريب
              اللازم للحصول على الشهادات الاحترافية في مختلف التخصصات. منصتنا
              مخصصة لدعمك في كل خطوة من رحلتك المهنية، سواء كنت مبتدئًا تبحث عن
              البداية أو محترفًا تسعى لتعزيز مهاراتك وخبراتك.
            </p>
          </div>
          <button
            // onClick={LoginForm.handleSubmit}
            // disabled={!(LoginForm.isValid && LoginForm.dirty)}
            type="button"
            className={[style.submitbutton, "btn mb-5"].join(" ")}
          >
            ابدأ رحلة التعلم
          </button>
        </div>
        <div className="col-md-7 d-none d-lg-block p-0 text-start">
          <div
            className="  p-0 text-start"
            style={{ position: "relative", zIndex: -1, marginTop: "-100px" }}
          >
            <img
              className={[style.imageWidth, "me-auto"].join(" ")}
              src={circle}
              alt="circle"
            />
            <div style={{ position: "absolute", top: "25%", left: "15%" }}>
              <img className={style.imageWidth2} src={cuate} alt="cuate" />
            </div>
          </div>
        </div>
      </div>

      {/* section2 */}
      <div className="mb-5">
        <div className="mb-5  text-center">
          <CustomTitle title={"ما يميزنا"} />
        </div>
        <div className="text-center container">
          <CustomHomeDesc
            title={"قاعدة بيانات شاملة"}
            desc={
              "نقدم لك أكبر قاعدة بيانات للتخصصات والشهادات الاحترافية، مصممة خصيصًا لمساعدتك في تحقيق أهدافك المهنية. سواء كنت مبتدئًا تستعد لدخول سوق العمل أو محترفًا تسعى لتعزيز مهاراتك، نحن هنا لدعمك في كل خطوة من رحلتك."
            }
            img={image1}
            dir={"L"}
          />
          <img className={style.customheigth} src={sep1} alt="sep1" />
          <CustomHomeDesc
            title={"نوفر وقتك وجهدك"}
            desc={
              "بفضل قاعدة بياناتنا الثرية نوفر الوقت والجهد للباحثين عن عمل وللمهنين في البحث عن افضل الشهادات الاحترافية. "
            }
            img={image2}
            dir={"R"}
          />
          <img className={style.customheigth} src={sep2} alt="sep1" />

          <CustomHomeDesc
            title={"خدمات الإرشاد المهني"}
            desc={
              "نقدم لك أكبر قاعدة بيانات للتخصصات والشهادات الاحترافية، مصممة خصيصًا لمساعدتك في تحقيق أهدافك المهنية. سواء كنت مبتدئًا تستعد لدخول سوق العمل أو محترفًا تسعى لتعزيز مهاراتك، نحن هنا لدعمك في كل خطوة من رحلتك."
            }
            img={image3}
            dir={"L"}
          />
          <img className={style.customheigth} src={sep3} alt="sep1" />

          <CustomHomeDesc
            title={"المنظمات التدريبية"}
            desc={
              "نوفر لك أكبر تجمع للمنظمات التدريبية للإستفادة من خدماتهم ودوراتهم التدريبية."
            }
            img={image4}
            dir={"R"}
          />
          <img className={style.customheigth} src={sep2} alt="sep1" />

          <CustomHomeDesc
            title={"سهولة الوصول للمعلومات"}
            desc={
              "بتصميم جديد سهل وجذاب نوفر لك تجربة ولا أسهل في الوصول لأي معلومة تريدها."
            }
            img={image5}
            dir={"L"}
          />
        </div>
      </div>

      {/* section 3 */}
      <div>
        <div className="text-center mb-5 container">
          <CustomTitle title={" أرقامنا"} />
          <div className="row m-0 gy-3">
            <div className="col-md-3">
              <CustomHomeNumber num={12} text={"عدد الشهادات الاحترافية"} />
            </div>
            <div className="col-md-3">
              <CustomHomeNumber num={34} text={"عدد التخصصات الرئيسية"} />
            </div>
            <div className="col-md-3">
              <CustomHomeNumber num={90} text={"عدد التخصصات الفرعية"} />
            </div>
            <div className="col-md-3">
              <CustomHomeNumber num={56} text={"عدد المنظمات"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
