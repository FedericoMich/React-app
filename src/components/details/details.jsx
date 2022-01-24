import * as React from 'react';
import { DateTime } from 'luxon';


export const Details = (props) => {

    const currentDate = props.value.creationDate
    const lastUpdate = props.value.lastUpdate
    const date = DateTime.fromISO(currentDate)
    const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);
    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);

    return (
        <>
                {props.value.surname}
                {props.value.name}
                {props.value.login}
                {props.value.repoName}
                {Math.floor(Math.random() * 10)}
                {humanReadableCreation}
                {humanReadableUpdate}
        </>
    );
}
