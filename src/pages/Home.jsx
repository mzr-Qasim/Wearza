

import { MainHeroSection } from "../components/main_hero_section"
import { CategoriesCard } from "../components/categories_card"
import { ProductCard } from "../components/product_card"
import { products } from '../productCardData'
import { Link } from "react-router"
import { StyleShowCaseCard } from "../components/style_showcase"
import { showCaseCard } from "../styleshowcase"




function Home() {
  return (
    <>
      <MainHeroSection />
      <section className="categories">
        <div className="container custom-container-xl">
          {/* <div className="row">
            {
              categoryCard.map(categoryCard => <CategoriesCard product={categoryCard} />)
            }
          </div> */}
          <CategoriesCard/>
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
          <Link to={"/shop"} className="theme-btn tertiary_btn">shop all</Link>
        </div>
      </section>
      <section className="style-showcase">
        <div className="container custom-container-lg">
          <div className="row">
            {
              showCaseCard.map(product => <StyleShowCaseCard product={product} />)
            }
          </div>
        </div>
      </section>
      <section className="seasonal-section">
        <div className="seasonal-section-inner">
          <div className="seasonal-caption">
            <h2 className="pb-3">new for spring</h2>
            <Link to={"/shop"} className="theme-btn quaternary_btn">shop now</Link>
          </div>
        </div>
      </section>
          
    </>
  )
}




export default Home