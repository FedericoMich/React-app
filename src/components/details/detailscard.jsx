import * as React from 'react';
import { DateTime } from 'luxon';


export function DetailsCard(props) {
    const [singleValues] = props.fiteredDetails;

    const currentDate = singleValues.creationDate
    const lastUpdate = singleValues.lastUpdate
    const date = DateTime.fromISO(currentDate)
    const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);
    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);

    return (
        <div>
            {singleValues.surname}
            {singleValues.name}
            {singleValues.login}
            {singleValues.repoName}
            {Math.floor(Math.random() * 10)}
            {humanReadableCreation}
            {humanReadableUpdate}
        </div >
    );
}

