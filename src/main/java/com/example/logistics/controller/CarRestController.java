package com.example.logistics.controller;

import com.example.logistics.domain.Car;
import com.example.logistics.repository.CarRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/car")
public class CarRestController extends AbstractRestController<Car, CarRepository> {
    public CarRestController(CarRepository repository) {
        super(repository);
    }
}
