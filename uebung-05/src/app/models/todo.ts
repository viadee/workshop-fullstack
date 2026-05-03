export interface Todo {
    id: string;
    title: string;
    description?: string;
    unread: boolean;
    completed: boolean;
    dueDate?: Date;
}