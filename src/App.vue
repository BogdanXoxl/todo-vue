<template>
  <div class="max-w-lg mx-auto px-3 pt-7 text-secondary bg-primary-white">
    <my-header
      title="Todo App"
      class="mb-5"
      :error="showError"
      @add="addTodo"
      @download="onDownload"
      @upload="onUpload"
    />
    <toast-alert title="Todo cannot be empty!" :showError="showError" />
    <my-list
      class="todo"
      :items="todos.filter((todo) => !todo.completed)"
      @removeItem="onRemove"
      @completeItem="completeTodo"
      subtitle="Awesome, you complited all your todos!"
    />
    <my-list
      class="complited"
      title="Completed"
      :items="todos.filter((todo) => todo.completed)"
      @removeItem="onRemove"
    />
    <teleport to="#modal">
      <my-popup ref="popup" />
    </teleport>
  </div>
</template>

<script lang="ts">
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList/MyList.vue";
import ToastAlert from "./components/ToastAlert.vue";
import { download, upload, parseArrayFromJson } from "./utils";
import { TodoStore } from "./pinia";
import type { MyPopup } from "./components/UI";
// ERROR:: save localstorage DOES-NOT WORK
// TODO:: remove all complited btn
// TODO:: add scroll to top
// TODO:: update readme + icons
export default {
  mixins: [TodoStore],
  components: {
    MyHeader,
    MyList,
    ToastAlert
  },
  methods: {
    async onRemove(id: number) {
      const item = this.todos.find((todo) => todo.id === id);

      if (item) {
        if (!item.completed) {
          const result = await (this.$refs.popup as typeof MyPopup).open({
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
            this.todoStore.removeTodo(item.id);
          }
        } else {
          this.todoStore.removeTodo(item.id);
        }
      }
    },
    onDownload() {
      download("todos.json", JSON.stringify(this.todos));
    },

    async onUpload() {
      const fileTodos = await upload().then((txt: string) => parseArrayFromJson(txt));
      this.todoStore.mergeTodos(fileTodos);
    }
  }
};
</script>
