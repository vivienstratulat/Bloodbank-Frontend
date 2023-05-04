import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    loadDoctors();
  });

  const loadDoctors = async () => {
    const result = await axios.get("http://localhost:8080/doctor/getAll");
    setDoctors(result.data);
  };

  const navigateToRegisterDoc = () => {
    navigate("/register-doctor");
  };
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th >ID</th>
              <th >Email</th>
              <th >Center</th>
              <th >FirstName</th>
              <th >LastName</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((user, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{user.email}</td>
                <td>{user.center}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/doctor-details/${user.email}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="btn btn-primary mx-2"
          onClick={navigateToRegisterDoc}
        >
          Add New Doctor
        </button>
      </div>
    </div>
  );
}
export default AdminHome;
