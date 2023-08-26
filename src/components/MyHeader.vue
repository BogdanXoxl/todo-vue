<template>
  <header class="flex flex-col gap-3">
    <div class="flex justify-between">
      <h1 class="text-4xl">{{ title }}</h1>
      <div class="flex">
        <my-button
          type="file"
          @click="$emit('upload')"
          class="rounded-l-md rounded-r-none border border-primary"
        >
          <icon-upload class="w-6 h-6" />
        </my-button>
        <my-button
          @click="$emit('download')"
          class="rounded-r-md rounded-l-none border-r border-y border-primary"
        >
          <icon-download class="w-6 h-6" />
        </my-button>
      </div>
    </div>
    <div class="flex justify-between gap-3">
      <my-input v-model.trim="inputValue" @keyup.enter="add" autofocus :error="error" />
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
    },
    error: Boolean
  },
  methods: {
    add() {
      this.$emit("add", this.inputValue);
      this.inputValue = "";
    }
  }
};
</script>
