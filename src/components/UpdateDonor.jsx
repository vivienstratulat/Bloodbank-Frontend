import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const { email } = useParams();

  const [user, setUser] = useState({
    bloodType: "",
    location: "",
    firstName: "",
    lastName: "",
    password: "",
  });


  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/donor/update/${email}`, {
        firstName: firstName,
        lastName: lastName,
        email: user.email,
        password: password,
        location:location,
        role:"DONOR",
        bloodType:user.bloodType,
        email:email
      });
    navigate("/donorhome",{ state: { email: user.email }});
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/donor/${email}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit your account</h2>

          <form onSubmit={(e) => onSubmit(e)}>
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
             <b> <label>Location</label></b>
              <input
                type="text"
                class="form-control"
                id="location"
                placeholder="Enter location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </div>

            <button type="submit" class="btn btn-primary mt-4" onClick={onSubmit}>
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
