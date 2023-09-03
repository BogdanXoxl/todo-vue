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
          <my-button danger full @click="confirm">Ok</my-button>
          <my-button full @click="close">Cancel</my-button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
export default {
  name: "MyPopup",
  popUpController: null,
  data() {
    return {
      isOpen: false,
      title: "",
      text: "",
      subtext: ""
    };
  },

  methods: {
    open({ title, text, subtext }: { title: string; text: string; subtext: string }) {
      this.title = title;
      this.text = text;
      this.subtext = subtext;

      let resolve, reject;

      const promise = new Promise<boolean>((res, rej) => {
        resolve = res;
        reject = rej;
      });

      this.$options.popUpController = { reject, resolve };
      this.isOpen = true;

      return promise;
    },

    close() {
      this.isOpen = false;
      this.$options.popUpController.resolve(false);
    },

    confirm() {
      this.$options.popUpController.resolve(true);
      this.close();
    }
  }
};
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
