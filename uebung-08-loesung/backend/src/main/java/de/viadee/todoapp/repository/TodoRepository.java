package de.viadee.todoapp.repository;

import org.springframework.data.repository.CrudRepository;

public interface TodoRepository extends CrudRepository<TodoEntity, String> {

}
