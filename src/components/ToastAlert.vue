<template>
  <transition name="toast">
    <div v-if="showError" class="relative">
      <div
        class="w-full absolute rounded-md bg-danger/90 text-primary-white py-2 px-4 border-danger border-2"
      >
        <span>{{ title }}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ToastAlert",
  props: {
    title: String,
    showError: Boolean
  }
};
</script>

<style scoped>
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
.toast-enter-active {
  animation: shake 0.5s ease;
}

.toast-leave-active {
  transition: 0.5s ease all;
}

.toast-leave-to {
  opacity: 0;
}
</style>
