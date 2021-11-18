
import React, { useState } from 'react'
import { DateTime } from 'luxon';

export const User = (props) => {

    const [visible, setVisible] = useState(false)
    const [color, setColor] = useState('');

    const handleColor = () => {
        if (color === "" ? setColor('#ceebf1') : setColor(""));
    }
    const handleDetails = () => {
        if (!visible) { setVisible(true) } else { setVisible(false) }
        handleColor();
    }

    const currentDate = props.value.creationDate
    const lastUpdate = props.value.lastUpdate

    const date = DateTime.fromISO(currentDate)
    const humanReadableCreation = date.toLocaleString(DateTime.DATETIME_MED);

    const date2 = DateTime.fromISO(lastUpdate)
    const humanReadableUpdate = date2.toLocaleString(DateTime.DATETIME_MED);


    return (
        <>
            <tr style={{ background: color }} className="contentTable" onClick={() => handleDetails()}>
                <td>{props.value.surname}</td>
                <td>{props.value.name}</td>
                <td>{props.value.login}</td>
                <td>{props.value.repoName}</td>
                <td>3</td>
                <td>{humanReadableCreation}</td>
                <td>{humanReadableUpdate}</td>
            </tr>

            {visible && <tr className="contentTableDetails">
                <td>{props.value.surname}</td>
                <td>{props.value.name}</td>
                <td>{props.value.login}</td>
                <td>{props.value.repoName}</td>
                <td>3</td>
                <td>{humanReadableCreation}</td>
                <td>{humanReadableUpdate}</td>
            </tr>}
        </>
    )
}
