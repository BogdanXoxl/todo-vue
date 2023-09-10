<template>
  <input
    type="text"
    v-model="modelValue"
    :class="[
      'w-full border-2 border-solid  rounded-md outline-0 px-2 ',
      (error && 'border-danger shake') || 'border-primary focus:border-secondary'
    ]"
  />
</template>

<script setup lang="ts">
defineOptions({
  name: "MyInput"
});
defineProps({
  error: Boolean
});

const modelValue = defineModel<string>();
</script>

<style scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
