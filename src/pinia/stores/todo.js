import { defineStore, mapStores, mapActions, mapState } from "pinia";

export const useTodoStore = defineStore("todo", {
  persist: true,
  state: () => ({
    showError: false,
    todos: [
      { id: 1, title: "Add animation", completed: true },
      { id: 2, title: "Fix styles when text too big", completed: true },
      { id: 3, title: "Add toast alert", completed: true },
      { id: 4, title: "Pop up on delete", completed: true },
      { id: 5, title: "Add download", completed: true },
      { id: 6, title: "Add upload", completed: true },
      { id: 7, title: "Add save to localstorage", completed: true },
      { id: 8, title: "Add state manager", completed: true },
      { id: 9, title: "Add typescript", completed: false },
      { id: 10, title: "Add a11y", completed: false },
      { id: 11, title: "Rewrite to composition api", completed: false },
      { id: 12, title: "Add edit functionality", completed: false }
    ]
  }),

  actions: {
    addTodo(title) {
      if (title)
        this.todos.unshift({
          id: Date.now(),
          title,
          completed: false
        });
      else {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 3000);
      }
    },

    mergeTodos(todos) {
      this.todos = Array.from(
        [...todos, ...this.todos].reduce((m, o) => m.set(o.id, o), new Map()).values()
      );
    },

    async removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },

    completeTodo(id) {
      const newTodo = this.todos.find((todo) => todo.id === id);
      newTodo.completed = true;

      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.todos.push(newTodo);
    }
  }
});

export default {
  computed: {
    ...mapStores(useTodoStore),
    ...mapState(useTodoStore, ["todos", "showError"])
  },
  methods: {
    // gives access to this.increment()
    ...mapActions(useTodoStore, ["addTodo", "completeTodo"])
  }
};

// load todos before render app
// load todos after mutate state
