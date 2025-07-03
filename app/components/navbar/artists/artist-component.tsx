/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import styles from './artist-component.module.css'
interface ArtistProps {
    name: string
    image1: string
    image2: string
    image3: string
}
function ArtistComponent({ name, image1, image2, image3 }: ArtistProps) {
  return (
    <div className={styles.ArtistContainer}>
        <h1>{name}</h1>
        <div className={styles.ArtistImageGrid}>
            <img src={image1} alt="Artist Image 1" fetchPriority='low' loading='lazy' decoding='async' className={styles.ArtistImage}/>
            <img src={image2} alt="Artist Image 2" fetchPriority='low' loading='lazy' decoding='async' className={styles.ArtistImage}/>
            <img src={image3} alt="Artist Image 3" fetchPriority='low' loading='lazy' decoding='async' className={styles.ArtistImage}/>
        </div>
        <div className={styles.AboutArtist}>
          <button className={styles.ArtistButton}>Sobre {name}</button>
        </div>
    </div>
  )
}

export default ArtistComponent