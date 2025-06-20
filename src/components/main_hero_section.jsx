



import main_hero_img from "/images/main_hero.jpg"
import { Link } from "react-router"

export function MainHeroSection() {
    return (
        <section className="main_hero_section">
            <div className="main_hero_inner">
                <img className="main_hero_img" src={main_hero_img} alt="" />
                <div className="main_hero_caption">
                    <div className="container custom-container-lg">
                        <div className="caption-inner">
                            <h2>New Arrivals</h2>
                            <p >Delicate fabrics and a neutral colour palette are the details that give these pieces an edge.</p>
                            <Link to={"/shop"} className="theme-btn primary_btn">shop now</Link>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}