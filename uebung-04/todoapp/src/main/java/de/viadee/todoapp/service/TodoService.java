package de.viadee.todoapp.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import de.viadee.todoapp.model.Todo;
import de.viadee.todoapp.repository.TodoEntity;

@Service
public class TodoService {

    private final List<Todo> todos;

    public TodoService() {
        this.todos = new ArrayList<>();

        this.todos.add(new Todo("1", "Erstes Todo", "Beschreibung des ersten Todo", true, false, LocalDate.now()));
        this.todos.add(new Todo("2", "Zweites Todo", "Beschreibung des zweiten Todo", false, true,
                LocalDate.of(2025, 10, 23)));
    }

    public List<Todo> getAllTodos() {
        return Collections.unmodifiableList(todos);
    }

    public void addTodo(Todo todo) {
        this.todos.add(todo);
    }

    public Todo mapTodoEntityToTodo(TodoEntity todoEntity) {
        return new Todo(todoEntity.id, todoEntity.title,
                todoEntity.description, todoEntity.unread,
                todoEntity.completed, todoEntity.dueDate);
    }

    public TodoEntity mapTodoToTodoEntity(Todo todo) {
        return new TodoEntity(todo.getId(), todo.getTitle(),
                todo.getDescription(), todo.getUnread(),
                todo.getCompleted(), todo.getDueDate());
    }

}
