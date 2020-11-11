package com.example.logistics.controller;

import com.example.logistics.domain.CarMaker;
import com.example.logistics.repository.CarMakerRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/maker")
public class CarMakerRestController extends AbstractRestController<CarMaker, CarMakerRepository> {
    public CarMakerRestController(CarMakerRepository repository) {
        super(repository);
    }
}
