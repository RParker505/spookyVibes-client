import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const UserUpdate = ({data, handleSubmit, handleUpdate}) => {
    return (
        <>
            <h3>Need to update your details?</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        value={data.username}
                        placeholder="{storedUser.username}"
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
                        onChange={(e) => handleUpdate(e)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        value={data.email}
                        onChange={(e) => handleUpdate(e)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                        type="date"
                        value={data.birthday}
                        onChange={(e) => handleUpdate(e)}
                        required
                    />                  
                </Form.Group>

                <Button variant="primary" type="submit">Update Details</Button>
            </Form>
        </>
    );
};