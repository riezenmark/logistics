package com.example.logistics.repository;

import com.example.logistics.domain.CarMaker;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarMakerRepository extends JpaRepository<CarMaker, Long> {
}
