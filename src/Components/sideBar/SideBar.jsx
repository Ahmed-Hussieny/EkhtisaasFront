import React from 'react';
import logo from '../../Assents/Images/SideBar/image 2 (1).png'
import icon1 from '../../Assents/Images/SideBar/Widget_light.svg'
import icon2 from '../../Assents/Images/SideBar/Paper_light.png'
import icon3 from '../../Assents/Images/SideBar/Chat_light.svg'
import icon4 from '../../Assents/Images/SideBar/Desk_alt_light.svg'
import icon5 from '../../Assents/Images/SideBar/Group.svg'
import icon6 from '../../Assents/Images/SideBar/Vector (2).svg'
import icon7 from '../../Assents/Images/SideBar/User_duotone_line.svg'
import './SideBar.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ height: '100vh'}}>
      <CDBSidebar textColor="#fff" backgroundColor="rgba(31, 42, 68, 1)">
        <CDBSidebarHeader prefix={<div className='text-center'>
          <img  className='w-100' src={logo}/>
        </div>}>
          
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Admin/AdminHomePage" activeClassName="activeClicked">
              <CDBSidebarMenuItem> <img src={icon1} className='ms-3'/> الرئيسية</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem > <img src={icon2} className='ms-3'/> الصفحات</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem > <img src={icon3} className='ms-3'/> الإستفسارات</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem > <img src={icon4} className='ms-3'/> التخصصات</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem > <img src={icon5} className='ms-3'/> الشهادات</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem > <img src={icon6} className='ms-3'/> المرشدين</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem > <img src={icon7} className='ms-3'/> المتخصصين</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

       
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;