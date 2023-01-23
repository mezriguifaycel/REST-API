import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddUsers } from "../Redux/UserSlice";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [newUser, setNewUser] = useState({});
  const HandleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  //USE navigate pour (lorsque on ajoute un user nous allons direct au liste des users)
  const navigate = useNavigate();
  const Adding = ( e ) =>
  {
    // pour eviter le relowd e.preventDefault()
    e.preventDefault();
    dispatch(AddUsers(newUser));
    console.log(newUser);
    navigate("/users"); //USE navigate pour (lorsque on ajoute un user nous allons direct au liste des users)
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="Name"
            onChange={HandleChange}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Age</Form.Label>
          <Form.Control
            name="age"
            onChange={HandleChange}
            type="number"
            placeholder="Enter age"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            onChange={HandleChange}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            onChange={HandleChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={Adding}>
          Add User
        </Button>
      </Form>
    </div>
  );
};

export default Add;
