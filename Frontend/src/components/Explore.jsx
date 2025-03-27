import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Explore.css";

const hotels = [
    { name: "Luxury Grand Hotel", image: "/images/hotel1.jpg", rating: 4.9, location: "New York, USA", price: "$299 per night" },
    { name: "Beachside Resort", image: "/images/hotel2.jpg", rating: 4.8, location: "Miami, USA", price: "$249 per night" },
    { name: "Mountain View Hotel", image: "/images/hotel3.jpg", rating: 4.7, location: "Colorado, USA", price: "$220 per night" },
    { name: "Sunset Paradise", image: "/images/hotel4.jpg", rating: 4.6, location: "California, USA", price: "$210 per night" },
    { name: "Elite Sky Tower", image: "/images/hotel5.jpg", rating: 4.5, location: "Chicago, USA", price: "$199 per night" },
    { name: "Royal Palace", image: "/images/hotel6.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    { name: "Luxury Grand Hotel", image: "/images/hotel7.jpg", rating: 4.9, location: "New York, USA", price: "$299 per night" },
    { name: "Beachside Resort", image: "/images/hotel8.jpg", rating: 4.8, location: "Miami, USA", price: "$249 per night" },
    { name: "Mountain View Hotel", image: "/images/hotel9.jpg", rating: 4.7, location: "Colorado, USA", price: "$220 per night" },
    { name: "Sunset Paradise", image: "/images/hotel10.jpg", rating: 4.6, location: "California, USA", price: "$210 per night" },
    { name: "Elite Sky Tower", image: "/images/hotel11.jpg", rating: 4.5, location: "Chicago, USA", price: "$199 per night" },
    { name: "Royal Palace", image: "/images/hotel12.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    { name: "Luxury Grand Hotel", image: "/images/hotel13.jpg", rating: 4.9, location: "New York, USA", price: "$299 per night" },
    { name: "Beachside Resort", image: "/images/hotel14.jpg", rating: 4.8, location: "Miami, USA", price: "$249 per night" },
    { name: "Mountain View Hotel", image: "/images/hotel15.jpg", rating: 4.7, location: "Colorado, USA", price: "$220 per night" },
    { name: "Sunset Paradise", image: "/images/hotel16.jpg", rating: 4.6, location: "California, USA", price: "$210 per night" },
    { name: "Elite Sky Tower", image: "/images/hotel17.jpg", rating: 4.5, location: "Chicago, USA", price: "$199 per night" },
    { name: "Royal Palace", image: "/images/hotel18.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    { name: "Luxury Grand Hotel", image: "/images/hotel19.jpg", rating: 4.9, location: "New York, USA", price: "$299 per night" },
    { name: "Beachside Resort", image: "/images/hotel20.jpg", rating: 4.8, location: "Miami, USA", price: "$249 per night" },
    { name: "Mountain View Hotel", image: "/images/hotel21.jpg", rating: 4.7, location: "Colorado, USA", price: "$220 per night" },
    { name: "Sunset Paradise", image: "/images/hotel22.jpg", rating: 4.6, location: "California, USA", price: "$210 per night" },
    { name: "Elite Sky Tower", image: "/images/hotel23.jpg", rating: 4.5, location: "Chicago, USA", price: "$199 per night" },
    { name: "Royal Palace", image: "/images/hotel24.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    { name: "Luxury Grand Hotel", image: "/images/hotel25.jpg", rating: 4.9, location: "New York, USA", price: "$299 per night" },
    { name: "Beachside Resort", image: "/images/hotel26.jpg", rating: 4.8, location: "Miami, USA", price: "$249 per night" },
    { name: "Mountain View Hotel", image: "/images/hotel27.jpg", rating: 4.7, location: "Colorado, USA", price: "$220 per night" },
    { name: "Sunset Paradise", image: "/images/hotel28.jpg", rating: 4.6, location: "California, USA", price: "$210 per night" },
    { name: "Elite Sky Tower", image: "/images/hotel29.jpg", rating: 4.5, location: "Chicago, USA", price: "$199 per night" },
    { name: "Royal Palace", image: "/images/hotel30.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    { name: "Luxury Grand Hotel", image: "/images/hotel31.jpg", rating: 4.9, location: "New York, USA", price: "$299 per night" },
    { name: "Beachside Resort", image: "/images/hotel32.jpg", rating: 4.8, location: "Miami, USA", price: "$249 per night" },
    { name: "Mountain View Hotel", image: "/images/hotel33.jpg", rating: 4.7, location: "Colorado, USA", price: "$220 per night" },
    { name: "Sunset Paradise", image: "/images/hotel34.jpg", rating: 4.6, location: "California, USA", price: "$210 per night" },
    { name: "Elite Sky Tower", image: "/images/hotel35.jpg", rating: 4.5, location: "Chicago, USA", price: "$199 per night" },
    { name: "Royal Palace", image: "/images/hotel36.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    { name: "Luxury Grand Hotel", image: "/images/hotel37.jpg", rating: 4.9, location: "New York, USA", price: "$299 per night" },
    { name: "Beachside Resort", image: "/images/hotel38.jpg", rating: 4.8, location: "Miami, USA", price: "$249 per night" },
    { name: "Mountain View Hotel", image: "/images/hotel39.jpg", rating: 4.7, location: "Colorado, USA", price: "$220 per night" },
    { name: "Sunset Paradise", image: "/images/hotel40.jpg", rating: 4.6, location: "California, USA", price: "$210 per night" },
    { name: "Elite Sky Tower", image: "/images/hotel41.jpg", rating: 4.5, location: "Chicago, USA", price: "$199 per night" },
    { name: "Royal Palace", image: "/images/hotel42.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    { name: "Luxury Grand Hotel", image: "/images/hotel43.jpg", rating: 4.9, location: "New York, USA", price: "$299 per night" },
    { name: "Beachside Resort", image: "/images/hotel44.jpg", rating: 4.8, location: "Miami, USA", price: "$249 per night" },
    { name: "Mountain View Hotel", image: "/images/hotel45.jpg", rating: 4.7, location: "Colorado, USA", price: "$220 per night" },
    { name: "Sunset Paradise", image: "/images/hotel46.jpg", rating: 4.6, location: "California, USA", price: "$210 per night" },
    { name: "Elite Sky Tower", image: "/images/hotel47.jpg", rating: 4.5, location: "Chicago, USA", price: "$199 per night" },
    { name: "Royal Palace", image: "/images/hotel48.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    { name: "Luxury Grand Hotel", image: "/images/hotel49.jpg", rating: 4.9, location: "New York, USA", price: "$299 per night" },
    { name: "Beachside Resort", image: "/images/hotel50.jpg", rating: 4.8, location: "Miami, USA", price: "$249 per night" },
    { name: "Mountain View Hotel", image: "/images/hotel51.jpg", rating: 4.7, location: "Colorado, USA", price: "$220 per night" },
    { name: "Sunset Paradise", image: "/images/hotel52.jpg", rating: 4.6, location: "California, USA", price: "$210 per night" },
    { name: "Elite Sky Tower", image: "/images/hotel53.jpg", rating: 4.5, location: "Chicago, USA", price: "$199 per night" },
    { name: "Royal Palace", image: "/images/hotel54.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    { name: "Royal Palace", image: "/images/hotel55.jpg", rating: 4.5, location: "London, UK", price: "$180 per night" },
    // Add 44 more hotels here
  ];
  
  // Sort hotels by rating (highest first)
  hotels.sort((a, b) => b.rating - a.rating);
  
  const Explore = () => {
    const navigate = useNavigate();
  
    return (
      <div className="explore-container">
        <h2 className="section-title">Explore Hotels</h2>
        <div className="hotel-list">
          {hotels.map((hotel, index) => (
            <div key={index} className="hotel-card" onClick={() => navigate("/payment")}>
              <img src={hotel.image} alt={hotel.name} className="hotel-image" />
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
  
  export default Explore;
