package com.Hotel.Management.repository;

import com.Hotel.Management.Model.BookingModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<BookingModel, Long> {

    @Override
    Optional<BookingModel> findById(Long aLong);
}
