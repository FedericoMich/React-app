import React from 'react'
import { Buttom } from './buttom'
import "./indexContent.css"
import { Search } from './search'
import { Table } from './table'

export const IndexContent = () => {
    return (
        <div className="mainContainer">
            <div className="totalContainer">
                <h4 className="total">Totale repos: 10</h4>
                <Search />
            </div>
            <Table />
            <Buttom />

        </div>
    )
}
