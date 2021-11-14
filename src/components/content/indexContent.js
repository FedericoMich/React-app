import React, { useState } from 'react'
import "./indexContent.css"
import { Search } from './search'
import { TableStudents } from './table'
import listRepos from "../../api/repos"
import { DropdownFilter } from './dropdown'



export const IndexContent = () => {

    const [repos, setRepos] = useState(listRepos());

    return (
        <div className="mainContainer">
            <div className="totalContainer">
                <h4 className="total">Totale repos: {repos.length}</h4>
                <DropdownFilter/>
                <Search />
            </div>
            <TableStudents listUser={repos} />
        </div>
    )
}
