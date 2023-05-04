import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams, Link } from "react-router-dom";
function DonorHome() {

  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  const email = location.state.email;
  const getUser = async () => {
    const res = await axios.get(`http://localhost:8080/donor/${email}`);
    setUser(res.data);
  };
  
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Donator Page</h1>
      <p>Welcome back Donator!</p>
      <Link className="btn btn-primary mx-2" to={`/account/${email}`}>
        Edit your account
      </Link>
      <Link
        
        className="btn btn-primary mx-2"
        to={`/centers/${email}`}
      >
        See centers
      </Link>
      <Link className="btn btn-primary my-2" to={`/`}>
            Home
          </Link>
          <Link className="btn btn-primary my-2" to={`/donor-appointments/${email}`}>
            See Appointments
          </Link>
    </div>
  );
}
export default DonorHome;
