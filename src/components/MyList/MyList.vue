<template>
  <transition name="mylist" mode="out-in" appear>
    <div v-if="items?.length">
      <h2 v-if="title" class="text-2xl mt-5 mb-3 pb-3 border-primary border-b">{{ title }}</h2>
      <transition-group tag="ul" name="list" class="flex flex-col gap-2">
        <MyListItem
          v-for="item in items"
          :key="item.id"
          :item="item"
          @onRemoveItem="emit('onRemoveItem', item.id)"
          @onUpdateItem="(item: ListItem) => emit('onUpdateItem', item)"
        >
          {{ item.title }}
        </MyListItem>
      </transition-group>
    </div>
    <h2 v-else-if="subtitle" class="text-center h-[58px]">
      {{ subtitle }}
    </h2>
  </transition>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { ListItem } from "./MyListItem";
import { MyListItem } from "./MyListItem";

defineProps({
  fallback: String,
  items: Array as PropType<Array<ListItem>>,
  title: String,
  subtitle: String
});

const emit = defineEmits({
  onRemoveItem: (id: number) => id,
  onUpdateItem: (item: ListItem) => item
});
</script>

<style scoped>
.list-move,
.list-enter-active {
  transition: all 0.3s ease-in;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-150px);
}

.list-leave-active {
  transition: all 0.3s ease-in;
}

.mylist-enter-active,
.mylist-leave-active {
  transition: all 0.3s ease-in;
}

.mylist-enter-from,
.mylist-leave-to {
  transform: ranslateY(10px);
  opacity: 0;
}
</style>
