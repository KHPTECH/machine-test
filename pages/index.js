import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StoreLoacationTemplates from "../src/templates/storeLoacationTemplates"

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Benjos Store Location</title>
        <meta name="description" content="benjos store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoreLoacationTemplates />
      
    </div>
  )
}
