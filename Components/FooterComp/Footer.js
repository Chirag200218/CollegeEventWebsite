import React from 'react';
import styles from './footer.module.scss';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footerComp}>
        <div style={{width:"25%",display:"flex",alignItems:"center",justifyContent:'center'}}>
            <Image src={'/images/SEIF 2023.png'} width={150} height={150} alt={"alt"}></Image>
        </div>
        <div style={{width:"35%"}}>
            
        </div>
        <div style={{width:"25%",display:"flex",flexDirection:"column",justifyContent:'center'}}>
            <p style={{}}>Want to discuss with me?</p>
            <p>Feel free to email us at :  seif@skit.ac.in </p>
            <p style={{marginBottom:"50px"}}>Contact No.: +91-7740854960 (Akshat Khandelwal)</p>
            <div className={styles.social}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

            </div>
        </div>
    </div>
  )
}

export default Footer