<template>
  <header class="flex flex-col gap-3">
    <div class="flex justify-between">
      <h1 class="text-4xl">{{ title }}</h1>
      <div class="flex">
        <MyButton
          type="file"
          title="Upload"
          @click="emit('upload')"
          class="rounded-l-md rounded-r-none border border-primary"
        >
          <IconUpload class="w-6 h-6" />
        </MyButton>
        <MyButton
          title="Download"
          @click="emit('download')"
          class="rounded-r-md rounded-l-none border-r border-y border-primary"
        >
          <IconDownload class="w-6 h-6" />
        </MyButton>
      </div>
    </div>
    <div class="flex justify-between gap-3">
      <MyInput v-model.trim="inputValue" @keyup.enter="add" autofocus :error="error" />
      <MyButton primary @click="add">Add +</MyButton>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  title: {
    type: String,
    required: true
  },
  error: Boolean
});

const emit = defineEmits(["add", "upload", "download"]);

const inputValue = ref("");

const add = () => {
  emit("add", inputValue.value);
  inputValue.value = "";
};
</script>
