import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "./Alert";

export function Chat ()
{
    const {user, logout, loading} = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    //console.log(user);

    const handleLogOut = async () => {
        try{
            await logout();
            navigate("/");
        }catch(e){
            //console.error(e);
            setError(e);
        }
    };

    if(loading) return <h1>loading</h1>

    return(
        <div>
            {error && <Alert message={error}/>}
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