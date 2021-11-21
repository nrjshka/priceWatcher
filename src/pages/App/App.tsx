import React from 'react'

import { Header } from 'ui'
import { Main } from '..'

import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.Main}>
        <Main />
      </main>
    </div>
  )
}

export { App }
