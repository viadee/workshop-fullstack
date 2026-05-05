import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import TodoPage from './todo-page';
import type { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo-service/todo-service';

describe('TodoPage', () => {
   it('renders the todo item with the correct text', async () => {
        //Arrange
        const todo: Todo = { id: '1', title: 'Todo aus dem Service', completed: false, unread: false, description: 'Beschreibung', dueDate: new Date() };
        vi.spyOn(TodoService.prototype, 'loadTodosFromServer').mockImplementation(async () => {
            return [todo];
        });
        //Act
        render(<TodoPage />);
        //Assert
        await screen.findByText('Todo aus dem Service');
        expect(screen.getByText('Todo aus dem Service')).toBeInTheDocument();
        expect(screen.getByText('Beschreibung')).toBeInTheDocument();
    }); 
});