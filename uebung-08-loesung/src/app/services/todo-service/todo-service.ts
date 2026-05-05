import type { Todo } from "../../models/todo";
import type { TodoList } from "../../models/todo-list";
import type { TodoResponse } from "../../models/todo-response";

export class TodoService {

    private constructor() {
    }

    private static INSTANCE: TodoService;
    public static get(): TodoService {
        if (!TodoService.INSTANCE) {
            return TodoService.INSTANCE = new TodoService();
        }
        return TodoService.INSTANCE;
    }

    // Demo-Funktion zum Abrufen eines einzelnen Todos
    async getTodo(): Promise<Todo> {
        const todos = await this.loadTodosFromServer();
        return todos[0];
    }

    getTodos(): Todo[] {
        return [];
    }



    async loadTodosFromServer(): Promise<Todo[]> {
        const response = await fetch('http://localhost:8080/todos');
        const todos: Todo[] = this.mapTodoResponse(await response.json());
        return todos;
    }

    mapTodoResponse(response: TodoResponse[]) {
        const result: TodoList = [];
        response.forEach((todo) => {
            result.push({
                ...todo,
                dueDate: todo.dueDate ? new Date(Date.parse(todo.dueDate)) : undefined
            })
        });
        return result;
    }
}