import React from 'react'
import { DropdownFilter } from './dropdown'
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';


export const HeaderContent = (props) => {

    return (
        <div className="HeaderContentContainer">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                <Grid item xs>
                        <div className="tableButton">
                            <Button style={{
                                borderRadius: 35,
                                color: "#0d2137",
                                borderColor: "#0d2137",
                                padding: "12px 30px",
                                fontSize: "16px"
                            }}
                                variant="outlined" onClick={() => props.handelUpdate()} startIcon={<FindReplaceIcon />}>
                                Refresh
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <DropdownFilter />
                    </Grid>
                    <Grid item xs>
                            <h4 className="total">Totale repos: {!props.loading ? (props.repos.length) : <CircularProgress color="inherit"/>}</h4>
                    </Grid>
                   
                </Grid>
            </Box>
        </div>
    );
}

