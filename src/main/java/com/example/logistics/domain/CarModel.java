package com.example.logistics.domain;

import com.example.logistics.util.EntityIdResolver;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@JsonIdentityInfo(
        property = "id",
        generator = ObjectIdGenerators.PropertyGenerator.class,
        scope = CarModel.class,
        resolver = EntityIdResolver.class
)
public class CarModel implements ComboListItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToOne
    @JsonIdentityReference(alwaysAsId = true)
    private CarMaker maker;

    @Override
    @JsonIgnore
    public String getRepresentation() {
        return String.format("%s %s", maker.getName(), name);
    }
}
