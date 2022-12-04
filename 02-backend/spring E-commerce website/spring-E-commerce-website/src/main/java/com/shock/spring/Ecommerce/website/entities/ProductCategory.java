package com.shock.spring.Ecommerce.website.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "product_category")

//instead of DATA
@Setter
@Getter
public class ProductCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "products")
    @OneToMany(cascade = CascadeType.ALL , mappedBy = "category")
    private Set<Product> products;
}
