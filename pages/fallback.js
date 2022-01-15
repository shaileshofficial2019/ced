import Head from 'next/head'
import styles from '../components/styles.module.css'

export default () => (
  <>
    <Head>
      <title>offline</title>
    </Head>
    <div className={styles.container}>
        <main className={styles.main}>
    <center>
    <h1>You Are Offline</h1>
    <h2>Please Check Your Internet Connection</h2>
    </center>
    </main>
      </div>
  </>
)