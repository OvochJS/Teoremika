package com.teoremika.Teoremika.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.teoremika.Teoremika.model.MarkdownFile;
import com.teoremika.Teoremika.repository.MarkdownFileRepository;

@Service
public class MarkdownFileService {
    private final MarkdownFileRepository markdownFileRepository;

    public MarkdownFileService(MarkdownFileRepository markdownFileRepository) {
        this.markdownFileRepository = markdownFileRepository;
    }

    public Optional<MarkdownFile> getMarkdownFile(int id) {
        return markdownFileRepository.findById(id);
    }
}