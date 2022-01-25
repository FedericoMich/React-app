import * as React from 'react';
import { DateTime } from 'luxon';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
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

    const actions = [
        { value:'right',name: 'Dettagli', icon:<Link to={'/dettagli/' + props.value.idRepo} value={props.value}><ReadMoreIcon/></Link>},
        {value:'right', name: 'GitHub', icon:<a href={`https://github.com/${props.value.login}/${props.value.repoName}`}><GitHubIcon/></a>}];


    const date = DateTime.fromISO(currentDate)
    const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);
    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);

    const [open, setOpen] = React.useState(false);

    const [openMore, setOpenMore] = React.useState(false);
    const handleOpen = () => setOpenMore(true);
    const handleClose = () => setOpenMore(false);

    return (
        <>
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
                <TableCell>{Math.floor(Math.random() * 10)}</TableCell>
                <TableCell>{humanReadableCreation}</TableCell>
                <TableCell>{humanReadableUpdate}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ height: 330, padding: 5, transform: 'translateZ(0px)', flexGrow: 1 }}>
                            <Table size="small" aria-label="purchases">

                                <TableRow>
                                    <Backdrop open={openMore} />
                                    <SpeedDial
                                        ariaLabel="direction"
                                        sx={{ position: 'absolute', bottom: 16, left: 10 }}
                                        icon={<SpeedDialIcon />}
                                        onClose={handleClose}
                                        onOpen={handleOpen}
                                        open={openMore}
                                    >
                                        {actions.map((action) => (
                                            <SpeedDialAction
                                                key={action.name}
                                                icon={action.icon}
                                                tooltipTitle={action.name}
                                                tooltipOpen
                                                tooltipPlacement={'right'}
                                                onClick={handleClose} />))}

                                    </SpeedDial>
                                </TableRow>

                                <TableRow>
                                    <TableCell>{props.value.surname}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{props.value.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{props.value.login}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{props.value.repoName}</TableCell>
                                </TableRow>
                                <TableCell>{Math.floor(Math.random() * 10)}</TableCell>
                                <TableRow>
                                    <TableCell>{humanReadableCreation}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>{humanReadableUpdate}</TableCell>
                                </TableRow>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}
