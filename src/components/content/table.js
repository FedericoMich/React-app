import React from 'react'
import { User } from './user'

export const Table = () => {
    return (
        <div className="content">
        <table>
            <tr className="headingTable">
                <th>Cognome</th>
                <th>Nome</th>
                <th>Utente githb</th>
                <th>Nome repo</th>
                <th>Totale commit</th>
                <th>Data creazione</th>
                <th>Ultimo aggiornamento</th>
            </tr>
            <User />
        </table>
    </div>
    )
}
