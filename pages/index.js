//1. get data to render a list


import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Lessons from '../components/Lessons/Lessons'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      lessons: data
    }
  }
}


export default function Home({lessons}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Lessons lessons={lessons}/>
    </div>
  )
}
