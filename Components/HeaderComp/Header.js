import React from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'
const Header = () => {
  return (
    <div className={styles.headerFrame}> 
      <div style={{marginLeft:"5%"}}>
        <Image src={'/images/SEIF 2023.png'} width={75} height={75} alt="load"></Image>
      </div>
      <div className={styles.pageNameDiv}>
        <p>Speakers</p>
        <p>Sponsers</p>
        <p>Team</p>
        <p>CA</p>
        <p>Competitions</p>
        <p>Events</p>
        <p>Gallery</p>
      </div>
    </div>
  )
}

export default Header