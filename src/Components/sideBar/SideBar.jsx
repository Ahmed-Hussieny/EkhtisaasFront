import React from 'react';
import logo from '../../Assents/Images/SideBar/image 2 (1).png';
import icon1 from '../../Assents/Images/SideBar/Widget_light.svg';
import icon11 from '../../Assents/Images/SideBar/Widget_light2.svg';

import icon2 from '../../Assents/Images/SideBar/Paper_light.svg';
import icon22 from '../../Assents/Images/SideBar/Paper_light2.svg';

import icon4 from '../../Assents/Images/SideBar/Desk_alt_light.svg';
import icon44 from '../../Assents/Images/SideBar/Desk_alt_light2.svg';

import icon5 from '../../Assents/Images/SideBar/Group.svg';
import icon55 from '../../Assents/Images/SideBar/Group copy.svg';

import icon6 from '../../Assents/Images/SideBar/Vector (2).svg';
import icon66 from '../../Assents/Images/SideBar/Vector (2) copy.svg';

import icon7 from '../../Assents/Images/SideBar/User_duotone_line.svg';
import icon77 from '../../Assents/Images/SideBar/User_duotone_line copy.svg';

import './SideBar.css';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  console.log('Current Path:', location.pathname);

  // Function to determine if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div style={{ height: '100vh' }}>
      <CDBSidebar textColor="#fff" backgroundColor="rgba(31, 42, 68, 1)">
        <CDBSidebarHeader prefix={<div className='text-center'>
          <img className='w-100' alt='logo' src={logo} />
        </div>}>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Admin/AdminHomePage" activeClassName="active-link" style={{color:isActive("/Admin/AdminHomePage")?"rgba(92, 215, 251, 1)":""}}>
              <CDBSidebarMenuItem>
              {isActive("/Admin/AdminHomePage")?
              <img src={icon11} alt='icon11' className='ms-3'/>
              : <img src={icon1} alt='icon1' className='ms-3'/>}
                 الرئيسية
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Admin/Pages" activeClassName="active-link" style={{color:isActive("/Admin/Pages")?"rgba(92, 215, 251, 1)":""}}>
              <CDBSidebarMenuItem>
              {isActive("/Admin/Pages")?
                <img src={icon22} alt='icon22' className='ms-3'/>
              :<img src={icon2} alt='icon2' className='ms-3'/>}
                 الصفحات
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Admin/Specialties" activeClassName="active-link" style={{color:isActive("/Admin/Specialties")?"rgba(92, 215, 251, 1)":""}}>
              <CDBSidebarMenuItem>
              {isActive("/Admin/Specialties")?
                <img src={icon44} alt='icon44' className='ms-3'/>
              :<img src={icon4} alt='icon4' className='ms-3'/>}
                 التخصصات
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Admin/Certificates" activeClassName="active-link" style={{color:isActive("/Admin/Certificates")?"rgba(92, 215, 251, 1)":""}}>
              <CDBSidebarMenuItem>
              {isActive("/Admin/Certificates")?
                <img src={icon55} alt='icon55' className='ms-3'/>
              :<img src={icon5} alt='icon5' className='ms-3'/>}
                 الشهادات
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Admin/Advisors" activeClassName="active-link" style={{color:isActive("/Admin/Advisors")?"rgba(92, 215, 251, 1)":""}}>
              <CDBSidebarMenuItem>
              {isActive("/Admin/Advisors")?
                <img src={icon66} alt='icon66' className='ms-3'/>
              :<img src={icon6} alt='icon6' className='ms-3'/>}
                 المرشدين
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Admin/Specialist" activeClassName="active-link" style={{color:isActive("/Admin/Specialist")?"rgba(92, 215, 251, 1)":""}}>
              <CDBSidebarMenuItem>
              {isActive("/Admin/Specialist")?
                <img src={icon77} alt='icon77' className='ms-3'/>
              :<img src={icon7} alt='icon7' className='ms-3'/>}
                المتخصصين
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
