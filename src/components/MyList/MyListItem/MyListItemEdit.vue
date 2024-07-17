<template>
  <div class="flex justify-between py-2 border-b-2 max-w-lg w-full gap-1">
    <MyInput v-model.trim="inputValue" @keyup.enter="handleSubmit(inputValue)" autofocus />
    <MyButton @click.stop="handleSubmit(inputValue)" primary>&#10003;</MyButton>
    <MyButton @click.stop="handleSubmit()" danger>&#10005;</MyButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  defaultValue: String
});

const emit = defineEmits({
  onEdit: (title?: string) => title
});

const inputValue = ref(props.defaultValue);

const handleSubmit = (title?: string) => {
  emit("onEdit", title);
};
</script>
