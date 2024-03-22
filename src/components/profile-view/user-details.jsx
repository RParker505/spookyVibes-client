import React from "react";

export const UserDetails = ({user, email, birthday}) => {
    return (
        <>
        <h2>Hey Rocky!</h2>
        <p>Username: {user}</p>
        <p>Email: {email}</p>
        <p>Birthday: {birthday}</p>
        </>
    );
};