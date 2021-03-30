import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustFundTransfer } from "../../actions/customerActions/customerAction";

const CustomerFundTransfer = (props) => {
  const [senderAccountNo, setSenderAccountNo] = useState("");
  const [reciverAccountNo, setReciverAccountNo] = useState("");
  const [amount, setAmount] = useState("");

  const FundTrans = useSelector((store) => store.FundTrans);
  const { loading, error, response } = FundTrans;

  const dispatch = useDispatch();

  const onTransfer = () => {
    dispatch(CustFundTransfer(senderAccountNo, reciverAccountNo, amount));
  };

  useEffect(() => {
    if (response && response.status === "success") {
      // sessionStorage.setItem("customer", JSON.stringify(response));
      props.history.push("/custhome");
    } else if (response && response.status === "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  return (
    <div>
      <Container className="text-white">
        <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header>Fund Transfer</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <label className="form-label">Sender Account Number</label>
              <input
                onChange={(e) => {
                  setSenderAccountNo(e.target.value);
                }}
                className="form-control"
                placeholder="0"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Reciever Account Number</label>
              <input
                onChange={(e) => {
                  setReciverAccountNo(e.target.value);
                }}
                className="form-control"
                placeholder="0"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Amount </label>
              <input
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                className="form-control"
                placeholder="0"
              />
            </div>
            <div className="mb-3">
              <button
                onClick={onTransfer}
                className="btn btn-success float-right"
              >
                Transfer
              </button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default CustomerFundTransfer;
