<template>
  <li class="flex items-start justify-between py-2 pl-2 border-b-2 max-w-lg w-full">
    <div :class="['break-words w-[calc(100%-100px)]', completed && 'line-through']">
      <slot></slot>
    </div>
    <div class="flex gap-2">
      <MyButton v-if="!completed" @click.stop="emit('completeItem')" primary>&#10003;</MyButton>
      <MyButton @click.stop="$emit('removeItem')">&minus;</MyButton>
    </div>
  </li>
</template>

<script setup lang="ts">
defineProps({
  completed: Boolean
});

const emit = defineEmits(["removeItem", "completeItem"]);
</script>
