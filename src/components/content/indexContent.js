import React, { useState, useEffect } from 'react'
import "./indexContent.css"
import { TableStudents } from './table'
import { listRepos } from "../../api/repos"
import { DropdownFilter } from './dropdown'
import Divider from '@mui/material/Divider';
import LogoBlack from '../../images/logoblack.png'
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export const IndexContent = () => {
    const [repos, setRepos] = useState(undefined);

    useEffect(() => {
        const populate = async () => {
            setRepos(await listRepos())
        }
        populate()
    }, [])

    const handelUpdate = async () => {
        setRepos(await listRepos())
    }



    return (
        <div className="mainContainer">


            <div className="totalContainer">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <h4 className="total">Totale repos: {repos && (repos.length)}</h4>
                        </Grid>
                        <Grid item xs>
                            <DropdownFilter />
                        </Grid>
                        <Grid item xs>
                            <div className="tableButton">
                                <Button style={{
                                    borderRadius: 35,
                                    color: "#0d2137",
                                    borderColor:"#0d2137",
                                    padding: "12px 30px",
                                    fontSize: "16px"
                                }} 
                                variant="outlined" onClick={() => handelUpdate()}  startIcon={<FindReplaceIcon />}>
                                    Refresh  
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>


            <Divider><img className="LogoGitClassDivider" alt="/" src={LogoBlack} /></Divider>
            {repos && (<TableStudents listUser={repos} />
            )
            }

        </div>
    )
}
