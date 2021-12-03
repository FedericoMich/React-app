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



export const User = (props) => {
    const currentDate = props.value.creationDate
    const lastUpdate = props.value.lastUpdate

    const date = DateTime.fromISO(currentDate)
    const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);
    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);

    const [open, setOpen] = React.useState(false);

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
                <TableCell>1</TableCell>
                <TableCell>{humanReadableCreation}</TableCell>
                <TableCell>{humanReadableUpdate}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={10}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 0 }}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <IconButton
                                                aria-label="expand row"
                                                size="small"
                                                onClick={() => setOpen(!open)}
                                            >
                                                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            </IconButton>
                                        </TableCell>
                                        <TableCell>{props.value.surname}</TableCell>
                                        <TableCell>{props.value.name}</TableCell>
                                        <TableCell>{props.value.login}</TableCell>
                                        <TableCell>{props.value.repoName}</TableCell>
                                        <TableCell>1</TableCell>
                                        <TableCell>{humanReadableCreation}</TableCell>
                                        <TableCell>{humanReadableUpdate}</TableCell>
                                    </TableRow>
                                </TableHead>

                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
