import TodoIcon from '../todo-icon/todo-icon';
import ViadeeIcon from '../viadee-icon/viadee-icon';
import  './app-header.css';

export default function AppHeader() {

    return (
        <header className='AppHeader'>
                <TodoIcon numberOfTodos={0} />
                <h1 className='h1'>viaTodo</h1>
                <ViadeeIcon />
        </header>
    );
}