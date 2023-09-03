import { createPinia } from "pinia";
import { localStoragePlugin } from "./plugins";
export { TodoStore, useTodoStore } from "./stores";

export const pinia = createPinia();

pinia.use(localStoragePlugin);
