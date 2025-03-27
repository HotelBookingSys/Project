const HotelList = () => {
    const hotels = [
        { id: 1, name: "Hotel Sunshine", price: "$150" },
        { id: 2, name: "Mountain Lodge", price: "$120" },
    ];

    return (
        <div>
            {hotels.map((hotel) => (
                <div key={hotel.id}>
                    <h3>{hotel.name}</h3>
                    <p>Price: {hotel.price}</p>
                </div>
            ))}
        </div>
    );
};

export default HotelList;
