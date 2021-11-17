import React, { useState } from 'react'

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

    return (
        <>
            <tr style={{ background: color }} className="contentTable" onClick={() => handleDetails()}>
                <td>{props.value.surname}</td>
                <td>{props.value.name}</td>
                <td>{props.value.login}</td>
                <td>{props.value.repoName}</td>
                <td>3</td>
                <td>{props.value.creationDate}</td>
                <td>{props.value.lastUpdate}</td>
            </tr>

            {visible && <tr className="contentTableDetails">
            <td>{props.value.surname}</td>
                <td>{props.value.name}</td>
                <td>{props.value.login}</td>
                <td>{props.value.repoName}</td>
                <td>3</td>
                <td>{props.value.creationDate}</td>
                <td>{props.value.lastUpdate}</td>
            </tr>}
        </>
    )
}
