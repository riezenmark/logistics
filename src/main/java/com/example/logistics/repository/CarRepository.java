package com.example.logistics.repository;

import com.example.logistics.domain.Car;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Long> {
    @Override
    @EntityGraph(attributePaths = "model.maker")
    Page<Car> findAll(Pageable pageable);
}
