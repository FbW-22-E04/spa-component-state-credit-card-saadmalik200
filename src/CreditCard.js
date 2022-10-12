import "./CreditCard.css";

function CreditCard(props) {
  return (
    <div className="bodyDiv">
      <div className="outerDiv">
        <h1 className="h1">{props.bankName}</h1>
        <div className="card-number">
          <p>{props.num.p1}</p>
          <p>{props.num.p2}</p>
          <p>{props.num.p3}</p>
          <p>{props.num.p4}</p>
        </div>
        <p className="secCode">1234</p>
        <div className="expiry-date">
          <div className="valid-container">
            <p className="valid-thru">
              VALID
              <br />
              THRU
            </p>
          </div>
          <div>
            <p className="year">{props.expiryDate}</p>
          </div>
        </div>
        <h2>{props.personName}</h2>
      </div>
    </div>
  );
}

export default CreditCard;
