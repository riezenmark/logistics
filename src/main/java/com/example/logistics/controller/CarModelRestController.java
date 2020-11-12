package com.example.logistics.controller;

import com.example.logistics.domain.CarModel;
import com.example.logistics.repository.CarModelRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/model")
public class CarModelRestController extends AbstractRestController<CarModel, CarModelRepository> {
    public CarModelRestController(CarModelRepository repository) {
        super(repository);
    }
}
