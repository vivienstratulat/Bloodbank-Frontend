
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import DoctorHome from "./components/DoctorHome";
import DonorHome from "./components/DonorHome";
import AdminHome from "./components/AdminHome";
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import DonatorAccount from './components/DonatorAccount';
import DeleteAccount from './components/DeleteAccount';
import DoctorDetails from './components/DoctorDetails';
import UpdateDonor from './components/UpdateDonor';
import DeleteDoctor from './components/DeleteDoctor';
import UpdateDoctor from './components/UpdateDoctor';
import RegisterDoctor from './components/RegisterDoctor';
import Centers from './components/Centers';
import Appointment from './components/Appointment';
import DonorAppointments from './components/DonorAppointments';



function App() {
  return (
   
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/doctorhome" element={<DoctorHome />} />
        <Route path="/donorhome" element={<DonorHome />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/account/:email" element={<DonatorAccount />} />
        <Route path="/delete-acc/:email" element={<DeleteAccount />} />
        <Route path="/doctor-details/:email" element={<DoctorDetails />} />
        <Route path="/update-donor/:email" element={<UpdateDonor />} />
        <Route path="/delete-doctor/:email" element={<DeleteDoctor />} />
        <Route path="/update-doctor/:email" element={<UpdateDoctor />} />
        <Route path="/register-doctor" element={<RegisterDoctor />} />
        <Route path="/centers/:email" element={<Centers />} />
        <Route path="/make-appointment/:email/:id" element={<Appointment />} />
        <Route path="/donor-appointments/:email" element={<DonorAppointments />} />
        
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
