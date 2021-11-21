type AppStoreType = {
  isLoading: boolean
}

enum AppActionTypes {
  LOAD = 'APP/LOAD',
  INITIALIZE_WEB3 = 'APP/WEB3/INITIALIZE'
}

export { AppActionTypes }
export type { AppStoreType }