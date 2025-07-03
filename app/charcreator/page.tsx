import React from 'react'
import styles from './charcreator.module.css'
function CreatorPage() {
  return (
    <div className={styles.Container}>
      <div className={styles.CharCreator}>
        <p>Aqui va el creador de pjs</p>
      </div>
      <div className={styles.Controls}>
        <p>Aqui van los controles</p>
      </div>
    </div>
  )
}

export default CreatorPage