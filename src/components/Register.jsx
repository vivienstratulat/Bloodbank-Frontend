import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bloodType, setBloodtype] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  async function save(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/donor/register",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          bloodType: bloodType,
          location: location,
          role: "DONOR",
        }
      );

      alert("User created successfully");
      navigate("/login");
    } catch (error) {
      alert(opaaa);
    }
  }

  return (
    <div>
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        
        <div >
          <h1 className="text-center m-4">Donor Registration</h1>

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


             {/* <div class="form-group">
              <label>BloodType</label>
              <select
                class="form-control"
                id="bloodtype"
                onChange={(event) => setBloodtype(event.target.value)}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>

                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>

                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>  */}

             <div class="form-group">
             <b> <label>BloodType</label></b>
              <input
                type="text"
                class="form-control"
                id="bloodtype"
                placeholder="Enter BloodType"
                value={bloodType}
                onChange={(event) => setBloodtype(event.target.value)}
              />
            </div> 

            <div class="form-group">
             <b> <label>Location</label></b>
              <input
                type="text"
                class="form-control"
                id="location"
                placeholder="Enter Location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
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
export default Register;
