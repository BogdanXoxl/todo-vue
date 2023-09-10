<template>
  <div class="max-w-lg mx-auto px-3 pt-7 text-secondary bg-primary-white">
    <MyHeader
      title="Todo App"
      class="mb-5"
      :error="showError"
      @add="addTodo"
      @download="onDownload"
      @upload="onUpload"
    />
    <ToastAlert title="Todo cannot be empty!" :showError="showError" />
    <MyList
      class="todo"
      :items="todos.filter((todo) => !todo.completed)"
      @removeItem="onRemove"
      @completeItem="completeTodo"
      subtitle="Awesome, you complited all your todos!"
    />
    <MyList
      class="complited"
      title="Completed"
      :items="todos.filter((todo) => todo.completed)"
      @removeItem="onRemove"
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
// ERROR:: save localstorage DOES-NOT WORK AT PROD
// TODO:: remove all complited btn
// TODO:: add "show more" button
// TODO:: add scroll to top
// TODO:: update readme + icons

const popup = ref<typeof MyPopup>();

const todoStore = useTodoStore();
const { showError, todos } = storeToRefs(todoStore);
const { addTodo, removeTodo, mergeTodos, completeTodo } = todoStore;

const onRemove = async (id: number) => {
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

const onDownload = () => {
  download("todos.json", JSON.stringify(todos.value));
};

const onUpload = async () => {
  const fileTodos = await upload().then((txt: string) => parseArrayFromJson(txt));
  mergeTodos(fileTodos);
};
</script>
