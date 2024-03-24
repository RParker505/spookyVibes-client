import React from "react";
import {useState} from "react";
import {UserDetails} from "./user-details";
import {UserUpdate} from "./user-update";

export const ProfileView = ({user, token}) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");

    const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("https://spookyvibes-d90e0cfd567b.herokuapp.com/users/${storedUser.username}", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            if (response.ok) {
                alert("Update successful");
                window.location.reload();
            } else {
                alert("Update failed");
            }
        });
    };

    return (
        <>
            <UserDetails user={user.Username} email={user.Email} birthday={user.Birthday} />
            <UserUpdate data={data} handleSubmit={handleSubmit} />
        </>
    );
};