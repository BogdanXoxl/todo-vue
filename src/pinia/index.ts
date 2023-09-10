import { createPinia } from "pinia";
import { localStoragePlugin } from "./plugins";
export { useTodoStore } from "./stores";

export const pinia = createPinia();

pinia.use(localStoragePlugin);
