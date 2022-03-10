import Head from 'next/head'
import Header from '../components/Header/index'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech-People</title>
        <link rel="icon" href="/tech-logo.png" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        
      </Head>

      <Header />
      
      

      
    </div>
  )
}