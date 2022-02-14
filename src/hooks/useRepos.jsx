import { useState, useEffect, useContext } from 'react'
import { listRepos } from "../api/repos"
import { useNavigate } from "react-router-dom";
import { User } from "../context/UserContext";



export const useRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);
    const { user, setUser } = useContext(User);

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
            if (user[0].session === false) {
                navigate("/")
                console.log("redirect OK")
            }
        }
        isAuth();
    }, [navigate, user]);



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

    
    return { repos, loading, onError, handelUpdate, setUser };
}