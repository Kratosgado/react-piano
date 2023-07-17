import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Logo } from './components/Logo/Logo'
import styles from './App.module.css'

const App = () => {
  return (
    <div className={styles.app}>
      <Logo />
      <div className={styles.content} />
      <Footer />
    </div>
  )
}

export default App;