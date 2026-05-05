import type {TodoList} from "../../models/todo-list";
import styles from './todo-list-component.module.css';

export default function TodoListComponent({todos}: {todos: TodoList}) {

    if (!todos) {
        return <p>Loading todos...</p>;
    } else if (todos.length === 0) {
        return <p>No todos found.</p>;
    } else {
        return <>
            <div className={styles.todoListCard}>
                <div className={`${styles.todoListHeader} ${styles.todoListRow}`}><h2>Todos</h2></div>
                <ul className={styles.todoList}>
                    {todos.map((todo) => (
                        <li key={todo.id}
                            className={`${todo.completed ? styles.completed : ''} ${styles.todoListEntry}`}>
                            <h3 className={todo.unread ? styles.unread : styles.read}>{todo.title}</h3>
                            {todo.description && <p>{todo.description}</p>}
                            {todo.dueDate && <p>Fälligkeitsdatum: {todo.dueDate.toLocaleDateString()}</p>}
                        </li>
                    ))}
                </ul>
                <div className={`${styles.todoListRow} ${styles.todoListFooter}`}><p></p></div>
            </div>
        </>
    }
}