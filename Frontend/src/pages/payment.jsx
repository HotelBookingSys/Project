import React from "react";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../styles/Payment.css";
import { useLocation, useNavigate } from "react-router-dom";



const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state?.selectedHotel || {}; // Get hotel details

  const [cardNumber, setCardNumber] = useState("**** **** **** ****");
  const [cardHolder, setCardHolder] = useState("CARD HOLDER");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentSuccess(true);

    // Redirect to Booking Page after 2 seconds
    setTimeout(() => {
      navigate("/booking", { state: { bookedHotel: hotel } });
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h1 className="payment-title">Secure Payment</h1>

      {/* Hotel Details */}
      {hotel.name && (
        <div className="hotel-summary">
          <h2>Booking for: {hotel.name}</h2>
          <p>Price: ${hotel.price} / night</p>
          <p>Rating: {hotel.rating} ⭐</p>
        </div>
      )}

      {/* Card Preview */}
      <div className="card-preview">
        <div className="card-number">{cardNumber}</div>
        <div className="card-holder">{cardHolder}</div>
      </div>

      {/* Payment Form */}
      <form className="payment-form" onSubmit={handlePayment}>
        {/* Payment Method */}
        <div className="payment-method">
          <label>
            <input type="radio" name="method" value="card" defaultChecked />
            Credit/Debit Card
          </label>
          <label>
            <input type="radio" name="method" value="upi" />
            UPI
          </label>
          <label>
            <input type="radio" name="method" value="wallet" />
            Wallet
          </label>
        </div>

        {/* Card Number Input */}
        <input
          type="text"
          placeholder="Card Number"
          maxLength="19"
          onChange={(e) =>
            setCardNumber(e.target.value || "**** **** **** ****")
          }
        />

        {/* Card Holder Name Input */}
        <input
          type="text"
          placeholder="Card Holder Name"
          onChange={(e) =>
            setCardHolder(e.target.value.toUpperCase() || "CARD HOLDER")
          }
        />

        {/* Expiry & CVV */}
        <div style={{ display: "flex", gap: "10px" }}>
          <input type="text" placeholder="MM/YY" maxLength="5" />
          <input type="text" placeholder="CVV" maxLength="3" />
        </div>

        {/* Pay Now Button */}
        <button type="submit" className="payment-btn">Pay Now</button>
      </form>

      {/* Payment Success Popup */}
      {paymentSuccess && (
        <div className="popup">
          <h2>Payment Successful ✅</h2>
        </div>
      )}
    </div>
  );
};

export default Payment;