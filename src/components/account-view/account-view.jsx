import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import {ModalHeader} from "react-bootstrap";
import {MovieCard} from "../movie-card/movie-card";
import "./account-view.scss";

export const AccountView = ({ user, token, movies, setUser, onLoggedOut }) => {
  
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState(user.Password);
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);
  const [showModal, setShowModal] = useState(false);

  let favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m.id));

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formattedBirthday = new Date(birthday).toISOString().split("T")[0]; // Convert to YYYY-MM-DD format

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: formattedBirthday,
    };

    console.log("JSON data to be sent:", data);

    fetch(`https://spookyvibes-d90e0cfd567b.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    })
    .then((response) => {
      if (response.ok) {
        alert("Update successful!");
        return response.json();
      } else {
        alert("Update failed");
      }
    })
    .then((data) => {
      console.log("DATA", data);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    });
};

  const handleDelete = () => {
    
    fetch(`https://spookyvibes-d90e0cfd567b.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.ok) {      
        alert("Account deleted successfully!");
        onLoggedOut();
      } else {
        alert("Something went wrong.");
      }
    })
  };

  return (
    <>
      <Row className="justify-content-md-center mt-5">
        <Card className="my-5 border-5 border-dark">
          <Card.Body className="ud-card text-center">
            <Card.Title>My SpookyVibes Details</Card.Title>
            <Card.Text><b>Username:</b> {user.Username}</Card.Text>
            <Card.Text><b>Email:</b> {user.Email}</Card.Text>
          </Card.Body>
        </Card>
      </Row>

      <Row className="justify-content-md-center mt-5"> 
        <Col>
          <h3>Update My Details</h3>
          <Form onSubmit={handleSubmit} className="mt-5 mb-5 formLabel">
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control 
                type="text"
                className="formInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            {/* <Form.Group controlId="formPassword">
              <Form.Label className="mt-2">Password:</Form.Label>
              <Form.Control 
                type="password"
                className="formInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group> */}

            <Form.Group controlId="formEmail">
              <Form.Label className="mt-2">Email:</Form.Label>
              <Form.Control  
                type="email"
                className="formInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </Form.Group>

            <Form.Group controlId="formBirthday">
              <Form.Label className="mt-2">Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
                Update My Details
            </Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <h3>My Favorite Spooky Movies</h3>
        { favoriteMovies.length !== 0 ? (

          favoriteMovies.map((movie) => (
            <Col key={movie.id}>
              <MovieCard movieData={movie}></MovieCard>
            </Col>
          ))
          ) : (
            <Col xs={12}>
              <p>No movies favorited yet</p>
            </Col>
        )}
      </Row>

      <Row className="justify-content-md-center mt-5"> 
        <Button
          variant="danger"
          className="button-danger mt-3"
          onClick={handleShowModal}
        >
          Delete account
        </Button>
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Delete account</Modal.Title>
          </Modal.Header>
          <Modal.Body>Confirm delete account?</Modal.Body>
          <Modal.Footer>
            <button
              variant="primary"
              className="button-primary"
              onClick={handleDelete}
            >
              Yes
            </button>
            <button
              variant="secondary"
              className="button-primary"
              onClick={handleCloseModal}
            >
              No
            </button>
          </Modal.Footer>
        </Modal>
      </Row>
    </>
  );
};