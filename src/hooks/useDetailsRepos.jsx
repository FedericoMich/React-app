import { useState, useEffect, useContext } from 'react'
import { listDetailRepos } from "../api/apiRepos"
import { useNavigate } from "react-router-dom";
import { User } from "../context/UserContext";


export const useDetailRepos = ( login, repoName ) => {
    const [detailRepos, setDetailRepos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);
    const { log } = useContext(User);

    const navigate = useNavigate();


    useEffect(() => {
        const isAuth = () => {
            if (log !== true) {
                navigate("/")
                console.log("redirect OK")
            }
        }
        isAuth();
    }, [navigate, log]);



    useEffect(() => {
        const populate = async () => {
            try {
                setDetailRepos(await listDetailRepos( login, repoName ))
                setLoading(false)
            } catch (err) {
                setOnError(true);
                setLoading(false)
            }
        }
        populate()
    }, [login, repoName])

    const handelUpdate = async () => {
        setLoading(true)
        try {
            setDetailRepos(await listDetailRepos( login, repoName ))
            setLoading(false)
        } catch (err) {
            setOnError(true);
            setLoading(false)
        }
    }

    return { detailRepos, loading, onError, handelUpdate };
}