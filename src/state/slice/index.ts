import { combineReducers } from 'redux'

import app, { AppStoreType } from './app'

const reducer = combineReducers({ app })

type StoreType = {
  app: AppStoreType
}

export { reducer }
export type { StoreType }

export * from './app'