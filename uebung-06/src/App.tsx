import './App.css'
import TodoPage from './app/pages/todo-page/todo-page'
import {TodoService} from "./app/services/todo-service/todo-service.ts";


export default function App() {
    return <TodoPage todo={TodoService.get().getTodo()}/>
}
