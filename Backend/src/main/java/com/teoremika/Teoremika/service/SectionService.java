package com.teoremika.Teoremika.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.teoremika.Teoremika.model.Section;
import com.teoremika.Teoremika.repository.SectionRepository;

@Service
public class SectionService {
    private final SectionRepository sectionRepository;

    public SectionService(SectionRepository sectionRepository) {
        this.sectionRepository = sectionRepository;
    }

    public List<Section> getThreeSections() {
        return sectionRepository.findAllByParentIsNull();
    }

    public List<Section> searchSections(String keyword) {
        return sectionRepository.searchByTitleOrMarkdownContent(keyword);
    }
}
