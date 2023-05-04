import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function DonatorAccount() {
  const navigate = useNavigate();

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
  const { id, firstName, lastName, password, bloodType,location } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loadDonator = async () => {

    const result = await axios.get(`http://localhost:8080/donor/${email}`);
    setUser(result.data);
  };
  useEffect(() => {
    loadDonator();
  }, []);

  
  return (
    <div className="container">
      <div>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <b>
            {" "}
            <h2 className="text-center m-4">Account details</h2>
          </b>

          <div className="card">
            <div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.firstName}
                </li>
                <li className="list-group-item">
                  <b>Location:</b>
                  {user.location}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Password:</b>
                  {user.password}
                </li>
                <li className="list-group-item">
                  <b>BloodType:</b>
                  {user.bloodType} 
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={`/`}>
            Home
          </Link>
          <Link className="btn btn-primary mx-2" to={`/update-donor/${email}`}>
            Edit Account
          </Link>
          <Link className="btn btn-primary mx-2" to={`/delete-acc/${email}`}>
            Delete Account
          </Link>
        </div>
      </div>
    </div>
  );
}
export default DonatorAccount;
