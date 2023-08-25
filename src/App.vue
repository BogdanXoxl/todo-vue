<template>
  <div class="max-w-lg mx-auto px-3 pt-7 text-secondary bg-primary-white">
    <my-header title="Todo App" class="mb-5" @add="addTodo" />
    <my-list
      class="todo"
      :items="todos.filter((todo) => !todo.completed)"
      @removeItem="removeTodo"
      @completeItem="completeTodo"
      subtitle="Awesome, you complited all your todos!"
    />
    <my-list
      class="complited"
      title="Completed"
      :items="todos.filter((todo) => todo.completed)"
      @removeItem="removeTodo"
    />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList/MyList.vue";

export default {
  components: {
    MyHeader,
    MyList
  },
  data() {
    return {
      counter: 0,
      todos: [
        { id: 1, title: "Add animation", completed: true },
        { id: 2, title: "Fix styles when text too big", completed: true },
        { id: 3, title: "Add toast alert", completed: false },
        { id: 4, title: "Pop up on delete", completed: false },
        { id: 5, title: "Add download", completed: false },
        { id: 6, title: "Add upload", completed: false },
        { id: 7, title: "Add pinia", completed: false },
        { id: 8, title: "Add save to localstorage", completed: false },
        { id: 9, title: "Add typescript", completed: false }
      ]
    };
  },
  methods: {
    addTodo(title) {
      if (title)
        this.todos.unshift({
          id: Date.now(),
          title,
          completed: false
        });
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
    completeTodo(id) {
      // this.todos = this.todos.map((todo) => {
      //   if (todo.id === id) {
      //     return {
      //       ...todo,
      //       completed: true
      //     };
      //   }
      //   return todo;
      // });

      const newTodo = this.todos.find((todo) => todo.id === id);
      newTodo.completed = true;

      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.todos.push(newTodo);
    }
  }
};
</script>

<style scoped></style>
