import React from "react";
import Card from "react-bootstrap/Card";
import "./user-details.scss";

export const UserDetails = ({user, email, birthday}) => {
    return (
        <Card className="my-5 border-5 border-dark">
            <Card.Body className="ud-card text-center">
                <Card.Title>My Details</Card.Title>
                <Card.Text><b>Username:</b> {user}</Card.Text>
                <Card.Text><b>Email:</b> {email}</Card.Text>
                <Card.Text><b>Birthday:</b> {birthday}</Card.Text>
            </Card.Body>
        </Card>
    );
};