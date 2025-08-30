package com.teoremika.Teoremika.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.teoremika.Teoremika.model.MarkdownFile;

public interface MarkdownFileRepository extends JpaRepository<MarkdownFile, Integer> {
}