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
      


      
      
    ]},
    {path:'',element: <Layout />,children:[
      {path:'/HomePage',element:<HomePage/>},
      {path:'/AboutUs',element:<AboutUs/>},
      {path:'/OurServices',element:<OurServices/>},
      {path:'/ContactUs',element:<ContactUs/>},
      {path:'/Search',element:<Search/>},


      
      
      
    ]},
    
   
    
  ])
  return (
    <div className='m-0 p-0'>
    <Provider store={ConfigurationStore}>
    <RouterProvider router={router}/>
    </Provider>
      
    </div>
  );
}

export default App;
