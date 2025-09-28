package com.teoremika.Teoremika.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.teoremika.Teoremika.model.Problem;
import com.teoremika.Teoremika.repository.ProblemRepository;

@Service
public class ProblemService {
    private final ProblemRepository problemRepository;

    public ProblemService(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    public List<Problem> getAllProblems() {
        return problemRepository.findAll();
    }
}
