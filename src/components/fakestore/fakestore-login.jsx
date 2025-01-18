import { useState } from "react";
import { Cookies, useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export function FakestoreLogin(){

    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    const [username, setUsername] = useState();
    const navigate = useNavigate();

    function handleNameChange(e){
        setUsername(e.target.value);
    }

    function handleLoginClick(){
        setCookie('username', username);
        navigate('/home');
    }


    
    return(
        <div>
            <dl>
                <h4>User Login</h4>
                <dt>User Name</dt>
                <dd><input onChange={handleNameChange} type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>

            </dl>
            <button onClick={handleLoginClick} className="btn btn-warning">Login</button>
        </div>
    )
}