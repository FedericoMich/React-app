import React from 'react';
import { Link } from "react-router-dom";

export const Classes = () => {
    return (
        <>
            <div>
                <h2>Classes</h2>
            </div>
            <div>
                <Link to="/repos">Back to repos</Link>
            </div>
        </>
    ) 
};