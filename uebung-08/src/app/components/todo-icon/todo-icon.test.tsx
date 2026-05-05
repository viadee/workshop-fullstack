import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { TodoList } from '../../models/todo-list';
import TodoIcon from './todo-icon';

describe('TodoIcon', () => {
    it('renders the todo Icon with the correct number of todos', () => {
        //Arrange
        const todos: TodoList = [{ id: '1', title: 'Hallo Welt!', completed: false ,unread: false}, { id: '2', title: 'Noch ein Todo', completed: true, unread: true }];
        //Act
        render(<TodoIcon numberOfTodos={todos?.length} />);
        //Assert
        expect(screen.getByText('2')).toBeInTheDocument();
    });
});