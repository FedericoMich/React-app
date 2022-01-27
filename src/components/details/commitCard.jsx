import * as React from 'react';
import { DateTime } from 'luxon';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export function CommitCard(props) {
    const detailRepos = props.value;

    const lastUpdate = detailRepos.committer.date
    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);

    return (
        <React.Fragment>
            <div className="commitCard">
                <Grid item xs={12}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {detailRepos.message} 
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            <br />
                            Ultimo aggiornamento: {humanReadableUpdate}
                        </Typography>
                        <Typography variant="body2">
                            Nome : {detailRepos.committer.name}
                            <br />
                            Email :{detailRepos.committer.email}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><a href={detailRepos.htmlUrlCommit}>Apri in Git</a></Button>
                    </CardActions>
                </Grid>
            </div>
        </React.Fragment>
    );
}

