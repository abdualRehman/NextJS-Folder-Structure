import { configureStore } from '@reduxjs/toolkit';

export function makeStore() {
  return configureStore({
    reducer: {},
  });
}

export const store = makeStore();

export type RootSate = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
