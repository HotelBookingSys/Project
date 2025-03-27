package com.Hotel.Management.Service;

import com.Hotel.Management.Model.BookingModel;
import com.Hotel.Management.Model.UserModel;
import com.Hotel.Management.Model.HotelModel;
import com.Hotel.Management.repository.BookingRepository;
import com.Hotel.Management.repository.PersonRepository;
import com.Hotel.Management.repository.HotelRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private PersonRepository personRepository;

    @Autowired
    private HotelRepository hotelRepository;

    public BookingModel createBooking(String email, LocalDate checkIn, LocalDate checkOut, Long hotelId) {
        try {

            Optional<UserModel> findUser = personRepository.findByEmail(email);
            if (findUser.isEmpty()) {
                throw new RuntimeException("User not found for email: " + email);
            }

            Optional<HotelModel> findHotel = hotelRepository.findById(hotelId);
            if (findHotel.isEmpty()) {
                throw new RuntimeException("Hotel not found for ID: " + hotelId);
            }

            BookingModel booking = new BookingModel();
            booking.setUser(findUser.get());
            booking.setHotel(findHotel.get());
            booking.setCheckIn(checkIn);
            booking.setCheckOut(checkOut);

            return bookingRepository.save(booking);

        } catch (Exception e) {
            throw new RuntimeException("Cannot create a booking: " + e.getMessage());
        }
    }


    public Optional<BookingModel> findById(Long bookingId) {
        return bookingRepository.findById(bookingId);
    }

    public void deleteBooking(BookingModel found) {
        bookingRepository.delete(found);
    }
}
