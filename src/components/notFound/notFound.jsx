import React from 'react';
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <>
            <div>
                <h2>Page not found</h2>
            </div>
            <div>
                <Link to="/"> back to home </Link>
            </div>
        </>
    ) 
};
