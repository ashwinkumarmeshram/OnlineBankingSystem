import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";

import React, { useEffect, useState } from "react";

import { CustChangeMob } from "../../actions/customerActions/customerAction.js";
import { useDispatch, useSelector } from "react-redux";
const ChangeMob = (props) => {
  const [mobileNo, setMobileNo] = useState("");

  const CustMobChange = useSelector((store) => store.CustMobChange);
  const { loading, error, response } = CustMobChange;

  const dispatch = useDispatch();
  const cust = sessionStorage.getItem("customer");
  const customerId = JSON.parse(cust).customerId;
  const onChange = (customerId) => {
    dispatch(CustChangeMob(customerId, mobileNo));
  };
  useEffect(() => {
    if (response && response === "successfully updated mobile no!!!") {
      //  sessionStorage.setItem('token', response.data.token)
      // props.history.push('/custhome')
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  // const profile = () => {
  //   props.history.push("/custhome");
  // };

  return (
    <div>
      <Container className="text-white">
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>Change Mobile No</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <label className="form-label"> New Mobile No</label>
              <input
                onChange={(e) => {
                  setMobileNo(e.target.value);
                }}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={() => {
                  onChange(customerId);
                }}
                className="btn btn-success float-right"
              >
                Change
              </button>
            </div>
          </Card.Body>
        </Card>
      </Container>
      {/* <div>
        <button
          className="btn btn-outline-secondary float-left"
          onClick={profile}
        >
          Profile
        </button>
      </div> */}
    </div>
  );
};
export default ChangeMob;
