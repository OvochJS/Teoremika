package com.teoremika.Teoremika.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teoremika.Teoremika.model.UserEntity;

public interface UserEntityRepository extends JpaRepository<UserEntity, Integer> {
    boolean existsByUsername(String username);
}
