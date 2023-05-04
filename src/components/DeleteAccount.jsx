import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

function DeleteAccount()
{
    const navigate = useNavigate();
    const { email } = useParams();
    const deleteAcc = async() =>
    {
        await axios.post(`http://localhost:8080/donor/delete/${email}`);
        navigate("/");
    }
    
    return (
        <div>
            <h1>Are you sure you want to delete this account</h1>
            <p>Press here to permanently delete your account</p>
            <button className="btn btn-outline-primary mx-2" onClick={deleteAcc}>Delete</button>
        </div>
        

    );
}
export default DeleteAccount;