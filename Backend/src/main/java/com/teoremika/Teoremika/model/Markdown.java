package com.teoremika.Teoremika.model;

import java.io.IOException;
import java.nio.file.Files;

import org.springframework.core.io.ClassPathResource;

public class Markdown {
    private Long date;
    private String content;
    private String fileName;

    public Markdown(String fileName) throws IOException {
        ClassPathResource md = new ClassPathResource("static/" + fileName + ".md");
        this.fileName = fileName;
        this.content = Files.readString(md.getFile().toPath());
        this.date = md.lastModified();
    }


    public String getContent() {
        return content;
    }

    public String getFileName() {
        return fileName;
    }

    public Long getDate() {
        return date;
    }
}
