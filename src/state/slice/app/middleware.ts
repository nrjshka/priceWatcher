import { createAsyncThunk } from '@reduxjs/toolkit'

import { getWeb3 } from 'helpers'

import { AppActionTypes } from './types'

const initializeWeb3 = createAsyncThunk(AppActionTypes.INITIALIZE_WEB3, async () => {
  await getWeb3()
});

const initializeApp = createAsyncThunk(AppActionTypes.LOAD, async (_, { dispatch }) => {
  try {
    await Promise.allSettled([initializeWeb3()].map((asyncThunk) => dispatch(asyncThunk)))
  } catch (e) {}
})

export { initializeApp, initializeWeb3 }