package de.viadee.todoapp.controller;

import org.springframework.web.bind.annotation.RestController;

import de.viadee.todoapp.model.Todo;
import de.viadee.todoapp.service.TodoService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;         
    }   
    
    @GetMapping("/todos")
    public List<Todo> getTodos() {
        return todoService.getAllTodos();
    }
    
}
