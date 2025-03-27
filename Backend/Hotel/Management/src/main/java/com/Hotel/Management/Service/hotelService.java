package com.Hotel.Management.Service;

import com.Hotel.Management.Model.HotelModel;
import com.Hotel.Management.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class hotelService {

    @Autowired
    private HotelRepository hotelRepository;

    public  Optional<HotelModel> findById(Long id) {
        return hotelRepository.findById(id);
    }

    public void delete(HotelModel found) {
        hotelRepository.delete(found);
    }


    public Optional<HotelModel> findByHotelNameAndAddress(String hotelName, String address) {
        return hotelRepository.findByHotelNameAndAddress(hotelName, address);
    }

    public void save(HotelModel hotel) {
        hotelRepository.save(hotel);
    }

    public List<HotelModel> findAll() {
        return hotelRepository.findAll();
    }
}

