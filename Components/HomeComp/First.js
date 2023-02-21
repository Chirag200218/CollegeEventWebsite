import React from 'react'
import Image from 'next/image'
import styles from './Home.module.scss';
import { Iceland,Antonio } from '@next/font/google';
const ice=Iceland({
    weight: '400',
    style:"normal",
    subsets:['latin'],

})
const ant = Antonio({
    weight: '400',
    style:"normal",
    subsets:['latin'],
})
export const First = () => {
   
  return (
    <>
    <div className={styles.HeaderCont}>
        <Image className={styles.ecll} src={'/images/16.png'} width={400} height={400} alt={"load"}></Image>
        <Image className={styles.ecll2} src={'/images/1.png'} width={300} height={300}></Image>
        <Image className={styles.ecll3} src={'/images/2.png'} width={300} height={300}></Image>
        <div className={styles.ImgCont}>
        <Image  className={styles.mainImg} src={'/images/SEIFH1.png'} layout="fill"  alt={"load"}></Image>
        </div>
        <p style={{position:"relative",zIndex:"1"}}>Unleashing Imagination, Fueling Innovation</p>
        <div className={styles.schedule}>
            <p className={ice.className}>13-15</p>
            <p className={ice.className}>March</p>
            <p className={ice.className}>2023</p>
        </div>
        <button>REGISTER NOW</button>
    </div>
     <div className={styles.CountDown}>
        <p>countdown</p>
        <div style={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <div className={styles.dateBox}>
                <p>Days</p>
                <p>69</p>
            </div>
            <div className={styles.dateBox}>
                <p>Days</p>
                <p>69</p>
            </div>
            <div className={styles.dateBox}>
                <p>Days</p>
                <p>69</p>
            </div>
            <div className={styles.dateBox}>
                <p>Days</p>
                <p>69</p>
            </div>
        </div>
    </div>
    <div className={styles.About}>
        <h1>ABOUT</h1>
        <p>
        Welcome to the SKIT Entrepreneurial Innovation Festival - 2023! This mega-event is designed to bring together some of the brightest and most innovative minds in the technology and business worlds to explore new ideas, share their knowledge, and inspire others to achieve greatness.
        </p>
        <p>
        Join us on an exciting journey to explore the cutting-edge of entrepreneurship and innovation, where you can unearth novel strategies to transform your dreams into tangible success. We're thrilled to have you with us!
        </p>
    </div>
    </>
  )
}
