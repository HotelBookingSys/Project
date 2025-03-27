package com.Hotel.Management.repository;


import com.Hotel.Management.Model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface PersonRepository extends JpaRepository<UserModel, Long> {

    Optional<UserModel> findByEmail(String email);
}
