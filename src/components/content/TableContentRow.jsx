import React, { useState } from 'react';
import { DateTime } from 'luxon';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from "react-router-dom";



export const TableContentRow = (props) => {
    const currentDate = props.value.creationDate
    const lastUpdate = props.value.lastUpdate

    const [open, setOpen] = useState(false);
    const [openMore, setOpenMore] = useState(false);


    const actions = [
        { id: 1, value: 'right', name: 'Dettagli', icon: <Link to={'/dettagli/'+ props.value.login +"/"+ props.value.repoName}><ReadMoreIcon /></Link> },
        { id: 2, value: 'right', name: 'GitHub', icon: <a href={`https://github.com/${props.value.login}/${props.value.repoName}`}><GitHubIcon /></a> }
    ];


    const date = DateTime.fromISO(currentDate)
    const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);
    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);


    const handleOpen = () => setOpenMore(true);
    const handleClose = () => setOpenMore(false);

    return (
        <TableBody>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{props.value.surname}</TableCell>
                <TableCell>{props.value.name}</TableCell>
                <TableCell>{props.value.login}</TableCell>
                <TableCell>{props.value.repoName}</TableCell>
                <TableCell>{humanReadableCreation}</TableCell>
                <TableCell>{humanReadableUpdate}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ height: 330, padding: 5, transform: 'translateZ(0px)', flexGrow: 1 }}>
                            <Table size="small" aria-label="purchases">
                                <Backdrop open={openMore} />
                                <SpeedDial
                                    ariaLabel="direction"
                                    sx={{ position: 'absolute', bottom: 10, left: 10 }}
                                    icon={<SpeedDialIcon />}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    open={openMore}
                                >
                                    {actions.map((action) => (
                                        <SpeedDialAction
                                            key={action.id}
                                            icon={action.icon}
                                            tooltipTitle={action.name}
                                            tooltipOpen
                                            tooltipPlacement={'right'}
                                            onClick={handleClose} />))}
                                </SpeedDial>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Alunno: <b>{props.value.surname} {props.value.name}</b></TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>Nome gitHub: <b>{props.value.login}</b></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Nome Repository: <b>{props.value.repoName}</b></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Creata il:<b> {humanReadableCreation}</b> <br></br> Aggiornata il: <b>{humanReadableUpdate}</b></TableCell>
                                    </TableRow>
                                </TableHead>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </TableBody>
    );
}
