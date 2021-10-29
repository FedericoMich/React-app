import React from 'react'
import "./indexContent.css"
import { User } from './user'

export const IndexContent = () => {
    return (
        <div className="mainContainer">
            <div className="totalContainer">
                <h4 className="total">Totale repos: 10</h4>
            </div>
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
                        <User/>
                </table>
            </div>
            <div className="pageCount">
                <div className="blueButtom">
                    <h4 className="buttom">precendente</h4>
                    <h4 className="buttom">2 di 4</h4>
                    <h4 className="buttom">Successivo</h4>
                </div>
            </div>
        </div>
    )
}
