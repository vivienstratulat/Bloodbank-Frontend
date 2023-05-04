import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams, Link } from "react-router-dom";

function DoctorHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const [doctor, setDoctor] = useState();
  const [appointments, setAppointments] = useState([]);
  const[id,setId]=useState();
  const email = location.state.email;


  const getDoctor = async () => {
    const res = await axios.get(`http://localhost:8080/donor/${email}`);
    setDoctor(res.data);
  };

  const loadAppointments = async () => {
    const result = await axios.get(
      `http://localhost:8080/appointment/doctor/${email}`
    );
    setAppointments(result.data);
  };

  async function confirm(event) {
    event.preventDefault();
    try {
      await axios.post(
        `http://localhost:8080/doctor/confirmAppointment/${event.target.value}`,
        {
          confirmed: "true",
        }
      );
      alert("Appointment confirmed");
      // navigate(`/donor-appointments/${email}`);
      
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getDoctor();
    loadAppointments();
  });

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
              <th>Donor</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{appointment.datetime}</td>
                <td>{appointment.center.name}</td>
                <td>
                  <div>{appointment.donor.lastName}</div>
                </td>
                <td>
                  <div>{appointment.confirmed}</div>
                </td>
                <td>
                  <button
                   
                    type="submit"
                    class="btn btn-primary mt-4" 
                    value={appointment.id}
                    onClick={confirm} 
                  >
                    Confirm
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DoctorHome;
