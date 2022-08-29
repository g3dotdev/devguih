import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import {
  BsEnvelope,
  BsGithub,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsTwitch
} from 'react-icons/bs'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Guilherme Souza</title>
        <link rel="canonical" href="https://devguih.com" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Guilherme Souza</h1>
          <p className={styles.currentJob}>
            Currently working as a Software Engineer at <a href="https://projectmark.com" target="_blank" rel="noopener noreferrer">ProjectMark</a>
          </p>
          <p className={styles.description}>
            From Joinville, Brazil 🇧🇷
          </p>
        </main>
      </div>
      <footer className={styles.footer}>
        <a href="mailto:devguih@gmail.com" target="_blank" rel="noopener noreferrer" title="Send an email">
          <BsEnvelope />
        </a>
        <a href="https://github.com/devguih" target="_blank" rel="noopener noreferrer" title="Github">
          <BsGithub />
        </a>
        <a href="https://twitter.com/devguih" target="_blank" rel="noopener noreferrer" title="Twitter">
          <BsTwitter />
        </a>
        <a href="https://instagram.com/devguih" target="_blank" rel="noopener noreferrer" title="Instagram">
          <BsInstagram />
        </a>
        <a href="https://linkedin.com/in/devguih" target="_blank" rel="noopener noreferrer" title="Linkedin">
          <BsLinkedin />
        </a>
        <a href="https://twitch.com/devguih" target="_blank" rel="noopener noreferrer" title="Twitch">
          <BsTwitch />
        </a>
      </footer>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-B8WV9CVYZW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B8WV9CVYZW');
        `}
      </Script>
    </>
  )
}

export default Home
