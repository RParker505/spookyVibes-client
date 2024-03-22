import React from "react";
import Card from "react-bootstrap/Card";

export const UserDetails = ({user, email, birthday}) => {
    return (
        <Card border="info">
            <Card.Body>
                <Card.Title>My Details</Card.Title>
                <Card.Text>Username: {user}</Card.Text>
                <Card.Text>Email: {email}</Card.Text>
                <Card.Text>Birthday: {birthday}</Card.Text>
            </Card.Body>
        </Card>
    );
};