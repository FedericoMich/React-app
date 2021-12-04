import * as React from 'react';
import { DateTime } from 'luxon';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
];


export const User = (props) => {
    const currentDate = props.value.creationDate
    const lastUpdate = props.value.lastUpdate

    const date = DateTime.fromISO(currentDate)
    const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);
    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);

    const [open, setOpen] = React.useState(false);

    const [openMore, setOpenMore] = React.useState(false);
    const handleOpen = () => setOpenMore(true);
    const handleClose = () => setOpenMore(false);

    return (
        <React.Fragment>
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
                        <Box sx={{ height: 330, padding:5, transform: 'translateZ(0px)', flexGrow: 1 }}>
                            <Table size="small" aria-label="purchases">

                                <TableRow>
                                    <Backdrop open={openMore} />
                                    <SpeedDial
                                        ariaLabel="direction"
                                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
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
        </React.Fragment>
    );
}
