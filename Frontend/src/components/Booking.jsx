import React, { useState } from "react";
import "../styles/Booking.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// ✅ Ensure the package is installed before importing
import ChatBot from "react-simple-chatbot";  


const selectedHotel = {
  name: "Grand Plaza Hotel",
  image: "https://source.unsplash.com/120x120/?hotel", // Replace with actual image URL
  location: "Downtown, New York",
  rating: "⭐⭐⭐⭐⭐",
  price: 250,
};

const Booking = () => {
  const [guestName, setGuestName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false); // Chatbot state

  // Calculate total price
  const getTotalPrice = () => {
    const nights = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
    return nights > 0 ? nights * selectedHotel.price * guests : 0;
  };

  const handleCancel = () => {
    alert("❌ Booking Cancelled");
  };

  // Chatbot steps
  const steps = [
    { id: "1", message: "Welcome to Booking Assistant! How can I help?", trigger: "2" },
    { id: "2", options: [
        { value: "book", label: "Book a hotel", trigger: "3" },
        { value: "cancel", label: "Cancel a booking", trigger: "4" },
        { value: "info", label: "Get hotel info", trigger: "5" }
    ]},
    { id: "3", message: "Sure! Please provide your booking details.", end: true },
    { id: "4", message: "To cancel a booking, please provide your booking ID.", end: true },
    { id: "5", message: "You can browse available hotels on our booking page.", end: true }
  ];

  // Custom chatbot theme
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#ff5f00",
    headerFontColor: "#fff",
    headerFontSize: "18px",
    botBubbleColor: "#ff5f00",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#333"
  };

  return (
    <motion.div className="booking-page">
      <div className="booking-container">
        <h2 className="booking-title">Confirm Your Booking</h2>

        {/* 🔥 Hotel Details */}
        <div className="hotel-details">
          <img src={selectedHotel.image} alt="Hotel" className="hotel-image" />
          <div className="hotel-info">
            <p className="hotel-name">{selectedHotel.name}</p>
            <p className="hotel-location">{selectedHotel.location}</p>
            <p className="hotel-rating">{selectedHotel.rating}</p>
            <p className="hotel-price">${selectedHotel.price} / night</p>
          </div>
        </div>

        {/* 🔥 Booking Summary */}
        <div className="booking-summary">
          <p className="summary-details">
            <strong>Guest Name:</strong> {guestName || "Not provided"}
          </p>
          <p className="summary-details">
            <strong>Check-in:</strong> {checkIn || "Select a date"}
          </p>
          <p className="summary-details">
            <strong>Check-out:</strong> {checkOut || "Select a date"}
          </p>
          <p className="summary-details">
            <strong>Guests:</strong> {guests}
          </p>
          <p className="summary-details">
            <strong>Total Price:</strong> ${getTotalPrice()}
          </p>
        </div>

        {/* 🔥 Confirmation & Cancellation Buttons */}
        <div className="booking-buttons">
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      </div>

      {/* 🔥 Chatbot Floating Icon */}
      <div className="chatbot-icon" onClick={() => setIsChatOpen(!isChatOpen)}>
        💬
      </div>

      {/* 🔥 Chatbot Box */}
      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Chat Support</h3>
            <button onClick={() => setIsChatOpen(false)}>✖</button>
          </div>
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} />
          </ThemeProvider>
        </div>
      )}
    </motion.div>
  );
};

export default Booking;