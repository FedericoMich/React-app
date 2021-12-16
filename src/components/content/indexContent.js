import React, { useState, useEffect } from 'react'
import "./indexContent.css"
import { TableStudents } from './table'
import { listRepos } from "../../api/repos"
import { DropdownFilter } from './dropdown'
import minusLogo from '../../images/minus_button.png'
import refreshIcon from '../../images/refreshIcon.png'
import Divider from '@mui/material/Divider';
import Logo from '../../images/logo.png'

export const IndexContent = () => {
    const [repos, setRepos] = useState(undefined);

    useEffect(() => {
        const populate = async () => {
            setRepos(await listRepos())
        }
        populate()
    }, [])

    const handelUpdate = async () => {
        setRepos(await listRepos())
    }
    const handelCollapse = () => {
        setRepos(undefined)
    }


    return (
        <div className="mainContainer">
            <div className="totalContainer">
                <h4 className="total">Totale repos: {repos && (repos.length)}</h4>
                <DropdownFilter />
            </div>
            <div className="tableButton">
                
                <img className="minusButtonLogo" alt="/" src={refreshIcon} onClick={() => handelUpdate()} />
                <img className="minusButtonLogo" alt="/" src={minusLogo} onClick={() => handelCollapse()} />
            </div>
            <Divider>
            <img className="LogoGitClassDivider" alt="/" src={Logo}/>
            </Divider>
            {repos && (<TableStudents listUser={repos} />
            )
            }
        </div>
    )
}
