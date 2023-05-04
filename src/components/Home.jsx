import { useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
function Home() {
  const navigate = useNavigate();

  function goToLoginPage() {
    navigate("/login");
  }
  function goToRegisterPage() {
    navigate("/register");
  }
  return (
    <div className="container">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
     <b> <h1 className="text-center m-4">Home</h1> </b>
      <button
        color="blue"
        text="Login"
        onClick={goToLoginPage}
        className="btn btn-primary mx-2"
      >
        Login
      </button>
      <button
        className="btn btn-primary mx-2"
        color="blue"
        text="Register"
        onClick={goToRegisterPage}
      >
        Register
      </button>
    </div>
    </div>
  );
}

export default Home;
