<template>
  <div class="flex items-center justify-between py-2 pl-2 border-b-2 max-w-lg w-full">
    <div :class="['break-words w-[calc(100%-100px)]', completed && 'line-through']">
      <slot></slot>
    </div>
    <div class="flex gap-1">
      <MyButton v-if="!completed" @click.stop="emit('onCompleteItem')" primary>&#10003;</MyButton>
      <MyButton v-if="!completed" @click.stop="$emit('onEditItem')">&#9998;</MyButton>
      <MyButton v-if="completed" @click.stop="$emit('onBackItem')">&orarr;</MyButton>
      <MyButton @click.stop="$emit('onRemoveItem')" danger>&minus;</MyButton>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  completed: Boolean
});

const emit = defineEmits(["onCompleteItem", "onEditItem", "onBackItem", "onRemoveItem"]);
</script>
