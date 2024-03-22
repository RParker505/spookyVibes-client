import React from "react";
import {UserDetails} from "./user-details";

export const ProfileView = ({user}) => {
    return (
        <UserDetails user={user.Username} email={user.Email} birthday={user.Birthday} />
    );
};