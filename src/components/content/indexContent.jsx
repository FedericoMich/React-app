import React from 'react'
import "./content.css"
import { TableStudents } from './table'
import { useRepos } from '../../hooks/useRepos'
import Divider from '@mui/material/Divider';
import LogoBlack from '../../images/logoblack.png'
import { LoopSkeleton } from '../../layout/Loading/loading'
import { HeaderContent } from '../HeaderContent/headerContent';
import { useSearchParams } from 'react-router-dom';


export const IndexContent = () => {
    const { repos, loading, onError, handelUpdate } = useRepos();

    const [SearchParams] = useSearchParams();
    const toFilter = SearchParams.get("surname")

    const filteredRepos = repos.filter(surname => {
        return surname.surname.toLowerCase().includes(toFilter)
    })


    return (
        <div className="mainContainer">
            <HeaderContent repos={repos} handelUpdate={handelUpdate} loading={loading} />
            {loading && <LoopSkeleton />}
            {repos && !loading && (<TableStudents listUser={toFilter === null ? repos : filteredRepos} />)}
            {onError && !repos && <div className='errorContainer'><h1 class="error">Server Error</h1></div>}
            {<Divider><img className="LogoGitClassDivider" alt="LogoGitClass" src={LogoBlack} /></Divider>}
        </div>
    )
}
