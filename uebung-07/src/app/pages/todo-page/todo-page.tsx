import AppHeader from "../../components/app-header/app-header.tsx";
import TodoListComponent from "../../components/todo-list-component/todo-list-component.tsx";

export default function TodoPage() {
     return <>
        <AppHeader />
        <main>
            <TodoListComponent  />
        </main>
    </>
}