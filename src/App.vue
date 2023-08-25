<template>
  <div class="max-w-lg mx-auto px-3 pt-7 text-secondary bg-primary-white">
    <my-header title="Todo App" class="mb-5" @add="addTodo" />
    <my-list
      :items="todos.filter((todo) => !todo.completed)"
      @removeItem="removeTodo"
      @completeItem="completeTodo"
    />
    <my-list
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
        { id: 1, title: "Todo 1", completed: false },
        { id: 2, title: "Todo 2", completed: false },
        { id: 3, title: "Todo 3", completed: false },
        { id: 4, title: "Todo 4", completed: true },
        { id: 5, title: "Todo 5", completed: false }
      ]
    };
  },
  methods: {
    addTodo(title) {
      if (title)
        this.todos.push({
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

<style></style>
