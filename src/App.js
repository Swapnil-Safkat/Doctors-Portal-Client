import Appointment from './Pages/Appointment/Appointment';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import './App.css';
import SignUp from './Pages/Login/SignUp';

function App() {
  return (
    <div data-theme="doctor_portal_theme">
      <div className=' text-accent min-h-screen flex flex-col items-center justify-between'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/appointment' element={<Appointment />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
