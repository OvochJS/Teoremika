package com.teoremika.Teoremika.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.teoremika.Teoremika.model.Section;

public interface SectionRepository extends JpaRepository<Section, Integer> {
    List<Section> findAllByParentIsNull();

    @Query("""
                SELECT s
                FROM Section s
                JOIN s.markdownFile m
                WHERE (LOWER(s.title) LIKE LOWER(CONCAT('%', :keyword, '%')))
                   OR (LOWER(m.content) LIKE LOWER(CONCAT('%', :keyword, '%')))
            """)
    List<Section> searchByTitleOrMarkdownContent(@Param("keyword") String keyword);
}
