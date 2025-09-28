package com.teoremika.Teoremika.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teoremika.Teoremika.model.Problem;
import com.teoremika.Teoremika.service.ProblemService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/problems")
public class ProblemsController {
    private final ProblemService problemService;

    @GetMapping()
    public List<Problem> getSections() {
        return problemService.getAllProblems();
    }
}