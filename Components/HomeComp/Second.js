import React from 'react';
import styles from './Home.module.scss';

const Second = () => {
  return (
    <div className={styles.secondCont}>
        <div className={styles.whatYouGet}>
            <p> A GLIMPSE OF AN <span>INCUBATION CELL</span></p>
        </div>

        <div className={styles.themeCont}>
            <p>Theme</p>
            <p className={styles.firstP}>The theme "Unleashing Imagination, Fueling Innovation" is all about the transformative power of ideas. At its core, this theme celebrates the creative spirit that drives human progress and empowers us to push boundaries and explore new frontiers. Whether it's through artistic expression, scientific inquiry, or technological innovation, this theme recognizes that imagination is the fuel that drives progress and innovation.</p>
            <div></div>
            <p className={styles.secondP}>It's about embracing the power of our own imaginations and using it to inspire new ideas, take risks, and push the limits of what's possible. Ultimately, this theme is about cultivating a culture of creativity and innovation, where anything is possible and the only limit is our own imagination.</p>
        </div>

        <div className={styles.Ambasdor}>
            <span>Campus Ambassador Program</span>
            <p>The Campus Ambassador Program for the Entrepreneurial Innovation Festival 2023 is a platform for young and talented students to represent their respective campuses and create a buzz about the event. It aims to encourage entrepreneurship and innovation among the youth and provide them with an opportunity to network with industry leaders. The ambassadors will be responsible for spreading awareness, promoting the festival, and managing the on-campus events. Join us to be a part of this exciting journey!</p>
        </div>
    </div>
  )
}

export default Second