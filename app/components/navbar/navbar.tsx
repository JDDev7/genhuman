"use client"
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { montserrat } from '@/lib/utils'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

function toggleMenu() {
  setIsOpen(!isOpen)
}
  return (
    <nav className={`${styles.navbar} ${montserrat.className}`}>
        <div className={styles.navbarLogoContainer}>
          <div className={styles.navbarLogo}>
          
            <h1>GenHuman</h1>
            </div>
        </div>
        <div className={styles.navbarSearchContainer}>
          <MagnifyingGlassIcon className={styles.navbarSearchIcon} />
          <input type="text" className={styles.navbarSearchInput} placeholder="Buscar por artista" />
          
        </div>
        <div className={styles.navbarMenuButton} onClick={toggleMenu}>
            {isOpen ? <XMarkIcon className={styles.navbarMenuIcon} /> : <Bars3BottomRightIcon className={styles.navbarMenuIcon} />}
        </div>
        <div className={`${styles.navbarLinksContainer} ${isOpen ? `${styles.open}` : ''}`}>
            <Link className={styles.navbarLink} href="/">Inicio</Link>
            <Link className={styles.navbarLink} href="/about">Sobre nosotros</Link>
            <Link className={styles.navbarLink} href="https://github.com/JDDev7/genhuman" rel="noreferrer noopener" target="_blank">Github</Link>
        </div>
    </nav>
  )
}

export default Navbar