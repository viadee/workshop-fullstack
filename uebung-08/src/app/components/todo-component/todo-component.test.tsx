import { describe, expect, it } from "vitest";
import type {Todo} from "../../models/todo.ts";
import {render, screen} from "@testing-library/react";
import TodoComponent from "./todo-component.tsx";

describe('TodoComponent', () => {
    it('renders the todo item with the correct text', () => {
        //Arrange
        const todo:Todo = { id: '1', title: 'Hallo Welt!', completed: false, unread: false };
        //Act
        render(<TodoComponent todo={todo} />);
        //Assert
        expect(screen.getByText('Hallo Welt!')).toBeInTheDocument();
    });
});