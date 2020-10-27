import Head from 'next/head'
import { useState } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import DragScroll from 'react-indiana-drag-scroll'
import { MyLoader, Hero, About } from '../components'
import styles from '../styles/Home.module.scss'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

export default function Home () {
  const [ isLoader, setIsLoader ] = useState(true)

  return (
    <div className={ styles.container }>
      <Head>
        <title>Lafen Lesley | Javascript Developer</title>
        <link rel='icon' href='/favicon.ico' />
        {/* <script src='/drift.js'></script> */ }
      </Head>

      {/* {isLoader && (
        <MyLoader open={ isLoader } onClose={ () => setIsLoader(false) } />
      ) } */}

      <HorizontalScroll style={ { height: '100vh' } } reverseScroll={ true }>
        <main>
          <section className={ styles.section }>
            <Hero />
          </section>

          <section>
            <About />
          </section>

          <section>
            <Projects />
          </section>

          <section>
            <Contact />
          </section>
        </main>
      </HorizontalScroll>
    </div>
  )
}
