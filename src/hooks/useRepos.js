import { useState, useEffect } from 'react'
import { listRepos } from "../api/repos"


export const useRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);

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

    return { repos, setRepos, loading, setLoading, onError };
}
