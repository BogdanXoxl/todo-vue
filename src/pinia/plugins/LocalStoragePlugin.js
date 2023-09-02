// simple realization

export function localStoragePlugin(ctx) {
  if (ctx.options.persist) {
    ctx.store.$subscribe((e) => {
      if (e.events) {
        localStorage.setItem(e.storeId, JSON.stringify(ctx.store));
      }
    });
    return JSON.parse(localStorage.getItem(ctx.store.$id)) || ctx.store;
  }
}

// in prod use pinia-plugin-persistedstate or watch function with composition API
