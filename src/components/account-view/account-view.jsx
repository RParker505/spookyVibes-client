import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import {ModalHeader} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const AccountView = ({ user, token, setUser, onLoggedOut }) => {
  
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleUpdate = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday,
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
        return response.json(), alert("Update successful!");
      } else {
        alert("Update failed");
      }
    })
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    });
};

  const handleDelete = (event) => {
    if (!password) {return;}

    event.preventDefault();

    if (confirm("Are you sure?") == false) {
      alert("Deletion cancelled");
    } else {
      fetch(`https://spookyvibes-d90e0cfd567b.herokuapp.com/users/${storedUser.Username}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((response) => {
        if (response.ok) {      
          alert("Account deleted successfully!");
          navigate("/signup");
          setUser(null);
          localStorage.clear();
        } else {
          const failed = response.json();
          const failedStr = JSON.stringify(failed);
          const failedObj = JSON.parse(failedStr);
  
          let whatFailed = failedObj.errors.map(x => x.msg)
  
          alert(whatFailed)
        }
      })
    }
  };

  return (
    <>
      <Row className="justify-content-md-center w-100 mt-5">
        <Form className="mt-5 mb-5 formLabel">
          <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control 
            type="text"
            className="formInput"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            minLength="5"
            required/>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label className="mt-2">Password:</Form.Label>
            <Form.Control 
            type="password"
            className="formInput"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label className="mt-2">Email:</Form.Label>
            <Form.Control  
            type="email"
            className="formInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          </Form.Group>

          <Form.Group controlId="formBirthday">
            <Form.Label className="mt-2">Birthday:</Form.Label>
            <DatePicker
            id="formBirthday"
            showYearDropdown
            scrollableYearDropdown
            yearDropdownItemNumber={30}
            showMonthDropdown
            minDate="1941"
            maxDate={new Date()}
            dropdownMode="select"
            calendarClassName="pickerCal"
            wrapperClassName="formInput"
            dateFormatCalendar=" "
            dateFormat="MMM dd YYYY"
            selected={birthday}
            onChange={(birthday) => setBirthday(birthday)}
            />
          </Form.Group>

        <Button className="mt-4 primaryButton w-100" variant="primary" type="button" onClick={handleUpdate}>Update Information</Button>
          <p className="warning">-- DANGER ZONE --
        <Button className="primaryButton deleteButton w-100" variant="danger" type="button" onClick={handleDelete}>Delete Account</Button></p>
        </Form>
      </Row>
    </>
  )
};