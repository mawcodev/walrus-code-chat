import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert } from "./Alert";
import Avatar from "./Avatar";
import Chat from "./Chat";

export function Home ()
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
            <div>
                <h1>Walrus Code</h1>
                <p>Welcome, {user.displayName}!</p>
                <button onClick={handleLogOut}>LOG OUT</button>
            </div>
            <div>
                <Avatar user={user}/>
                <p>{user.displayName}</p>
            </div>
            <div>
                <h2>WALCHAT</h2>
                <Chat/>
            </div>
        </div>
        );
}