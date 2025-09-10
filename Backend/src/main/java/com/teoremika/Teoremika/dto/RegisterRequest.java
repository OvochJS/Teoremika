package com.teoremika.Teoremika.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class RegisterRequest {
    @NotBlank(message = "Логин обязателен")
    @Size(min = 3, max = 20, message = "Логин должен быть от 3 до 20 символов")
    private String username;

    @Email(message = "Некоректный email")
    private String email;

    @NotBlank(message = "Пароль обязателен")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
