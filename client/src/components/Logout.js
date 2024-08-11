import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../App';

const Logout = () => {

    // const { state, dispatch} = useContext(UserContext);
    const { dispatch} = useContext(UserContext);

    const navigate = useNavigate();
    useEffect(() => {
        fetch('/logout', {
            method: "GET",
            headers: {
                // Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then((res) => {
            dispatch({type:"USER", payload:false})
            navigate('/login', { replace: true });
            if (res.status !== 200) {
                throw new Error(`Request failed with status ${res.status}`);
            }
        }).catch((err) => {
            console.log(err);
        })
    })

    return (
        <>
            <h1>Logout page</h1>
        </>
    )
}

export default Logout