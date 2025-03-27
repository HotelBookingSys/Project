package com.Hotel.Management.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "hotels")
public class HotelModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String hotelName;
    private String address;
    private String contactNo;
    private float ratings;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "owner_email", referencedColumnName = "email")
    private UserModel owner;

    public HotelModel() {}

    public HotelModel(String hotelName, String address, String contactNo, float ratings, UserModel owner) {
        this.hotelName = hotelName;
        this.address = address;
        this.contactNo = contactNo;
        this.ratings = ratings;
        this.owner = owner;
    }

    public Long getId() {
        return id;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContactNo() {
        return contactNo;
    }

    public void setContactNo(String contactNo) {
        this.contactNo = contactNo;
    }

    public float getRatings() {
        return ratings;
    }

    public void setRatings(float ratings) {
        this.ratings = ratings;
    }

    public UserModel getOwner() {
        return owner;
    }

    public void setOwner(UserModel owner) {
        this.owner = owner;
    }
}
