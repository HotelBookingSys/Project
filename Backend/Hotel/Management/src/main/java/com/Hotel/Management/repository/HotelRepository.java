package com.Hotel.Management.repository;

import com.Hotel.Management.Model.HotelModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface HotelRepository extends JpaRepository<HotelModel, Long> {
    Optional<HotelModel> findByHotelNameAndAddress(String hotelName, String address);
}
