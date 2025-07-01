"use client"
import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/outline'


function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

function toggleMenu() {
  setIsOpen(!isOpen)
}
  return (
    <nav className={styles.navbar}>
        <div className={styles.navbarLogoContainer}>
          <div className='flex flex-row justify-center items-center'>
          
            <h1>GenHuman</h1>
            </div>
        </div>
        <div className={styles.navbarMenuButton} onClick={toggleMenu}>
            {isOpen ? <XMarkIcon className='h-6 w-6' /> : <Bars3BottomRightIcon className='h-6 w-6' />}
        </div>
        <div className={`${styles.navbarLinks} ${isOpen ? `${styles.open}` : ''}`}>
            <Link href="/">Inicio</Link>
            <Link href="/about">Sobre nosotros</Link>
            <Link href="https://github.com/JDDev7/next-js-weather-app" rel="noreferrer noopener" target="_blank">Github</Link>
        </div>
    </nav>
  )
}

export default Navbar