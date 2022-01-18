import React from 'react'
import "./content.css"
import { TableStudents } from './table'
import { listRepos } from "../../api/repos"
import { useRepos } from '../../hooks/useRepos'
import Divider from '@mui/material/Divider';
import LogoBlack from '../../images/logoblack.png'
import { HeaderContent } from './headerContent'
import Skeleton from '@mui/material/Skeleton';

export const IndexContent = () => {
    const {repos, setRepos, loading, setLoading, onError} = useRepos();

    const handelUpdate = async () => {
        setLoading(true)
        setRepos(await listRepos())
        setLoading(false)
    }

    const loopskeleton = () => {
        let content = [];
        for (let i = 0; i < 15; i++) {
            content.push(
                <div className="nothingToShow">
                    <Skeleton animation="pulse" variant="rectangular" width={1400} height={40} style={{ 'borderRadius': '17px', 'margin': '10px' }} />
                </div>
            )
        }
        return content;
    }

    return (
        <div className="mainContainer">
            <HeaderContent repos={repos} handelUpdate={handelUpdate} loading={loading} />
            {<Divider><img className="LogoGitClassDivider" alt="LogoGitClass" src={LogoBlack} /></Divider>}
            {loading && loopskeleton()}
            {repos && !loading && (<TableStudents listUser={repos} />)}
            {onError &&  !repos && <div className='errorContainer'><h1 class="error">Server Error</h1></div>}
        </div>
    )
}
