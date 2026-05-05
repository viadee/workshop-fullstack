package de.viadee.todoapp.controller;

import org.apache.http.HttpStatus;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.assertj.core.api.Assertions.assertThat;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;

import de.viadee.todoapp.model.Todo;
import de.viadee.todoapp.service.TodoService;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;

// webEnvironment = DEFINED_PORT sorgt dafür, dass die Controller über HTTP erreichbar sind, damit wir sie mit HTTP Requests testen können
// DEFINED_PORT lässt die Anwendung auf dem konfigurierten Port (default = 8080) laufen
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
class TodoControllerTest {

    private static final Todo TEST_TODO = new Todo("5", "Zufälliges Todo", "Die Beschreibung des zufälligen Todo", true,
            false, LocalDate.now());

    @Autowired
    private TodoController todoController;

    @MockitoBean
    private TodoService todoService;

    @Test
    void getAllTodosTest() {

        // vvvvv Hier konfigurieren, was der Mock zurückgeben soll vvvvv
        Mockito.when(todoService.getAllTodos()).thenReturn(List.of(TEST_TODO));
        // ^^^^^ Hier konfigurieren, was der Mock zurückgeben soll ^^^^^

        var todos = todoController.getTodos();

        assertThat(todos).containsExactly(TEST_TODO);

        // Verifiziert, dass die Methode getAllTodos() des Mocks aufgerufen wurde
        Mockito.verify(todoService).getAllTodos();
    }

    @Test
    void addTodo() {
        // APIs lassen sich auch gut mit RestAssured testen. So zum Beispiel:
        // Wenn der /todos Endpoint mit einem POST Request (und dem TEST_TODO als Daten) aufgerufen wird, 
        // soll die Request erfolgreich sein (Status Code 200)
        RestAssured
                .given().contentType(ContentType.JSON).body(TEST_TODO)
                .when().post("/todos")
                .then().onFailMessage("Fehler beim POST Aufruf des /todos Endpunkts").statusCode(HttpStatus.SC_OK);

        // ...und die Methode addTodo() des todo service sollte dadurch aufgerufen werden mit dem TEST_TODO als Parameter
        Mockito.verify(todoService).addTodo(TEST_TODO);
    }
}
