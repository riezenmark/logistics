package com.example.logistics.domain;

public interface ComboListItem {
    Long getId();

    String getName();

    void setId(Long id);

    void setName(String name);

    default String getRepresentation() {
        return getName();
    }
}
