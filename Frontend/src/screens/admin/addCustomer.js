import {} from "@material-ui/icons";
import React, { useState } from "react";
import { Card, Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCust } from "../../actions/adminActions/adminActions.js";

const AddCustomer = (props) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [accountBalance, setAccountBalence] = useState("");
  const [cifNo, setCIFNo] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const dispatch = useDispatch();
  const adminAddCust = useSelector((store) => store.adminAddCust);

  const onaddCust = () => {
    dispatch(
      addCust(
        accountNumber,
        accountBalance,
        cifNo,
        branchName,
        ifscCode,
        firstName,
        lastName,
        email,
        mobileNo
      )
    );
  };
  return (
    <div>
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Add New Customer</Card.Header>
        <Card.Body>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Account Number</label>
              <input
                onChange={(e) => {
                  setAccountNumber(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">First Name</label>
              <input
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Account Balance</label>
              <input
                onChange={(e) => {
                  setAccountBalence(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Last Name</label>
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">cif No</label>
              <input
                onChange={(e) => {
                  setCIFNo(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Branch Name</label>
              <input
                onChange={(e) => {
                  setBranchName(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <label className="form-label">Mobile No</label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">ifsc Code</label>
              <input
                onChange={(e) => {
                  setIfscCode(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
                //className={'bg-dark text-white'}
              />
            </Form.Group>
          </Form.Row>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button onClick={onaddCust} size="md" className="btn btn-success">
            ADD
          </Button>
        </Card.Footer>

        {adminAddCust.loading && <div>waiting for response</div>}
      </Card>
    </div>
  );
};

export default AddCustomer;
