<template>
  <input
    type="text"
    :value="modelValue"
    @input="handleInputChange"
    :class="[
      'w-full border-2 border-solid  rounded-md outline-0 px-2 ',
      (error && 'border-danger shake') || 'border-primary focus:border-secondary'
    ]"
  />
</template>

<script lang="ts">
export default {
  name: "MyInput",
  emits: ["update:modelValue"],
  props: {
    modelValue: String,
    error: Boolean
  },
  methods: {
    handleInputChange(event: Event) {
      this.$emit("update:modelValue", (event.target as HTMLInputElement).value);
    }
  }
};
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
