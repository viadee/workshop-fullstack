import { useEffect, useState } from "react";
import AppHeader from "../../components/app-header/app-header.tsx";
import TodoListComponent from "../../components/todo-list-component/todo-list-component.tsx";
import type { TodoList } from "../../models/todo-list.ts";
import { TodoService } from "../../services/todo-service/todo-service.ts";

export default function TodoPage() {

    const [todos, setTodos] = useState<TodoList>(TodoService.get().getTodos());

    useEffect(() => {
        const todoService = TodoService.get();
        let stopUpdate = false;
        const updateTodos: ((todos: TodoList) => void) = (todos?: TodoList) => {
            if (!stopUpdate) {
                setTodos(todos);
            }
        };
        todoService.loadTodosFromServer().then(updateTodos);
        return () => {
            stopUpdate = true;
        }
    }, []);

     return <>
        <AppHeader />
        <main>
            <TodoListComponent todos={todos} />
        </main>
    </>
}