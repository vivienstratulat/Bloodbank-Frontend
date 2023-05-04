import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [center, setCenter] = useState("");

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
    await axios.post(`http://localhost:8080/admin/update/${email}`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        center:center,
        role:"DOCTOR",
        email:email
      });
    navigate("/adminhome");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/doctor/${email}`);
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
                placeholder="Enter center"
                value={center}
                onChange={(event) => setCenter(event.target.value)}
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
