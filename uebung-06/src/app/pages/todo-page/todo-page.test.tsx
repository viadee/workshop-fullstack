import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import TodoPage from './todo-page';
import type { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo-service/todo-service';
import styles from "./todo-page.module.css";

describe('TodoPage', () => {
   it('renders the todo item with the correct text', () => {
        //Arrange
        const todo: Todo = { id: '1', title: 'Todo', completed: false, unread: false, description: '', dueDate: new Date() };
        vi.spyOn(TodoService.prototype, 'getTodo').mockImplementation(() => {
            return todo;
        });
        //Act
        render(<TodoPage todo={TodoService.get().getTodo()}/>);
        //Assert
        expect(screen.getByText('Todo aus dem Service')).toBeInTheDocument();
        expect(screen.getByText('Beschreibung')).toBeInTheDocument();
    });
    it('renders title of unread items with styles.unread', () => {
        //Arrange
        const todo: Todo = { id: '1', title: 'Unread Item', completed: false, unread: true, description: 'This is an unread item', dueDate: new Date() };
        vi.spyOn(TodoService.prototype, 'getTodo').mockImplementation(() => {
            return todo;
        });
        //Act
        render(<TodoPage todo={TodoService.get().getTodo()}/>);
        //Assert
        expect(screen.getByText('Unread Item')).toHaveClass(styles.unread);
    });
});