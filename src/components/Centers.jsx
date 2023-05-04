import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Centers() {
  const navigate = useNavigate();
  const [centers, setCenters] = useState([]);
 
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
  
 // const naviCenter=(center)=>{
   // navigate(`/make-appointment/${email}`, {state:{ centerId: center.id }})};

  const getUser = async () => {
    const res = await axios.get(`http://localhost:8080/donor/${email}`);
    setUser(res.data);
  };

  const loadCenters = async () => {
    const result = await axios.get("http://localhost:8080/center/getAll");
    setCenters(result.data);
  };


  useEffect(() => {
    loadCenters();
    getUser();
   
  }, []);
 
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {centers.map((center, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{center.name}</td>
                <td>{center.capacity}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/make-appointment/${email}/${center.id}`}
                  >
                    Select
                  </Link>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Centers;
