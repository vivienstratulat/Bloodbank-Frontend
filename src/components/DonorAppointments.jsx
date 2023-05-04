import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function DonorAppointments() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  const { email } = useParams();
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    //email: "",
    password: "",
    bloodType: "",
    location: "",
    role: "",
  });
  const { id, firstName, lastName, password, bloodType, location } = user;

  // const naviCenter=(center)=>{
  // navigate(`/make-appointment/${email}`, {state:{ centerId: center.id }})};

  const getUser = async () => {
    const res = await axios.get(`http://localhost:8080/donor/${email}`);
    setUser(res.data);
  };

  const loadAppointments = async () => {
    const result = await axios.get(
      `http://localhost:8080/appointment/${email}`
    );
    setAppointments(result.data);
  };

  useEffect(() => {
    loadAppointments();
    getUser();
  }, []);

  return (
    <div className="container">
      <div className="py-4">
        <b>
          <h1 className="text-center m-4">Your appointments</h1>
        </b>
        <table className="table border shadow">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Center</th>
              <th>Doctor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{appointment.date}</td>
                <td>{appointment.center.name}</td>
                <td>
                  <div>{appointment.doctor.lastName}</div>
                </td>
                <td>{appointment.confirmed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DonorAppointments;
