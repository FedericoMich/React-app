import React, { useState, useEffect } from 'react'
import "./indexContent.css"
import { Search } from './search'
import { TableStudents } from './table'
import { listRepos } from "../../api/repos"
import { DropdownFilter } from './dropdown'
import minusButton from '../../images/minus_button.png'

export const IndexContent = () => {

    const [repos, setRepos] = useState(undefined);
    useEffect(() => {
        const populate = async () => {
            setRepos(await listRepos())
        }
        populate()
    }, [])

    return (
        <>
        {repos && (
            <div className="mainContainer">
                <div className="totalContainer">
                    <h4 className="total">Totale repos: {repos.length}</h4>
                    <DropdownFilter />
                    <Search />
                </div>
                <TableStudents listUser={repos} />
            </div>)
        }
        </>
    )
}
