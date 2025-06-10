import { useState } from 'react'
import "./assets/css/main.css"
import { Navbar } from "./assets/components/navbar"
import { MainHeroSection } from "./assets/components/main_hero_section"
import { CategoriesCard } from "./assets/components/categories_card"
import { ProductCard } from "./assets/components/product_card"
import { products } from './productCardData'
import { categoryCard } from "./categoryCard"
function App() {

  return (
    <>
      <Navbar />
      <MainHeroSection />
      <section className="categories">
        <div className="container custom-container-xl">
          <div className="row">
            {
              categoryCard.map(categoryCard => <CategoriesCard product={categoryCard}/>)
            }
          </div>
        </div>

      </section>
      <section className="product-cards">
        <div className="container custom-container-lg">
          <div className="row">
            {
              products.map(product => <ProductCard product={product} />)
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default App
