package com.teoremika.Teoremika.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "sections")
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;

    @Column(name = "id_markdown_file", insertable = false, updatable = false)
    private Integer idMarkdownFile;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_markdown_file")
    @JsonIgnore
    private MarkdownFile markdownFile;

    @ManyToOne
    @JoinColumn(name = "id_parent") // колонка в БД
    @JsonBackReference
    private Section parent;

    @OneToMany(mappedBy = "parent")
    @JsonManagedReference
    private List<Section> children = new ArrayList<>();

    public Section() {
    }

    public Section(String title, Section parent, MarkdownFile markdownFile) {
        this.markdownFile = markdownFile;
        this.parent = parent;
        this.title = title;
    }

    public MarkdownFile getMarkdownFile() {
        return markdownFile;
    }

    public Integer getIdMarkdownFile() {
        return idMarkdownFile;
    }

    public Integer getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public List<Section> getChildren() {
        return children;
    }

    public Section getParent() {
        return parent;
    }
}
