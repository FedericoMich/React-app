import React from 'react';
import { Link } from "react-router-dom";
import { FormControl, Input, InputLabel, FormHelperText } from '@mui/material';



export const Login = () => {
    return <div>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <Link to="/">torna alla home</Link>
                <br></br>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                </FormControl>
            </div>
    </div>;
};
