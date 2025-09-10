package com.teoremika.Teoremika.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teoremika.Teoremika.dto.RegisterRequest;
import com.teoremika.Teoremika.model.UserEntity;
import com.teoremika.Teoremika.service.UserEntityService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/user")
public class UserEntityController {
    private final UserEntityService userEntityService;

    @PostMapping("/register")
    public ResponseEntity<UserEntity> register(@RequestBody RegisterRequest request) {
        UserEntity saved = userEntityService.register(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
