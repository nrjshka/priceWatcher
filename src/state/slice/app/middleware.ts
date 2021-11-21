import { createAsyncThunk } from '@reduxjs/toolkit'

import { getWeb3 } from 'helpers'

import { AppActionTypes } from './types'

const initializeWeb3 = createAsyncThunk(AppActionTypes.INITIALIZE_WEB3, async () => {
  try {
    const web3 = await getWeb3()
  } catch (e) {

  }
});

const initializeApp = createAsyncThunk(AppActionTypes.LOAD, async (_, { dispatch }) => {
  try {
    await Promise.all([initializeWeb3()].map((asyncThunk) => dispatch(asyncThunk)))
  } catch (e) {}
})

export { initializeApp }