import React from 'react'
import { DropdownFilter } from '../content/dropdown'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import { RefreshBtn } from './RefreshBtn';


export const HeaderContent = (props) => {

    return (
        <div className="HeaderContentContainer">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <RefreshBtn handelUpdate={props.handelUpdate} />
                    </Grid>
                    <Grid item xs>
                        <h4 className="total">Totale repos: {!props.loading ? (props.repos.length) : <CircularProgress color="inherit" />}</h4>
                    </Grid>
                    <Grid item xs>
                        <DropdownFilter />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

