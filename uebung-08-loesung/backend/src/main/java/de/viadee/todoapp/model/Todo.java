package de.viadee.todoapp.model;

import java.time.LocalDate;
import java.util.Objects;

public class Todo {
    private String id;
    private String title;
    private String description;
    private Boolean unread = false;
    private Boolean completed = false;
    private LocalDate dueDate;

    public Todo(String id, String title, String description, Boolean unread, Boolean completed, LocalDate dueDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.unread = unread;
        this.completed = completed;
        this.dueDate = dueDate;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public Boolean getUnread() { return unread; }
    public void setUnread(Boolean unread) { this.unread = unread; }

    public Boolean getCompleted() { return completed; }
    public void setCompleted(Boolean completed) { this.completed = completed; }

    public LocalDate getDueDate() { return dueDate; }
    public void setDueDate(LocalDate dueDate) { this.dueDate = dueDate; }

    @Override
    public boolean equals(Object other) {
        if (this == other)  {
            return true;
        }
        if (!(other instanceof Todo todo)) { 
            return false;
        }
        return Objects.equals(id, todo.id) &&
                Objects.equals(title, todo.title) &&
                Objects.equals(description, todo.description) &&
                Objects.equals(unread, todo.unread) &&
                Objects.equals(completed, todo.completed) &&
                Objects.equals(dueDate, todo.dueDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, unread, completed, dueDate);
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", unread=" + unread +
                ", completed=" + completed +
                ", dueDate=" + dueDate +
                '}';
    }



}
