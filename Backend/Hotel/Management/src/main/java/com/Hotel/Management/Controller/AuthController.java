package com.Hotel.Management.Controller;

import com.Hotel.Management.DTO.LoginRequest;
import com.Hotel.Management.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        return authService.authenticateUser(request.getEmail(),request.getPassword());
    }
}
