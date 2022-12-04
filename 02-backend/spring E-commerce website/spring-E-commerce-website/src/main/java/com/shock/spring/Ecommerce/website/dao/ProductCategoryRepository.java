package com.shock.spring.Ecommerce.website.dao;

import com.shock.spring.Ecommerce.website.entities.ProductCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

@Repository
@RepositoryRestResource(collectionResourceRel = "productCategory",path = "product-category") // by3rf path gdeed bdl el defaults
public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Long> {
}
