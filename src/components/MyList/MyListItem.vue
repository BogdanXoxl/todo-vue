<template>
  <li class="flex items-start justify-between py-2 pl-2 border-b-2 max-w-lg w-full">
    <div :class="['break-words w-[calc(100%-100px)]', completed && 'line-through']">
      <slot></slot>
    </div>
    <div class="flex gap-2">
      <my-button v-if="!completed" @click.stop="$emit('compelteItem')" primary>&#10003;</my-button>
      <my-button @click.stop="$emit('removeItem')">&minus;</my-button>
    </div>
  </li>
</template>

<script lang="ts">
export default {
  name: "MyListItem",
  emits: ["removeItem", "compelteItem"],
  props: {
    completed: Boolean
  }
};
</script>
