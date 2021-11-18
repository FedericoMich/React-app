import React from 'react'

export const DropdownFilter = () => {
    return (
        <div className="dropdownMenu">
            <p className="classChose"><b>Choose a class:</b></p>
            <select name="class">
                <option value="">Fullstack Developer with Cloud Technologies </option>
                <option value="">Cloud Administrator e Security Engineer</option>
                <option value="">Big Data Engineer e Solutions Architect</option>
                <option value="">Fullstack 4 Digital Marketing</option>
            </select>
        </div>
    )
}
