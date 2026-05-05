import type { Todo } from "../../models/todo";

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
    getTodo(): Todo {
        return {
            id: '943jlfsgkl0',
            title: 'Hallo Welt',
            description: 'Das erste eigene Todo-Tag :-)',
            dueDate: new Date(),
            completed: false,
            unread: true
        };
    }
}