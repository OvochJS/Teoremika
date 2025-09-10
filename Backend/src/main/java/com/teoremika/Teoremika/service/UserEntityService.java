package com.teoremika.Teoremika.service;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.teoremika.Teoremika.dto.RegisterRequest;
import com.teoremika.Teoremika.model.UserEntity;
import com.teoremika.Teoremika.repository.UserEntityRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserEntityService {
    private final UserEntityRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserEntity register(RegisterRequest request) {
        if(userRepository.existsByUsername(request.getUsername())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Пользователь уже существует");
        }

        UserEntity user = new UserEntity();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        return userRepository.save(user);
    }
}
