import React from "react";
import {UserDetails} from "./user-details";
import {UserUpdate} from "./user-update";

export const ProfileView = ({user, token}) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    return (
        <>
            <UserDetails user={user.Username} email={user.Email} birthday={user.Birthday} />
            <UserUpdate token={token} user={storedUser}/>
        </>
    );
};