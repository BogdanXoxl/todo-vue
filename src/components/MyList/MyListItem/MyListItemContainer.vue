<template>
  <li>
    <MyListItem
      v-if="!isEdit"
      :completed="item.completed"
      @onCompleteItem="emit('onUpdateItem', { ...item, completed: true })"
      @onEditItem="isEdit = true"
      @onBackItem="emit('onUpdateItem', { ...item, completed: false })"
      @onRemoveItem="emit('onRemoveItem')"
    >
      {{ item.title }}
    </MyListItem>
    <MyListItemEdit v-else :defaultValue="item.title" @onEdit="handleEdit" />
  </li>
</template>

<script setup lang="ts">
import type { ListItem } from "./models";
import { ref } from "vue";
import MyListItem from "./MyListItem.vue";
import MyListItemEdit from "./MyListItemEdit.vue";

type Props = {
  item: ListItem;
};

const props = defineProps<Props>();

const emit = defineEmits({
  onRemoveItem: null,
  onUpdateItem: (item: ListItem) => item
});

const isEdit = ref(false);

const handleEdit = (title?: string) => {
  isEdit.value = false;

  if (title) {
    emit("onUpdateItem", { ...props.item, title });
  }
};
</script>

<style scoped>
.disableAnimation {
  transition: none !important;
}
</style>
