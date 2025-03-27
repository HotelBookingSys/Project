package com.Hotel.Management.Controller;

import com.Hotel.Management.Model.UserModel;
import com.Hotel.Management.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService UserService;

    @PostMapping("/AddUser")
    public String AddUser(@RequestBody UserModel user) {
        try {
            Optional<UserModel> exUser = UserService.findByEmail(user.getEmail());

            if (exUser.isPresent()) {
                return "User Already Exists";
            }

            BCryptPasswordEncoder encoded_Password=new BCryptPasswordEncoder(12);

            user.setPassword(encoded_Password.encode(user.getPassword()));
            UserService.save(user);
            return "User Added Successfully...";

        } catch (Exception e) {
            System.err.println("Server Error: " + e.getMessage());
            return "Internal Server Error";
        }
    }
    @PatchMapping("/UpdateUser/{email}")
    public String updateUser(@RequestBody UserModel user, @PathVariable String email) {
        try {
            System.out.println("Searching for user with email: " + email); // Debugging

            Optional<UserModel> exUser = UserService.findByEmail(email);

            if (exUser.isPresent()) {
                UserModel existingUser = exUser.get();

                if (user.getUserName() != null) existingUser.setUserName(user.getUserName());
                if (user.getPassword() != null) existingUser.setPassword(user.getPassword());
                if (user.getAge() != 0) existingUser.setAge(user.getAge());
                if (user.getPhoneNumber() != null) existingUser.setPhoneNumber(user.getPhoneNumber());
                if (user.getAddress() != null) existingUser.setAddress(user.getAddress());
                if (user.getGender() != null) existingUser.setGender(user.getGender());
                if (user.getRole() != null) existingUser.setRole(user.getRole());

                UserService.save(existingUser);

                return "Updated Successfully.";
            }

            return "User Not Found. Update Failed.";
        } catch (Exception e) {
            System.err.println("Server Error: " + e.getMessage());
            return "Internal Server Error";
        }
    }

    @DeleteMapping("/DeleteUser/{email}")

    public String DeleteUser(@PathVariable String email){
        try{
            Optional<UserModel> Find_User=UserService.findByEmail(email);

            if(Find_User.isPresent()) {
                UserModel Found=Find_User.get();

                UserService.delete(Found);

                return "Deletion Successfully.......";


            }

            return "User Not Found Cannot Delete.....";

        }catch(Exception e){
            System.err.println("Server Error");

            return e.getMessage();
        }
    }

}
