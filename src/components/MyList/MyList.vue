<template>
  <transition name="mylist" mode="out-in" appear>
    <div v-if="items.length">
      <h2 v-if="title" class="text-2xl mt-5 mb-3 pb-3 border-primary border-b">{{ title }}</h2>
      <transition-group tag="ul" name="list" class="flex flex-col gap-2">
        <my-list-item
          v-for="item in items"
          :key="item.id"
          :completed="item.completed"
          @removeItem="$emit('removeItem', item.id)"
          @compelteItem="$emit('completeItem', item.id)"
        >
          {{ item.title }}
        </my-list-item>
      </transition-group>
    </div>
    <h2 v-else-if="subtitle" class="text-center">
      {{ subtitle }}
    </h2>
  </transition>
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
    title: String,
    subtitle: String
  }
};
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
