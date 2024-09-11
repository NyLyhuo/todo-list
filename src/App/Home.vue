<script setup lang="ts">
import { ref } from "vue";
import { useTodoStore } from "../store/todoStore";
import { regular, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const todoStore = useTodoStore();
const newTodo = ref("");

const addNewTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value);
    newTodo.value = "";
  }
};

const toggleTodo = (id: number) => {
  todoStore.toggleTodoCompletion(id);
};

const removeTodo = (id: number) => {
  todoStore.removeTodo(id);
};
</script>

<template>
  <div
    class="relative flex items-center justify-center w-screen h-[200px] bg-highlight"
  >
    <h1 class="text-4xl font-black">todo</h1>
    <form
      @submit.prevent="addNewTodo"
      class="absolute h-14 -bottom-7 w-full max-w-3xl flex gap-2 py-0 px-4"
    >
      <input
        v-model="newTodo"
        type="text"
        class="bg-background border border-gray-400 text-text text-base rounded-lg h-auto py-0 px-4 flex-1"
        placeholder="add new task"
      />
      <button
        type="submit"
        class="bg-primary rounded-lg py-0 px-4 gap-2 font-bold font-sm"
      >
        Create <font-awesome-icon icon="fa-solid fa-plus" />
      </button>
    </form>
  </div>
  <div class="w-full max-w-3xl mx-auto mt-20">
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center justify-end gap-2">
        <p>Created tasks</p>
        <span class="bg-primary text-xs py-0.5 px-3 rounded-full">{{ todoStore.todos.length }}</span>
      </div>
      <div class="flex items-center justify-end gap-2">
        <p>Completed</p>
        <span class="bg-primary text-xs py-0.5 px-3 rounded-full">{{ todoStore.completedCount }} of {{ todoStore.totalCount }}</span>
      </div>
    </div>
    <div
      v-for="todo in todoStore.todos"
      :key="todo.id"
      class="border border-gray-300 rounded-lg p-4 flex items-center justify-start gap-4 mb-4"
    >
      <button @click="toggleTodo(todo.id)">
        <font-awesome-icon :icon="todo.completed ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle'" />
      </button>
      <p :class="{ 'line-through': todo.completed }" class="flex-1">
        {{ todo.text }}
      </p>
      <button @click="removeTodo(todo.id)">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </button>
    </div>
  </div>
</template>