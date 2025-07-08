"use client"
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './char-canvas.module.css'
import { useCharacterStore} from '@/store/useCharacterStore'
function CharCanvas() {

  const parts = useCharacterStore((state) => state.parts)
  return (
          <div className={styles.CharCreator}>
      {parts.map((part) => (
        <img 
          key={part.name}
          src={part.options[part.currentIndex]} 
          alt={part.name}
          className={styles.CanvasImage}
        />
      ))}
      </div>
  )
}

export default CharCanvas