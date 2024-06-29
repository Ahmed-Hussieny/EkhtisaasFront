import React from "react";
import style from "../../../Assents/Style/Auth.module.css";
import icon from "../../../Assents/Images/ADMIN/Pages/Refresh_2_light.svg";
import PagesComponent from "../../../Components/ADMIN/Pages/PagesComponent";
const Pages = () => {
    return (
    <div className={style.font}>
    <div className="mt-4 px-5">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p style={{ fontSize: "20px", fontWeight: 700 }}>الصفحات</p>
          </div>
          <div>
            <div
              className="d-flex justify-content-center align-items-center rounded-circle bg-white border"
              style={{ width: "50px", height: "50px" }}
            >
              <img className="w-50" alt="icon" src={icon} />
            </div>
          </div>
        </div>
        <div className="mt-5">
        <div className="row gx-3 gy-4">
            <PagesComponent Text={"الرئيسية"} />
            <PagesComponent Text={"من نحن"} />
            <PagesComponent Text={"خدماتنا"} />
            <PagesComponent Text={"تواصل معنا"} />
            <PagesComponent Text={"البحث"} />
            <PagesComponent Text={"الشهادات الاحترافية"} />
            <PagesComponent Text={"خدمة اللينكدين والسيرة الذاتية"} />
            <PagesComponent Text={"خدمة الارشاد المهني"} />
        </div>
        </div>
    </div>
    </div>
);
};

export default Pages;
