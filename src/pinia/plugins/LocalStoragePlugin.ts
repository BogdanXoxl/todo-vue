// simple realization

import type { PiniaPluginContext } from "pinia";

declare module "pinia" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface DefineStoreOptionsBase<S, Store> {
    persist?: Boolean;
  }
}

export function localStoragePlugin(ctx: PiniaPluginContext) {
  if (ctx.options.persist) {
    ctx.store.$subscribe((e) => {
      localStorage.setItem(e.storeId, JSON.stringify(ctx.store.$state));
    });

    return { ...ctx.store.$state, ...JSON.parse(localStorage.getItem(ctx.store.$id) || "{}") };
  }
}

// in prod use pinia-plugin-persistedstate or watch function with composition API
