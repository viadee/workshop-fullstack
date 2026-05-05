import type { Todo } from "../../models/todo.ts";
import styles from "./todo-page.module.css";

export default function TodoPage({ todo }: { todo: Todo }) {
    return <div className={styles.todoListEntry}>
        <h1 className={todo.completed ? styles.completed : ''}>
            {todo.title}
        </h1>

        <p>{todo.description} </p>
        Fällig: {todo.dueDate?.toDateString()}
    </div>
;
}