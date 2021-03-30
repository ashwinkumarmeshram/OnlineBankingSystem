import React, { useEffect, useState } from "react";
import { CustRegister } from "../../actions/customerActions/customerAction.js";
// import { Link } from 'react-router-dom'
import { Card, Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const CustRegs = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [branchName, setBranchName] = useState("");
  const [ifscCode, setIfsccode] = useState("");

  const CustRegisterStore = useSelector((store) => store.CustRegisterStore);
  const { loading, error, response } = CustRegisterStore;

  const dispatch = useDispatch();

  const onRegister = () => {
    dispatch(
      CustRegister(
        password,
        email,
        mobileNo,
        accountNumber,
        branchName,
        ifscCode
      )
    );
  };

  useEffect(() => {
    if (response && response.status === "success") {
      // sessionStorage.setItem('token', response.data.token)
      props.history.push("/home");
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert("Error: Please check that you have filled form correctly !!!");
    }
  }, [loading, error, response]);

  return (
    <div>
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>Registration</Card.Header>
        <Card.Body>
          <Form.Row>
            <Form.Group as={Col}>
              <label className="form-label">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
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
              <label className="form-label">MobileNo</label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>

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
              <label className="form-label">Ifsc Code</label>
              <input
                onChange={(e) => {
                  setIfsccode(e.target.value);
                }}
                type="text"
                className="form-control bg-dark text-white"
              />
            </Form.Group>
          </Form.Row>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
          <Button onClick={onRegister} size="md" className="btn btn-success">
            Register
          </Button>
        </Card.Footer>

        {loading && <div>waiting for response</div>}
        <div className="text-green">
          {/*Registerd Successfully, check your registerd email*/}
        </div>
      </Card>
    </div>
  );
};

export default CustRegs;
