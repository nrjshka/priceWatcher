import { createSlice } from '@reduxjs/toolkit'

import { initializeApp } from './middleware'
import { AppStoreType } from './types'

const initialState: AppStoreType = {
  isLoading: true,
}

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(initializeApp.fulfilled, (state) => {
      state.isLoading = false
    })
  },
})

const { reducer } = app

export default reducer

export * from './middleware'
export * from './types'