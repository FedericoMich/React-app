import * as React from 'react';
import { TableContentRow } from './TableContentRow'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export function TableStudents(props) {
    const dataTable = props.listUser

    const myuser = dataTable.map((row) => (
        <TableContentRow value={row} key={row.idRepo} />
    ))
    
    return (
        <div className='tableContainer'>
            <TableContainer component={Paper}>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Cognome</TableCell>
                            <TableCell>Nome</TableCell>
                            <TableCell>Utente githb</TableCell>
                            <TableCell>Nome repo</TableCell>
                            <TableCell>Totale commit</TableCell>
                            <TableCell>Data creazione</TableCell>
                            <TableCell>Ultimo aggiornamento</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myuser}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

