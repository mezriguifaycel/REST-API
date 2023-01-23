import React, { useEffect } from "react";
import {
  DeleteDataUsers,
  GetDataUsers,
  UpdateDataUsers
} from "../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "react-bootstrap";
import UpdateUserModal from "../Components/UpdateUserModal";

const UserLists = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetDataUsers());
  }, []); // //////////?
  //useSelector selection des users from DB
  const users = useSelector((state) => state.User.users); //( state .slice.collection => chemain DB)
  console.log(users);
  return (
    //users? si prés alors on map
    <div>
      {users?.map((userr) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{userr.Name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {userr.age}
              </Card.Subtitle>
              <Card.Text>{userr.email}</Card.Text>
              <UpdateUserModal userr={userr} />
              <Button
                variant="danger"
                onClick={() => dispatch(DeleteDataUsers(userr._id))}
              >
              DELETE
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default UserLists;
