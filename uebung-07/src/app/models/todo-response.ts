export interface TodoResponse {
    id: string;
    title: string;
    description?: string;
    unread: boolean;
    completed: boolean;
    dueDate?: string;
}