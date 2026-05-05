package de.viadee.todoapp.repository;

import java.time.LocalDate;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.domain.Persistable;
import org.springframework.data.relational.core.mapping.Table;

@Table("TODO")
public class TodoEntity implements Persistable<String> {

    @Id
    public String id;
    public String title;
    public String description;
    public Boolean unread = false;
    public Boolean completed = false;
    public LocalDate dueDate;

    @Transient
    private boolean isNew = true;

    public TodoEntity(String id, String title, String description, Boolean unread, Boolean completed,
            LocalDate dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.unread = unread;
        this.completed = completed;
        this.dueDate = dueDate;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public boolean isNew() {
        return isNew;
    }

    public void setNew(boolean isNew) {
        this.isNew = isNew;
    }
}
