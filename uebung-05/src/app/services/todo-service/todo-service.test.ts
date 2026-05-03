import { describe, it, expect, vi } from 'vitest';
import { TodoService } from './todo-service';
import type { Todo } from '../../models/todo';


describe('TodoService', () => {
    it('returns the correct todos', async () => {
        //Arrange
        const todos: Todo[] = [{ id: '1', title: 'Hallo Welt!', completed: false, unread: false }];
        vi.spyOn(TodoService.prototype, 'getTodo').mockImplementation(
            () => {
                return todos[0]
            });
        //Act
        const todo = TodoService.get().getTodo();
        //Assert
        expect(todo).toBe(todos[0]);
    });
});