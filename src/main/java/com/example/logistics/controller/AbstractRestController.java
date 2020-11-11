package com.example.logistics.controller;

import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

public abstract class AbstractRestController<T, R extends JpaRepository<T, ?>> {
    protected R repository;

    public AbstractRestController(R repository) {
        this.repository = repository;
    }

    @GetMapping
    public Page<T> list(@PageableDefault Pageable pageable) {
        return repository.findAll(pageable);
    }

    @GetMapping("{id}")
    public T getOne(@PathVariable("id") T obj) {
        return obj;
    }

    @PostMapping
    public T add(@RequestBody T obj) {
        return repository.save(obj);
    }

    @PutMapping("{id}")
    public T update(@PathVariable("id") T objFromDatabase, @RequestBody T obj) {
        BeanUtils.copyProperties(obj, objFromDatabase, "id");
        return repository.save(objFromDatabase);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") T objFromDatabase) {
        repository.delete(objFromDatabase);
    }
}
