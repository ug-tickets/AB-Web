import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AB SITE</title>
        <meta name="description" content="African books site" />
        <link rel="icon" href="/favicomn.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">The African Books Site</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="#"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  )
}
