import { Link } from "react-router-dom";
import logo from "../../images/logowhite.png"
import './notFound.css'


export const NotFound = () => {

    return (
        <div className="loginContainer">
            <div className="loginform">
                <div className="loginImgContainer">
                    <img className="loginImg" src={logo} alt="logo" />
                </div>
                <div>
                    <h2 className="notFoundh2">Page not found</h2>
                </div>
                <div>
                    <Link to="/"> back to home </Link>
                </div>
            </div>
        </div>
    )
};
