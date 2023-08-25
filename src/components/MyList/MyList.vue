<template>
  <div v-if="items.length">
    <h2 v-if="title" class="text-2xl mt-5 mb-3 pb-3 border-primary border-b">{{ title }}</h2>

    <ul class="flex flex-col gap-2">
      <my-list-item
        v-for="item in items"
        :key="item.id"
        :completed="item.completed"
        @removeItem="$emit('removeItem', item.id)"
        @compelteItem="$emit('completeItem', item.id)"
      >
        {{ item.title }}
      </my-list-item>
    </ul>
  </div>
</template>

<script>
import MyListItem from "./MyListItem.vue";

export default {
  name: "MyList",
  emits: ["removeItem", "completeItem"],
  components: {
    MyListItem
  },
  props: {
    fallback: String,
    items: Array,
    title: String
  }
};
</script>
