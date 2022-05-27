import Appointment from './Pages/Appointment/Appointment';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import RequiredAuth from './Components/RequiredAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyReviews from './Pages/Dashboard/MyReviews';
import MyHistory from './Pages/Dashboard/MyHistory';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Components/Navbar';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import './App.css';
import Users from './Pages/Dashboard/Users';
import RequiredAdmin from './Components/RequiredAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
function App() {
  return (
    <div data-theme="doctor_portal_theme">
      <div className=' text-accent min-h-screen flex flex-col items-center justify-between'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='appointment' element={<RequiredAuth><Appointment /></RequiredAuth>} />
          <Route path='dashboard' element={<RequiredAuth><Dashboard /></RequiredAuth>} >
            <Route index element={<MyAppointments />} />
            <Route path='reviews' element={<MyReviews />} />
            <Route path='history' element={<MyHistory />} />
            <Route path='users' element={<RequiredAdmin><Users /></RequiredAdmin>} />
            <Route path='addDoctor' element={<RequiredAdmin><AddDoctor /></RequiredAdmin>} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnHover />
      </div>
    </div>
  );
}

export default App;
