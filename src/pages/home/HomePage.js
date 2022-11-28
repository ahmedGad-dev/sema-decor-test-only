import React from 'react'
import Directory from '../../components/directory/directory'
import CardsCollection from '../../components/cards-collection/CardsCollection'
import Features from '../../components/features/Features'
import { sections } from '../../directory.data'
import Head from '../../components/head/Head'
import Gallery from '../../components/gallery/Gallery'
import About from '../../components/about/About'

const HomePage = () => {
    return(
        <div> 
          <Head/>
          <Directory sections={sections}/>
          <Features/>
          <About/>
          <CardsCollection/>
          <Gallery/>
        </div>
    )
}

export default HomePage