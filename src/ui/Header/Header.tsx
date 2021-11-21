import React from 'react'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.Header}>
      <div>Ethereum</div>
      <div>Address</div>
      <div>Block</div>
    </header>
  )
}

export { Header }
