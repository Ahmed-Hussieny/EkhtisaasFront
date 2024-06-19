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

function App() {
  let router = createBrowserRouter([
    {path:'/',element:<Login/>},
    {path:'/signUp',element:<Register/>},
    {path:'/VerifyEmail/:userToken',element:<VerifyEmail/>},
    {path:'/ForgetPassword',element:<ForgetPassword/>},
    {path:'/OTP',element:<OTP/>},
    {path:'/ResetPassword',element:<ResetPassword/>},
    {path:'',element: <Layout />,children:[
      {path:'/HomePage',element:<HomePage/>},
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
