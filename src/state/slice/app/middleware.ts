import { createAsyncThunk } from '@reduxjs/toolkit'

import { AppActionTypes } from './types'

const initializeApp = createAsyncThunk(AppActionTypes.LOAD, async (_, { dispatch }) => {
  try {
    await Promise.all([].map((asyncThunk) => dispatch(asyncThunk)))
  } catch (e) {}
})

export { initializeApp }