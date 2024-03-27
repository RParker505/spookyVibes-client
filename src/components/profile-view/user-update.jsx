import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const UserUpdate = ({data, handleSubmit, handleUpdate}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
        return formattedDate;
    };
    
    return (
        <>
            <h3>Need to update your details?</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        value={data.username}
                        defaultValue={data.Username}
                        onChange={(e) => handleUpdate(e)}
                        required
                        minLength="3"
                    />
                    <Form.Text className="text-muted">
                        Must only contain numbers and letters, no special characters allowed.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        value={data.password}
                        defaultValue={data.Password}
                        onChange={(e) => handleUpdate(e)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        value={data.email}
                        defaultValue={data.Email}
                        onChange={(e) => handleUpdate(e)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                        type="date"
                        value={data.birthday}
                        defaultValue={formatDate(data.Birthday)}
                        onChange={(e) => handleUpdate(e)}
                        required
                    />                  
                </Form.Group>

                <Button variant="primary" type="submit">Update Details</Button>
            </Form>
        </>
    );
};