<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full border-2 border-solid border-primary rounded-md outline-0 px-2 focus:border-secondary"
  />
</template>

<script>
export default {
  name: "MyInput",
  props: ["modelValue"],
  emits: ["update:modelValue"]
};
</script>
