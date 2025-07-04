"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './char-canvas.module.css'
function CharCanvas() {
  return (
          <div className={styles.CharCreator}>
        <img src="prueba.png" alt="" className={styles.CanvasImage} />
      </div>
  )
}

export default CharCanvas