import './login.css'
import { Link } from "react-router-dom";
import logo from "../../images/logowhite.png"

export const Login = () => {

    
    return (
        <div className="loginContainer">
            <div className="loginform">
                <div className="loginImgContainer">
                    <img className="loginImg" src={logo} alt="logo" />
                </div>
                <input className="loginInput" type="text" placeholder="Username" />
                <input className="loginInput" type="text" placeholder="Password" />
                <Link to="/repos"><button class="bn632-hover bn28">Login</button></Link>
            </div>
        </div>
    )
};

