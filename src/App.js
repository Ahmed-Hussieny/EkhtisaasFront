import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import VerifyEmail from './Pages/VerifyEmail/VerifyEmail';
import { Provider } from 'react-redux';
import { ConfigurationStore } from './store/Stores';
import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
import OTP from './Pages/ForgetPassword/Otp';
import ResetPassword from './Pages/ForgetPassword/ResetPassword';
import HomePage from './Pages/HomePage/HomePage';
import Layout from './Components/Layout/Layout';
import AboutUs from './Pages/AboutUs/AboutUs';
import OurServices from './Pages/OurServices/OurServices';
import ContactUs from './Pages/ContactUs/ContactUs';
import Search from './Pages/Search/Search';
import LoginAdmin from './Pages/ADMIN/Login/LoginAdmin';
import LayoutAdmin from './Components/Layout/LayoutAdmin';
import AdminHomePage from './Pages/ADMIN/HomePage/AdminHomePage';
import Pages from './Pages/ADMIN/Pages/Pages';
import Specialties from './Pages/ADMIN/Specialties/Specialties';
import AddNewSpecialties from './Pages/ADMIN/Specialties/AddNewSpecialties';
import MainSpecialties from './Pages/ADMIN/MainSpecialties/MainSpecialties';
import AddNewSubSpecialties from './Pages/ADMIN/MainSpecialties/AddNewSubSpecialties';
import Certificates from './Pages/ADMIN/Certificates/Certificates';
import AddNewCertificate from './Pages/ADMIN/Certificates/AddNewCertificate';
import ShowCertificate from './Pages/ADMIN/Certificates/ShowCertificate';
import Advisors from './Pages/ADMIN/Advisors/Advisors';
import AddAdvisors from './Pages/ADMIN/Advisors/AddAdvisors';
import ShowAdvisors from './Pages/ADMIN/Advisors/ShowAdvisors';
import Specialist from './Pages/ADMIN/Specialist/Specialist';
import AddSpecialist from './Pages/ADMIN/Specialist/AddSpecialist';
import ShowSpecialist from './Pages/ADMIN/Specialist/ShowSpecialist';
import ProfessionalCertificationSpecialties from './Pages/professionalCertification/ProfessionalCertificationSpecialties';
import ProfessionalCertificationSubSpecialties from './Pages/professionalCertification/ProfessionalCertificationSubSpecialties';
import ProfessionalCertification from './Pages/professionalCertification/ProfessionalCertification';
import CertificateDetails from './Pages/professionalCertification/CertificateDetails';
import CareerGuidance from './Pages/CareerGuidance/CareerGuidance';
import MentorDetails from './Pages/CareerGuidance/MentorDetails';
import SpecialistPage from './Pages/Specialist/SpecialistPage';
import ShowSpecialistDetails from './Pages/Specialist/ShowSpecialistDetails';

function App() {
  let router = createBrowserRouter([
    {path:'/',element:<Login/>},
    {path:'/signUp',element:<Register/>},
    {path:'/VerifyEmail/:userToken',element:<VerifyEmail/>},
    {path:'/ForgetPassword',element:<ForgetPassword/>},
    {path:'/OTP',element:<OTP/>},
    {path:'/ResetPassword',element:<ResetPassword/>},
    {path:'/Admin',element:<LoginAdmin/>},
    {path:'/Admin',element: <LayoutAdmin />,children:[
      {path:'AdminHomePage',element:<AdminHomePage/>},
      {path:'Pages',element:<Pages/>},
      {path:'Specialties',element:<Specialties/>},
      {path:'addNewSpecialties',element:<AddNewSpecialties/>},
      {path:'MainSpecialties/:id',element:<MainSpecialties/>},
      {path:'AddNewSubSpecialties/:MainTitle',element:<AddNewSubSpecialties/>},
      {path:'Certificates',element:<Certificates/>},
      {path:'AddNewCertificate',element:<AddNewCertificate/>},
      {path:'ShowCertificate/:id',element:<ShowCertificate/>},
      {path:'Advisors',element:<Advisors/>},
      {path:'AddAdvisors',element:<AddAdvisors/>},
      {path:'ShowAdvisors/:id',element:<ShowAdvisors/>},
      {path:'Specialist',element:<Specialist/>},
      {path:'AddSpecialist',element:<AddSpecialist/>},
      {path:'ShowSpecialist/:id',element:<ShowSpecialist/>},

      
      

    ]},
    {path:'',element: <Layout />,children:[
      {path:'/HomePage',element:<HomePage/>},
      {path:'/AboutUs',element:<AboutUs/>},
      {path:'/OurServices',element:<OurServices/>},
      {path:'/ContactUs',element:<ContactUs/>},
      {path:'/Search',element:<Search/>},
      {path:'/ProfessionalCertificationSpecialties',element:<ProfessionalCertificationSpecialties/>},
      {path:'/ProfessionalCertificationSubSpecialties/:id',element:<ProfessionalCertificationSubSpecialties/>},
      {path:'/professionalCertifications/:id',element:<ProfessionalCertification/>},
      {path:'/CertificateDetails/:id',element:<CertificateDetails/>},
      {path:'/CareerGuidance',element:<CareerGuidance/>},
      {path:'/MentorDetails/:id',element:<MentorDetails/>},
      {path:'/SpecialistPage',element:<SpecialistPage/>},
      {path:'/ShowSpecialistDetails/:id',element:<ShowSpecialistDetails/>},
      

      
      
      
      

      
      
      
    ]},
    
   
    
  ])
  return (
    <div className='m-0  p-0'>
    <Provider store={ConfigurationStore}>
    <RouterProvider router={router}/>
    </Provider>
      
    </div>
  );
}

export default App;
