import styles from "./todo-component.module.css";
import type {Todo} from "../../models/todo.ts";

export default function TodoComponent({todo}: { todo: Todo }) {
    return <li key={todo.id}
               className={`${todo.completed ? styles.completed : ''} ${styles.todoListEntry}`}>
        <h3 className={todo.unread ? styles.unread : styles.read}>{todo.title}</h3>
        {todo.description && <p>{todo.description}</p>}
        {todo.dueDate && <p>Fälligkeitsdatum: {todo.dueDate.toLocaleDateString()}</p>}
    </li>;
}