<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      @click="close"
      class="fixed top-0 left-0 bottom-0 w-full h-full flex justify-center items-center bg-secondary/50"
    >
      <div @click.stop class="bg-primary-white px-3 py-2 rounded-md flex flex-col gap-3 w-80">
        <h1 class="text-xl text-center px-3">{{ title }}</h1>
        <p v-if="text" class="w-full text-justify">{{ text }}</p>
        <span v-if="subtext" class="text-sm text-primary">{{ subtext }}</span>
        <div class="flex gap-3">
          <MyButton danger full @click="confirm">Ok</MyButton>
          <MyButton full @click="close">Cancel</MyButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineOptions({ name: "MyPopup" });

let popUpController: {
  reject: (v: string) => void;
  resolve: (value: boolean | PromiseLike<boolean>) => void;
} | null = null;

let isOpen = ref(false);
let title = "";
let text = "";
let subtext = "";

const open = (data: { title: string; text: string; subtext: string }) => {
  title = data.title;
  text = data.text;
  subtext = data.subtext;

  const promise = new Promise<boolean>((resolve, reject) => {
    popUpController = { reject, resolve };
  });

  isOpen.value = true;

  return promise;
};

const close = () => {
  isOpen.value = false;
  popUpController?.resolve(false);
};

const confirm = () => {
  popUpController?.resolve(true);
  close();
};

defineExpose({ open });
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
