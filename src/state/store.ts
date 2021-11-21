import { configureStore } from '@reduxjs/toolkit'

import { reducer, StoreType } from './slice'

const initStore = {}

const createStore = (preloadedState = initStore) =>
  configureStore({
    reducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  })

const store = createStore()

type AppStore = typeof store
type AppDispatch = typeof store.dispatch

export * from './slice'
export { store, createStore }
export type { AppDispatch, AppStore, StoreType }