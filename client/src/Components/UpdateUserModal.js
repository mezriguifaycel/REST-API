import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import {useDispatch} from 'react-redux'
import { UpdateDataUsers } from '../Redux/UserSlice';

const UpdateUserModal = ({userr}) => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [UpdatedUser, setUpdatedUser] = useState({
        _id:userr._id})
    
        const HandleChange = (e)=>{
            setUpdatedUser({...UpdatedUser, [e.target.name]: e.target.value})
        }

        const Updating=()=>{
            dispatch(UpdateDataUsers(UpdatedUser))
            handleClose()
        }
  
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        UPDATE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update USer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control defaultValue={userr.Name} name='Name' onChange={HandleChange} type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Age</Form.Label>
        <Form.Control defaultValue={userr.age} name='age' onChange={HandleChange} type="number" placeholder="Enter age" />
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control defaultValue={userr.email} name='email' onChange={HandleChange} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control defaultValue={userr.password} name='password' onChange={HandleChange} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Updating}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default UpdateUserModal