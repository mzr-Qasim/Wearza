

import { MainHeroSection } from "../components/main_hero_section"
import { CategoriesCard } from "../components/categories_card"
import { ProductCard } from "../components/product_card"
import { products } from '../productCardData'
import { categoryCard } from "../categoryCard"
import { Link } from "react-router"



function Home() {
  return (
    <>
      <MainHeroSection />
      <section className="categories">
        <div className="container custom-container-xl">
          <div className="row">
            {
              categoryCard.map(categoryCard => <CategoriesCard product={categoryCard} />)
            }
          </div>
        </div>

      </section>
      <section className="product-cards">
        <div className="section-title">
          <h4>Recommended For You</h4>
          <p>We picked some items just for you</p>
        </div>
        <div className="container custom-container-lg">
          <div className="row">
            {
              products.map(product => <ProductCard product={product} />)
            }
          </div>
        </div>
        <div className="shop-all-btn">
          <Link className="theme-btn primary_btn">shop all</Link>
        </div>
      </section>
    </>
  )
}




export default Home