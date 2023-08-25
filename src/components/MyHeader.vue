<template>
  <header class="flex flex-col gap-3">
    <h1 class="text-4xl">{{ title }}</h1>
    <div class="flex justify-between gap-3">
      <my-input v-model.trim="inputValue" @keyup.enter="add" autofocus />
      <my-button primary @click="add">Add +</my-button>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {
      inputValue: ""
    };
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    add() {
      this.$emit("add", this.inputValue);
      this.inputValue = "";
    }
  }
};
</script>
