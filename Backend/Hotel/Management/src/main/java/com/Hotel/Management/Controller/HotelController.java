package com.Hotel.Management.Controller;

import ch.qos.logback.core.encoder.EchoEncoder;
import com.Hotel.Management.Model.HotelModel;
import com.Hotel.Management.Model.UserModel;
import com.Hotel.Management.Service.hotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class HotelController {
    @Autowired
    private hotelService HotelService;

    @PostMapping("/AddHotel")
    public String AddHotel(@RequestBody HotelModel hotel) {
        try {
            if (hotel.getHotelName() == null || hotel.getAddress() == null) {
                return "Hotel Name and Address are required!";
            }

            Optional<HotelModel> exHotel = HotelService.findByHotelNameAndAddress(hotel.getHotelName(), hotel.getAddress());

            if (exHotel.isPresent()) {
                return "Hotel Already Exists!";
            }

            HotelService.save(hotel);
            return "Hotel Added Successfully!";
        } catch (Exception e) {
            System.err.println("Server Error: " + e.getMessage());
            return "Internal Server Error";
        }
    }

    @GetMapping("/GetHotels")

    public List<HotelModel> GetHotel(){
        return HotelService.findAll();
    }

    @GetMapping("/Top-Rated")

    public List<HotelModel> GetTop_RatedHotels(HotelModel hotel) {
        try {
            List<HotelModel> topHotels = new ArrayList<>();

            List<HotelModel> allHotels = HotelService.findAll();

            for (HotelModel h : allHotels) {
                if (h.getRatings() > 4) {
                    topHotels.add(h);
                }
            }

            return topHotels;
        } catch (Exception e) {
            System.err.println("Server Error cannot Fetch: " + e.getMessage());
            return new ArrayList<>();
        }
    }
    @PatchMapping("/Upadate-Hotel/{id}")

    public String Update_hotel(@RequestBody HotelModel hotel,@PathVariable Long id){
        try {

            Optional<HotelModel> Find_Hotel=HotelService.findById(id);

            if(!Find_Hotel.isPresent()){
                return "Hotel Not Found....";
            }

            HotelModel Found=Find_Hotel.get();
            if (hotel.getHotelName() != null) Found.setHotelName(hotel.getHotelName());
            if (hotel.getAddress() != null) Found.setAddress(hotel.getAddress());
            if (hotel.getContactNo() != null) Found.setContactNo(hotel.getContactNo());
            if (hotel.getRatings() > 0) Found.setRatings(hotel.getRatings());
            if (hotel.getOwner() != null && hotel.getOwner().getEmail() != null) {
                Found.setOwner(hotel.getOwner());
            }

            HotelService.save(Found);

            return "Successfully updated the Hotel....";
        }catch (Exception e){
            System.err.println("Server Error");

            return e.getMessage();
        }
    }

    @DeleteMapping("/Delete-Hotel/{id}")

    public String Delete_Hotel(@PathVariable Long id){
        try{
            Optional<HotelModel> Finding_hotel=HotelService.findById(id);

            if(!Finding_hotel.isPresent()){
                return "Hotel cannot be deleted.......";
            }

            HotelModel Found=Finding_hotel.get();

            HotelService.delete(Found);

            return "Deletion Successfull.......";

        }catch(Exception e){
            System.err.println("Server Error Cannot Delete the hotel");

            return e.getMessage();
        }
    }

//    @GetMapping("/NerbyHotel")


}
