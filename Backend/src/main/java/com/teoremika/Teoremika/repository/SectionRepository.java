package com.teoremika.Teoremika.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.teoremika.Teoremika.model.Section;

public interface SectionRepository extends JpaRepository<Section, Integer> {
    List<Section> findAllByParentIsNull();
}
