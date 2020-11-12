package com.example.logistics.repository;

import com.example.logistics.domain.CarModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarModelRepository extends JpaRepository<CarModel, Long> {
    @Override
    @EntityGraph(attributePaths = "maker")
    Page<CarModel> findAll(Pageable pageable);
}
