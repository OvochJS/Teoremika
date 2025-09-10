package com.teoremika.Teoremika.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.teoremika.Teoremika.model.MarkdownFile;
import com.teoremika.Teoremika.model.Section;
import com.teoremika.Teoremika.service.MarkdownFileService;
import com.teoremika.Teoremika.service.SectionService;

@RestController
@RequestMapping("/api/v1/documentation")
public class DocumentationController {
  private final SectionService sectionService;
  private final MarkdownFileService markdownFileService;
  

  public DocumentationController(SectionService sectionService, MarkdownFileService markdownFileService) {
    this.sectionService = sectionService;
    this.markdownFileService = markdownFileService;
  }

  @GetMapping("/sections")
  public List<Section> getSections() {
    List<Section> test = sectionService.getThreeSections();
    return test;
  }

  @GetMapping("/search")
  public List<Section> searchSections(@RequestParam String keyword) {
    return sectionService.searchSections(keyword);
  }

  @GetMapping("/md/{id}")
  public MarkdownFile getMarkdown(@PathVariable int id) {
    return markdownFileService.getMarkdownFile(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Файл не найден"));
  }
}