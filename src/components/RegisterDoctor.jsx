import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterDoctor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [center,setCenter] = useState("");
  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/doctor/register",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          center: center,
          role: "DOCTOR",
        }
      );

      alert("User created successfully");
      navigate("/login");
    } catch (error) {
      alert(opaaa);
    }
  }

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        
        <div >
          <h1 className="text-center m-4">Register doctor</h1>

          <form>
            <div class="form-group">
            <b> <label>First Name</label></b>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder="FirstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>

            <div class="form-group">
              <b><label>Last Name</label></b>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder="Enter LastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div class="form-group">
             <b> <label>Email</label></b>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div class="form-group">
             <b> <label>Password</label></b>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>


            <div class="form-group">
             <b> <label>Center</label></b>
              <input
                type="text"
                class="form-control"
                id="center"
                placeholder="Enter Location"
                value={center}
                onChange={(event) => setCenter(event.target.value)}
              />
            </div>

            <button type="submit" class="btn btn-primary mt-4" onClick={save}>
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegisterDoctor;
