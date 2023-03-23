import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export function Login() {

    const navigate = useNavigate();
    const {loginWithGoogle} = useAuth();

    const handleLoginWithGoogle = async () => {
        await loginWithGoogle();
        navigate("/chat");
    };

    return(
    <div>
        <h1>Login</h1>
        <button onClick={handleLoginWithGoogle}>Log in with Google</button>
    </div>
    );
}