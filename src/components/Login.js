import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Alert } from "./Alert";
import { useState } from "react";

export function Login() {

    const navigate = useNavigate();
    const {loginWithGoogle} = useAuth();
    const [error, setError] = useState("");
    const handleLoginWithGoogle = async () => {
        try{
            await loginWithGoogle();
            navigate("/chat");
        }catch(e){
            //console.error(e);
            setError(e)
        }

    };

    return(
    <div className="header">
        {error && <Alert message={error}/>}
        <h1>Login</h1>
        <button onClick={handleLoginWithGoogle}>Log in with Google</button>
    </div>
    );
}