import React, { useState, useEffect } from 'react'
import "./content.css"
import { TableStudents } from './table'
import { listRepos } from "../../api/repos"
import Divider from '@mui/material/Divider';
import LogoBlack from '../../images/logoblack.png'
import { HeaderContent } from './headerContent'
import Skeleton from '@mui/material/Skeleton';

export const IndexContent = () => {
    const [repos, setRepos] = useState(undefined);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const populate = async () => {
            setRepos(await listRepos())
            setLoading(false)
        }
        populate()
    }, [])

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
                    <Skeleton animation="pulse" variant="rectangular" width={1500} height={40} style={{ 'borderRadius': '20px', 'marginBottom': '15px' }} />
                </div>
            )
        }
        return content;
    }


    return (
        <div className="mainContainer">
            <HeaderContent repos={repos} handelUpdate={handelUpdate} />
            <Divider><img className="LogoGitClassDivider" alt="LogoGitClass" src={LogoBlack} /></Divider>
            {loading && loopskeleton()}
            {repos && (<TableStudents listUser={repos} />)}
        </div>
    )
}
