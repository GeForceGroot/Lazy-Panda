import React from 'react'
import styles from '@/styles/About.module.css'

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>
          About Lazy-Panda
        </h1>
      </div>
      <div className={styles.cont2}>
        <h2>Introduction</h2>
        <br />
        <p className={styles.para}>Lazy Panda is a web-app for posting daily blogs that can be very usefull to express your thoughts, spontaneous and enjoying the little things of life. We love to have fun and are blessed to be young at heart and mind. So, we bring you an lazy padna for posting daily blogs.</p>
      </div>
      <div className={styles.cont2}>
        <h2>Serives Offered</h2>
        <br />
          <ul className={styles.count3}>
            <li>Content Creation.</li>
            <li>AI Digital Art.</li>
            <li>Graphic Design.</li>
            <li>Freelance Photography.</li>
            <li>Website Creation.</li>
            <li>Course Creation.</li>
            <li>Digital products.</li>
            <li> Content writing services.</li>
          </ul>
      </div>
      <div className={styles.cont2}>
        <h2>Contact Us</h2>
        <br />
        <p className={styles.para}>Email - tiwarishreyansh3@gmail.com</p>
        <br/>
        <p className={styles.para}>Github - GeFroceGroot</p>
        <br/>
        <p className={styles.para}>Phone - 9873216969</p>
      </div>
    </>
  )
}

export default About;
