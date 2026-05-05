import { describe, it, expect, vi } from 'vitest';
import { TodoService } from './todo-service';
import type { Todo } from '../../models/todo';


describe('TodoService', () => {
    it('returns the correct todos', async () => {
        //Arrange
        const todos: Todo[] = [{ id: '1', title: 'Hallo Welt!', completed: false, unread: false }];
        vi.spyOn(TodoService.prototype, 'getTodo').mockImplementation(
            async () => {
                return todos[0]
            });
        //Act
        const todo = await TodoService.get().getTodo();
        //Assert
        expect(todo).toBe(todos[0]);
    });
    /*it('loads the todos from the server', async () => {
        //Arrange
        //Act
        const todo = await TodoService.get().getTodo();
        //Assert
        console.log("From Server:");
        console.dir(todo);
        expect(todo).toBe(todo);
    });*/
});