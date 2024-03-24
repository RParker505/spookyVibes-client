import React from "react";

export const UserUpdate = () => {
    return (
        <Form>
        <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
                type="text"
                value={username}
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
                value={password}
                required
            />
        </Form.Group>

        <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
                type="email"
                value={email}
                required
            />
        </Form.Group>

        <Form.Group controlId="formBirthday">
            <Form.Label>Birthday:</Form.Label>
            <Form.Control
                type="date"
                value={birthday}
                required
            />                  
        </Form.Group>

        <Button variant="primary" type="submit">Update Details</Button>
        <Button variant="secondary" type="submit">Delete Account</Button>
    </Form>
    )
}