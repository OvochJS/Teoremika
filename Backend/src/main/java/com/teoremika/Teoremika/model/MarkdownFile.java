package com.teoremika.Teoremika.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "MarkdownFile")
public class MarkdownFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String content;

    @Column(name = "date", insertable = false, updatable = false)
    private LocalDateTime date;

    public MarkdownFile(String name, String content, LocalDateTime date) {
        this.name = name;
        this.content = content;
        this.date = date;
    }

    public MarkdownFile() {
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getContent() {
        return content;
    }

    public LocalDateTime  getDate() {
        return date;
    }
}
