package de.viadee.todoapp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import de.viadee.todoapp.model.Todo;
import de.viadee.todoapp.repository.TodoEntity;
import de.viadee.todoapp.repository.TodoRepository;

@Service
public class TodoService {

    private TodoRepository todoRepository;

    public TodoService(TodoRepository repo) {
        this.todoRepository = repo;
    }

    public List<Todo> getAllTodos() {
        List<Todo> list = new ArrayList<>();
        todoRepository.findAll().forEach((todo) -> list.add(mapTodoEntityToTodo(todo)));
        return list;
    }

    public void addTodo(Todo todo) {
        TodoEntity todoEntity = mapTodoToTodoEntity(todo);
        if(todo.getId() == null) {
            todoEntity.id = ""+todo.hashCode();
            todoEntity.setNew(true);
        } else {
            todoEntity.setNew(false);
        }
        todoRepository.save(todoEntity);
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
