import React from 'react'
import { DetailsCard } from './detailscard';
import { CardLoopSkeleton } from '../../layout/Loading/loading';
import './details.css'
import { useDetailRepos } from '../../hooks/useDetailsRepos';
import { useParams } from 'react-router-dom';


export const Details = () => {
    const { login, repoName } = useParams();
    const { detailRepos, loading, handelUpdate, onError } = useDetailRepos( login, repoName );
    

    return (
        <div className="mainContainer">
           {/* <button onClick={() => setUser(false)}>logout </button>*/}
            {detailRepos && !loading && (<DetailsCard detailRepos={detailRepos} handelUpdate={handelUpdate} loading={loading} />)}
            {onError && !detailRepos && <div className='errorContainer'><h1 class="error">Server Error</h1></div>}
            {loading && <CardLoopSkeleton />}
        </div>
    );
}