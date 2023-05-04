import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

function Appointment() {
  const navigate = useNavigate();
  const { email, id } = useParams();

  //console.log(id);
  // console.log(email);
  const [date, setDate] = useState("");
  const [center, setCenter] = useState({
    id: "",
    name: "",
    capacity: "",
  })

  const [user, setUser] = useState({
    //  id: "",
    firstName: "",
    lastName: "",
    //email: "",
    password: "",
    bloodType: "",
    location: "",
    role: "",
  });

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/appointment/create", {
        datetime: date,
        center: center,
        donor: user,
        confirmed: "lalalal",
      });
      alert("Appointment created");
      navigate(`/donor-appointments/${email}`);
    } catch (err) {
      console.log(err);
      alert("The center is full");
    }
  }


  const getUser = async () => {
    const res = await axios.get(`http://localhost:8080/donor/${email}`);
    setUser(res.data);
  };

  const getCenter = async () => {
    const rez = await axios.get(`http://localhost:8080/center/${id}`);
    setCenter(rez.data);
  };

  useEffect(() => {
    getUser();
    getCenter();
  }, []);

  const { firstName, lastName, password, bloodType, location } = user;
  const { name, capacity } = center;

  return (
    <div className="container">
      <div>
        <b>
          {" "}
          <h1 className="text-center m-4">{center.name}</h1>
        </b>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Appointment</h2>
          <div className="card">
            <div>
              <p>Choose date</p>
              <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
              />
            </div>
            <button type="submit" class="btn btn-primary mt-4" onClick={save}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
