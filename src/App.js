import './App.css';
// import Login from './Pages/Login/Login';
// import Register from './Pages/Register/Register';
// import VerifyEmail from './Pages/VerifyEmail/VerifyEmail';
import { Provider } from 'react-redux';
import { ConfigurationStore } from './store/Stores';
// import ForgetPassword from './Pages/ForgetPassword/ForgetPassword';
// import OTP from './Pages/ForgetPassword/Otp';
// import ResetPassword from './Pages/ForgetPassword/ResetPassword';
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
import ContactWithUs from './Pages/ADMIN/ContactWithUs/ContactWithUs';
import NotFound from './Pages/NotFound/NotFound';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='m-0 p-0'>
      <Provider store={ConfigurationStore}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="AboutUs" element={<AboutUs />} />
              <Route path="OurServices" element={<OurServices />} />
              <Route path="ContactUs" element={<ContactUs />} />
              <Route path="Search" element={<Search />} />
              <Route path="ProfessionalCertificationSpecialties" element={<ProfessionalCertificationSpecialties />} />
              <Route path="ProfessionalCertificationSubSpecialties/:id" element={<ProfessionalCertificationSubSpecialties />} />
              <Route path="professionalCertifications/:id" element={<ProfessionalCertification />} />
              <Route path="CertificateDetails/:id" element={<CertificateDetails />} />
              <Route path="CareerGuidance" element={<CareerGuidance />} />
              <Route path="MentorDetails/:id" element={<MentorDetails />} />
              <Route path="SpecialistPage" element={<SpecialistPage />} />
              <Route path="ShowSpecialistDetails/:id" element={<ShowSpecialistDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/Admin" element={<LoginAdmin />} />
            <Route path="/Admin" element={<LayoutAdmin />}>
              <Route path="AdminHomePage" element={<AdminHomePage />} />
              <Route path="Pages" element={<Pages />} />
              <Route path="Specialties" element={<Specialties />} />
              <Route path="addNewSpecialties" element={<AddNewSpecialties />} />
              <Route path="MainSpecialties/:id" element={<MainSpecialties />} />
              <Route path="AddNewSubSpecialties/:MainTitle" element={<AddNewSubSpecialties />} />
              <Route path="Certificates" element={<Certificates />} />
              <Route path="AddNewCertificate" element={<AddNewCertificate />} />
              <Route path="ShowCertificate/:id" element={<ShowCertificate />} />
              <Route path="Advisors" element={<Advisors />} />
              <Route path="AddAdvisors" element={<AddAdvisors />} />
              <Route path="ShowAdvisors/:id" element={<ShowAdvisors />} />
              <Route path="Specialist" element={<Specialist />} />
              <Route path="AddSpecialist" element={<AddSpecialist />} />
              <Route path="ShowSpecialist/:id" element={<ShowSpecialist />} />
              <Route path="ContactWithUs" element={<ContactWithUs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
