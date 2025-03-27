package com.Hotel.Management.Service;

import com.Hotel.Management.JWT_Token_Generation;
import com.Hotel.Management.Model.UserModel;
import com.Hotel.Management.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private PersonRepository UserRepository;

    @Autowired
    private JWT_Token_Generation jwtUtil;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String authenticateUser(String email, String password) {
        Optional<UserModel> user = UserRepository.findByEmail(email);

        if (user.isPresent() && passwordEncoder.matches(password, user.get().getPassword())) {
            return jwtUtil.Generate_Token(email, user.get().getRole());
        }

        throw new RuntimeException("Invalid Credentials");
    }
}
