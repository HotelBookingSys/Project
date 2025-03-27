package com.Hotel.Management.Model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="bookings")
public class BookingModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    private LocalDate checkIn;
    private LocalDate checkOut;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="booked_email", referencedColumnName = "email")
    private UserModel user;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name="hotel_id", referencedColumnName = "id")
    private HotelModel hotel;

    public BookingModel() {}


    public Long getBookingId() { return bookingId; }
    public void setBookingId(Long bookingId) { this.bookingId = bookingId; }

    public LocalDate getCheckIn() { return checkIn; }
    public void setCheckIn(LocalDate checkIn) { this.checkIn = checkIn; }

    public LocalDate getCheckOut() { return checkOut; }
    public void setCheckOut(LocalDate checkOut) { this.checkOut = checkOut; }

    public UserModel getUser() { return user; }
    public void setUser(UserModel user) { this.user = user; }

    public HotelModel getHotel() { return hotel; }
    public void setHotel(HotelModel hotel) { this.hotel = hotel; }
}
