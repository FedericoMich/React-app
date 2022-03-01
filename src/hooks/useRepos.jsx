import { useState, useEffect, useContext } from 'react'
import { listRepos } from "../api/apiRepos"
import { useNavigate } from "react-router-dom";
import { User } from "../context/UserContext";



export const useRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);
    const { log } = useContext(User);

    const navigate = useNavigate();

    useEffect(() => {
        const populate = async () => {
            try {
                setRepos(await listRepos())
                setLoading(false)
            } catch (err) {
                setOnError(true);
                setLoading(false)
            }
        }
        populate()
    }, [])


    useEffect(() => {
        const isAuth = () => {
            if (log !== true) {
                navigate("/")
                console.log("redirect OK")
            }
        }
        isAuth();
    }, [navigate, log]);



    const handelUpdate = async () => {
        setLoading(true)
        try {
            setRepos(await listRepos())
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }

    
    return { repos, loading, onError, handelUpdate};
}