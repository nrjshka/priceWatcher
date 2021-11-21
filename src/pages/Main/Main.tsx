import React from 'react'

import { PriceTracker } from 'ui'

import styles from './Main.module.css'

const Main = () => {
  return (
    <div className={styles.MainPage}>
      <PriceTracker />
    </div>
  )
}

export { Main }
