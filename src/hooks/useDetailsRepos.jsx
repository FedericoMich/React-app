import { useState, useEffect } from 'react'
import { listDetailRepos } from "../api/detailRepos"


export const useDetailRepos = ( login, repoName ) => {
    const [detailRepos, setDetailRepos] = useState([]);
    const [loading, setLoading] = useState(true)
    const [onError, setOnError] = useState(false);
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