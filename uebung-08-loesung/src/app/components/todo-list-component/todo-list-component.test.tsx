import { describe, it, vi, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { TodoList } from '../../models/todo-list';
import TodoListComponent from './todo-list-component';
import {TodoService} from "../../services/todo-service/todo-service.ts";

describe('TodoListComponent', () => {
    it('renders the todo item with the correct text', async () => {
        //Arrange
        const todos: TodoList = [{ id: '1', title: 'Hallo Welt!', completed: false, unread: false }];
        vi.spyOn(TodoService.prototype, 'loadTodosFromServer').mockImplementation(async () => {
            return todos;
        });
        //Act
        render(<TodoListComponent todos={todos}/>);
        //Assert
        await screen.findByText('Hallo Welt!');
        expect(screen.getByText('Hallo Welt!')).toBeInTheDocument();
    });
});