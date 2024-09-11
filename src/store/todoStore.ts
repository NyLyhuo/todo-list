import { defineStore } from "pinia";

export interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as TodoItem[],
        nextId: 1,
    }),
    getters: {
        completedTodos: (state) => state.todos.filter(todo => todo.completed),
        completedCount: (state) => state.todos.filter(todo => todo.completed).length,
        totalCount: (state) => state.todos.length,
    },
    actions: {
        addTodo(text: string) {
            this.todos.push({ id: this.nextId++, text, completed: false});
        },
        toggleTodoCompletion(id: number) {
            const todo = this.todos.find(todo => todo.id === id);
            if(todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo(id: number) {
            this.todos = this.todos.filter(todo => todo.id !== id);
        }
    }

});