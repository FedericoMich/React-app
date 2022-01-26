import * as React from 'react';
import { DateTime } from 'luxon';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function DetailsCard(props) {
    const [singleValues] = props.fiteredDetails;

    const currentDate = singleValues.creationDate
    const lastUpdate = singleValues.lastUpdate
    const date = DateTime.fromISO(currentDate)
    const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);
    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    {singleValues.surname} {singleValues.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Data creazione:{humanReadableCreation}
                    <br />
                    Ultimo aggiornamento:{humanReadableUpdate}
                </Typography>
                <Typography variant="body2">
                    Nome GitHub: {singleValues.login}
                    <br />
                    Nome Repository: {singleValues.repoName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a href={`https://github.com/${singleValues.login}/${singleValues.repoName}`}>Apri in Git</a></Button>
            </CardActions>
        </React.Fragment>
    );


    return (
        <div className='detailsContainer'>
            <Box sx={{ minWidth: 275, width: 600, height: 400, }}>
                <Card variant="outlined">{card}</Card>
            </Box>
        </div>
    );
}

