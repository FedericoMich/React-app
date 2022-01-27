import * as React from 'react';
import { DateTime } from 'luxon';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CommitCard } from './commitCard';
import { RefreshBtn } from '../HeaderContent/RefreshBtn';


export function DetailsCard(props) {
    const detailRepos = props.detailRepos;

    const currentDate = detailRepos.creationDate
    const lastUpdate = detailRepos.lastUpdate
    const date = DateTime.fromISO(currentDate)
    const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);
    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);

    const commitCard = detailRepos.commits.map((row) => (
        <CommitCard value={row} key={row.committer.date} />
    ))

    const headerCard = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    <div className="nameAndButtonContainer">
                        {detailRepos.surname} {detailRepos.name}

                    </div>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Data creazione: {humanReadableCreation}
                    <br />
                    Ultimo aggiornamento: {humanReadableUpdate}
                </Typography>
                <Typography variant="body2">
                    Nome GitHub: {detailRepos.login}
                    <br />
                    Nome Repository: {detailRepos.repoName}
                    <br />
                    htmlUrl: {detailRepos.htmlUrl}
                    <br />
                    idRepo: {detailRepos.idRepo}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a href={`https://github.com/${detailRepos.login}/${detailRepos.repoName}`}>Apri in Git</a></Button>
            </CardActions>
            <div className="buttonAndCounterContainer">
                    <RefreshBtn handelUpdate={props.handelUpdate} loading={props.loading} />
                    <p className='totaleCommit'>Totale Commit: {props.detailRepos.commits.length}</p>
            </div>
        </React.Fragment>
    );

    return (
        <div className='detailsContainer'>
            <div className="headerContainer">
                {headerCard}
            </div>
            <div className="commitsContainer">
                {commitCard}
            </div>
        </div >
    );
}

