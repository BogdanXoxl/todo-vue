<template>
  <li class="flex items-center justify-between py-2 pl-2 border-b-2">
    <div :class="completed && 'line-through'">
      <slot></slot>
    </div>
    <div class="flex gap-2">
      <my-button v-if="!completed" @click.stop="$emit('compelteItem')" primary>&#10003;</my-button>
      <my-button @click.stop="$emit('removeItem')">&minus;</my-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "MyListItem",
  emits: ["removeItem", "compelteItem"],
  props: {
    completed: Boolean
  }
};
</script>
