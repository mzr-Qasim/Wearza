



import main_hero_img from "/images/main_hero.jpg"

export function MainHeroSection() {
    return (
        <section className="main_hero_section">
            <div className="main_hero_inner">
                <img className="main_hero_img" src={main_hero_img} alt="" />
                <div className="main_hero_caption">
                    <div className="container custom-container-lg">
                        
                        <h2 className="pb-3">New Arrivals</h2>
                        <p className="pb-3">Delicate fabrics and a neutral colour<br />palette are the details that give these pieces an edge.</p>
                        <a href="" className="theme-btn primary_btn">shop now</a>
                    </div>
                </div>
            </div>

        </section>
    )
}