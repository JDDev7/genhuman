import React from 'react'
import styles from './char-controls.module.css'
import { useCharacterStore } from '@/store/useCharacterStore'
function CharControls() {

  const parts = useCharacterStore((state) => state.parts)
  const nextOption = useCharacterStore((state) => state.nextOption)
  const prevOption = useCharacterStore((state) => state.prevOption)
  return (
          <div className={styles.Controls}>
              {parts.map((part) => (
        <div key={part.name} className={styles.PartControl}>
          <h3>{part.name}</h3>
          <div className={styles.Arrows}>
            <button 
              onClick={() => prevOption(part.name)}
              className={styles.ArrowButton}
              aria-label={`Anterior ${part.name}`}
            >
              ◀
            </button>
            <span className={styles.Counter}>
              {part.currentIndex + 1}/{part.options.length}
            </span>
            <button 
              onClick={() => nextOption(part.name)}
              className={styles.ArrowButton}
              aria-label={`Siguiente ${part.name}`}
            >
              ▶
            </button>
          </div>
        </div>
      ))}
      </div>
  )
}

export default CharControls