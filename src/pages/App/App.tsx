import React from 'react'
import { Main } from '..'

import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.App}>
      <header></header>
      <main>
        <Main />
      </main>
    </div>
  )
}

export { App }
