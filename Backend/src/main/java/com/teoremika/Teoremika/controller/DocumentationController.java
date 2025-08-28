package com.teoremika.Teoremika.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.teoremika.Teoremika.model.Markdown;
import com.teoremika.Teoremika.model.Section;
import com.teoremika.Teoremika.service.SectionService;

@RestController
@RequestMapping("/api/v1/documentation")
public class DocumentationController {
  private final SectionService sectionService;

  public DocumentationController(SectionService sectionService) {
    this.sectionService = sectionService;
  }

  @GetMapping("/sections")
  public List<Section> getSection() {
    List<Section> test = sectionService.getThreeSections();
    return test;
  }

  @GetMapping("/md/{fileName}")
  public Markdown getMarkdown(@PathVariable String fileName) {
  try {
    Markdown response = new Markdown(fileName);
    return response;
  } catch (Exception e) {
     throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ресурс не найден");
  }

  }
}