import { useEffect, useState } from 'react'
import type { TodoList } from "../../models/todo-list";
import styles from './todo-list-component.module.css';
import { TodoService } from "../../services/todo-service/todo-service.ts";

export default function TodoListComponent() {

    const [todos, setTodos] = useState<TodoList>([{
        id: '943jlfsgkl0',
        title: 'Hallo Welt',
        description: 'Das erste eigene Todo-Tag :-)',
        dueDate: new Date(),
        completed: false,
        unread: true
    }]);

    if (!todos) {
        return <p>Loading todos...</p>;
    } else if (todos.length === 0) {
        return <p>No todos found.</p>;
    } else {
        return <>
            <div className={styles.todoListCard}>
                <div className={`${styles.todoListHeader} ${styles.todoListRow}`}><h2>Todos</h2></div>
                <div className={styles.todoListEntry}>
                    <h1 className={todos[0].completed ? styles.completed : ''}>
                        {todos[0].title}
                    </h1>
                    <p>{todos[0].description} </p>
                    Fällig: {todos[0].dueDate?.toDateString()}
                </div>
                <div className={`${styles.todoListRow} ${styles.todoListFooter}`}><p></p></div>
            </div>
        </>
    }
}