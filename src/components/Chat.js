import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export function Chat ()
{
    const {user} = useAuth();
    const {logout} = useAuth();
    const navigate = useNavigate();
    //console.log(user);

    const handleLogOut = async () => {
        await logout();
        navigate("/");
    };

    return(
        <div>
            <div class="topbar">
                <h1>Walrus Code Chat</h1>
                <p>Welcome, {user.displayName}!</p>
                <button onClick={handleLogOut}>LOG OUT</button>
            </div>
            <div class="chat">

            </div>
        </div>
        );
}