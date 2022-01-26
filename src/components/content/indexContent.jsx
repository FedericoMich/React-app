import React from 'react'
import "./content.css"
import { TableStudents } from './table'
import { useRepos } from '../../hooks/useRepos'
import Divider from '@mui/material/Divider';
import LogoBlack from '../../images/logoblack.png'
import { LoopSkeleton } from '../../layout/Loading/loading'
import { HeaderContent } from '../HeaderContent/headerContent';

export const IndexContent = () => {
    const {repos, loading, onError, handelUpdate} = useRepos();
 
    return (
        <div className="mainContainer">
            <HeaderContent repos={repos} handelUpdate={handelUpdate} loading={loading}/>
            {loading && <LoopSkeleton/>}
            {repos && !loading && (<TableStudents listUser={repos}/>)}
            {onError &&  !repos && <div className='errorContainer'><h1 class="error">Server Error</h1></div>}
            {<Divider><img className="LogoGitClassDivider" alt="LogoGitClass" src={LogoBlack} /></Divider>}
        </div>
    )
}
