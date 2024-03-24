import React from "react";
import {useState} from "react";
import {UserDetails} from "./user-details";
import {UserUpdate} from "./user-update";

export const ProfileView = ({user, token}) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const [username, setUsername] = useState(user.Username);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(user.Email);
    const [birthday, setBirthday] = useState(user.Birthday);

    const data = {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://spookyvibes-d90e0cfd567b.herokuapp.com/users/${storedUser.Username}`, {
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

    const handleUpdate = (e) => {
        switch(e.target.type) {
          case "text":
            setUsername(e.target.value);
            break;
          case "email":
            setEmail(e.target.value);
            break;
          case "password":
            setPassword(e.target.value);
            break;
          case "date":
            setBirthday(e.target.value);
            default:
        };
    };

    return (
        <>
            <UserDetails 
                user={user.Username}
                email={user.Email}
                birthday={user.Birthday}
            />
            <UserUpdate
                data={data}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
            />
        </>
    );
};