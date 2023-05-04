import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./ui/Card";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      const url = "http://localhost:8080/user/login";
      const data = { email: email, password: password };
      const config = { "content-type": "application/json" };
      const res = await axios.post(url, data, config);

      console.log(res);
      const myUser = res.data;
      setUser(myUser);
      console.log(myUser.name);

      if (myUser.role == "DONOR") {
        alert("hello donor");
        navigate("/donorhome", { state: { email: myUser.email } });
      }
      if (myUser.role == "ADMIN") {
        alert("hello admin");
        navigate("/adminHome", { state: { email: myUser.email } });
      }
      if (myUser.role == "DOCTOR") {
        navigate("/doctorhome",{ state: { email: myUser.email } });
        alert("hello doctor");
      }
    } catch (err) {
      alert("Wrong credentials!");
    }
  }

  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <div className="row">
          <b>
            <h2 className="text-center m-4">Login</h2>
          </b>
          <hr />
        </div>

        <div class="row">
          <div class="col-sm-6">
            <form>
              <div class="form-group">
                <b>
                  <label>Email</label>
                </b>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter Name"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div class="form-group">
                <b>
                  {" "}
                  <label>Password</label>
                </b>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <button type="submit" class="btn btn-primary" onClick={login}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
