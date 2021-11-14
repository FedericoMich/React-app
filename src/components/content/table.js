import React from 'react'
import { User } from './user'

export const TableStudents = (props) => {

    const dataTable = props.listUser
    const user = dataTable.map((repo) => <User key={repo.code} value={repo}/>)
    return (
        <div className="content">
            <table>
                <tbody>
                    <tr className="headingTable">
                        <th>Cognome</th>
                        <th>Nome</th>
                        <th>Utente githb</th>
                        <th>Nome repo</th>
                        <th>Totale commit</th>
                        <th>Data creazione</th>
                        <th>Ultimo aggiornamento</th>
                        <th>Dettagli</th>
                    </tr>
                  {user}
                </tbody>
            </table>
        </div>
    )
}
