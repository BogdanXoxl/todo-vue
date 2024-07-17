<template>
  <div class="max-w-lg mx-auto px-3 pt-7 text-secondary bg-primary-white">
    <MyHeader
      title="Todo App"
      class="mb-5"
      :error="showError"
      @add="addTodo"
      @download="handleDownload"
      @upload="handleUpload"
    />
    <ToastAlert title="Todo cannot be empty!" v-model="showError" />
    <MyList
      class="todo"
      :items="todos.filter((todo) => !todo.completed)"
      @onRemoveItem="handleRemove"
      @onUpdateItem="handleUpdate"
      subtitle="Awesome, you complited all your todos!"
    />
    <MyList
      class="complited"
      title="Completed"
      :items="todos.filter((todo) => todo.completed)"
      @onRemoveItem="handleRemove"
      @onUpdateItem="handleUpdate"
    />
    <teleport to="#modal">
      <MyPopup ref="popup" />
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";

import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList/MyList.vue";
import ToastAlert from "./components/ToastAlert.vue";

import { download, upload, parseArrayFromJson } from "./utils";
import { useTodoStore } from "./pinia";

import type { MyPopup } from "./components/UI";
import type { Todo } from "./pinia/stores/todo";

const popup = ref<typeof MyPopup>();

const todoStore = useTodoStore();
const { showError, todos } = storeToRefs(todoStore);
const { addTodo, removeTodo, mergeTodos, updateTodo } = todoStore;

const handleRemove = async (id: number) => {
  const item = todos.value.find((todo) => todo.id === id);

  if (item) {
    if (!item.completed) {
      const result = await popup.value?.open({
        title: "Do you really wanna delete this todo?",
        text: item.title,
        subtext: new Date(item.id).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric"
        })
      });

      if (result) {
        removeTodo(item.id);
      }
    } else {
      removeTodo(item.id);
    }
  }
};

const handleDownload = () => {
  download("todos.json", JSON.stringify(todos.value));
};

const handleUpload = async () => {
  const fileTodos = await upload().then((txt: string) => parseArrayFromJson(txt));
  mergeTodos(fileTodos);
};

const handleUpdate = (todo: Todo) => {
  updateTodo(todo);
};
</script>
