import React from 'react'
import RecipeCarousel from '../../components/Recipes/RecipeCarousel'
import Header from '../../components/Header'
import * as styles from './Loja.module.css'
import Footer from '../../components/Footer'

const Loja = () => {
  

  return (
    <div className={styles.container}>
    <Header />
    <RecipeCarousel />
    <Footer/>
    </div>
  )
}

export default Loja