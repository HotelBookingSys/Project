import React from "react";
import { useNavigate } from "react-router-dom";
import TopHotels from "./TopHotels";
import HotelsList from "./HotelList.jsx";
import { motion } from "framer-motion";
import "../styles/Home.css";




import Explore from "./Explore";



const Home = () => {
  const navigate = useNavigate();

  const topRatedHotels = [
    {
      name: "Luxury Grand Hotel",
      image: "Luxury Hotel.jpg",
      rating: 4.9,
      location: "New York, USA",
      price: "$299 per night",
    },
    {
      name: "Beachside Resort",
      image: "Beachside Resort.jpg",
      rating: 4.8,
      location: "Miami, USA",
      price: "$249 per night",
    },
    {
      name: "City View Resort",
      image: "CityView.jpg",
      rating: 4.8,
      location: "USA",
      price: "$250 per night",
    }

  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Experience Luxury and Comfort</h1>
        <p>Find the best hotels at unbeatable prices.</p>
        <button onClick={() => navigate("/explore")} className="explore-btn">
          Explore Hotels
        </button>
      </div>

      <h2 className="section-title">Top-Rated Hotels</h2>
      <div className="hotel-list">
        {topRatedHotels.map((hotel, index) => (
          <div key={index} className="hotel-card">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="hotel-image"
              onClick={() => navigate("/booking")}
            />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>⭐ {hotel.rating} | {hotel.location}</p>
              <p className="price">{hotel.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
