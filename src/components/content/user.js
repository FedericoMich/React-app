import React, { useState } from 'react'

export const User = (props) => {

    const [visible, setVisible] = useState(false)
    const [color, setColor] = useState('');

    function handleColor() {
        if (color === "") {
            { setColor('#ceebf1') }
        }
        else { setColor("") }
    }
    function handleDetails() {
        if (visible === false) {
            setVisible(true)
        }
        else { setVisible(false) }
    }
    function handleCloseDetails() {
        { setVisible(false) }
    }

    return (
        <>
            <tr style={{ background: color }} className="contentTable" onClick={() => handleColor()}>
                <td>{props.value.surname}</td>
                <td>{props.value.name}</td>
                <td>{props.value.github_user}</td>
                <td>{props.value.repo_name}</td>
                <td>6</td>
                <td>{props.value.creation_date}</td>
                <td>{props.value.last_update}</td>
                <td><button onClick={() => handleDetails()}>Dettagli</button></td>
            </tr>

            {visible && <tr className="contentTable">
                <td>{props.value.surname}</td>
                <td>{props.value.name}</td>
                <td>{props.value.github_user}</td>
                <td>{props.value.repo_name}</td>
                <td>6</td>
                <td>{props.value.creation_date}</td>
                <td>{props.value.last_update}</td>
                <button onClick={() => handleCloseDetails()}>close</button>
            </tr>}
        </>
    )
}
