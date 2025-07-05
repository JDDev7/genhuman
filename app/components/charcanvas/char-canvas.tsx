"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './char-canvas.module.css'
function CharCanvas() {
  return (
          <div className={styles.CharCreator}>
        <img src="torso.png" alt="" className={styles.CanvasImage} />
        <img src="cabesa.png" alt="" className={styles.CanvasImage} />
        <img src="ojos.png" alt="" className={styles.CanvasImage} />
        <img src="nariz.png" alt="" className={styles.CanvasImage} />
        <img src="boca.png" alt="" className={styles.CanvasImage} />
      </div>
  )
}

export default CharCanvas