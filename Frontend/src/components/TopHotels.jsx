const TopHotels = () => {
    const hotels = [
        { id: 1, name: "Luxury Palace", rating: 5 },
        { id: 2, name: "Ocean View Resort", rating: 4.8 },
    ];

    return (
        <div>
            {hotels.map((hotel) => (
                <div key={hotel.id}>
                    <h3>{hotel.name}</h3>
                    <p>Rating: {hotel.rating} ⭐</p>
                </div>
            ))}
        </div>
    );
};

export default TopHotels;
