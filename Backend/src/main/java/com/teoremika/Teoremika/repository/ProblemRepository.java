package com.teoremika.Teoremika.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teoremika.Teoremika.model.Problem;

public interface ProblemRepository extends JpaRepository<Problem, Integer> {
}
