import { createSlice } from '@reduxjs/toolkit'

import { initializeApp, initializeWeb3 } from './middleware'
import { AppStoreType } from './types'

const initialState: AppStoreType = {
  isLoading: true,
  isWeb3Connected: false
}

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initializeApp.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(initializeWeb3.fulfilled, (state) => {
        state.isWeb3Connected = true
      })
      .addCase(initializeWeb3.rejected, (state) => {
        state.isWeb3Connected = false
      })
  },
})

const { reducer } = app

export default reducer

export * from './middleware'
export * from './types'