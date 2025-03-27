package com.Hotel.Management.Controller;

import com.Hotel.Management.Model.BookingModel;
import com.Hotel.Management.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Optional;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping("/add")
    public BookingModel addBooking(
            @RequestParam String email,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate check_in,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate check_out,
            @RequestParam Long hotel_id) {

        return bookingService.createBooking(email, check_in, check_out, hotel_id);
    }

    @DeleteMapping("/Del/{id}")
    public String DeleteBooking(@RequestParam Long Booking_id){
        try{
            Optional<BookingModel> Booking_Finding=bookingService.findById(Booking_id);

            if(!Booking_Finding.isPresent()){
                return "Cannot Find the Booking........";
            }

            BookingModel Found=Booking_Finding.get();

            bookingService.deleteBooking(Found);
            return "Deletion Successfull.";
        }catch(Exception e){
            System.err.println("Cannot delete id is fetched wrongly........");
            return "Failed";
        }
    }
}
