package de.viadee.todoapp.controller;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;

import de.viadee.todoapp.model.Todo;

class TodoControllerTest {

    private static final Todo TEST_TODO = new Todo("5", "Zufälliges Todo", "Die Beschreibung des zufälligen Todo", true,
            false, LocalDate.now());

    @Autowired
    private TodoController todoController;

    @Test
    void getAllTodosTest() {

        // vvvvv Hier konfigurieren, was der Mock zurückgeben soll vvvvv

        // ^^^^^ Hier konfigurieren, was der Mock zurückgeben soll ^^^^^

        var todos = todoController.getTodos();

        assertThat(todos).containsExactly(TEST_TODO);
    }

}
