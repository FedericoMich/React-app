import React from 'react';
import { Link } from "react-router-dom";

export const User = () => {
    return (
        <>
            <div>
                <h2>user</h2>
            </div>
            <div>
                <Link to="/">back to home</Link>
            </div>
        </>
    ) 
};