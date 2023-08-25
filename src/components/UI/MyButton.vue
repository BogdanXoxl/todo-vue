<template>
  <button
    type="button"
    :class="[
      'rounded-md p-2 whitespace-nowrap text-primary-white px-4 text-center hover:brightness-90 active:brightness-75',
      (primary && 'bg-primary') || (danger && 'bg-danger') || 'bg-secondary',
      full && 'w-full'
    ]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    primary: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    }
  }
};
</script>
