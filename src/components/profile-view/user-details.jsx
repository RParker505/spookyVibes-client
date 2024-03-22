import React from "react";
import Card from "react-bootstrap/Card";
import "./user-details.scss";

export const UserDetails = ({user, email, birthday}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
        return formattedDate;
    };
    
    return (
        <Card className="my-5 border-5 border-dark">
            <Card.Body className="ud-card text-center">
                <Card.Title>My Details</Card.Title>
                <Card.Text><b>Username:</b> {user}</Card.Text>
                <Card.Text><b>Email:</b> {email}</Card.Text>
                <Card.Text><b>Birthday:</b> {formatDate(birthday)}</Card.Text>
            </Card.Body>
        </Card>
    );
};