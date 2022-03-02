import { useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { User } from "../context/UserContext";


export const useAuth = () => {
    const { log } = useContext(User);
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = () => {
            if (log.session !== true) {
                navigate("/")
            }
        }
        isAuth();
    }, [navigate, log]);

}