


function Shop_Genie() {
    return (
        <>
            <button class="shop-genie" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">shop genie</button>

            <div class="offcanvas offcanvas-bottom shop-genie-canvas" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="container">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Summon Your Shopping Genie</h5>
                        <button class="menu_close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon-ham_close_btn"></i></button>
                    </div>
                    <div class="offcanvas-body small">
                        <div className="search-input-inner">
                            <textarea className="searchInput" rows="6" placeholder="Tell the Genie what you want — clothes, budget, or a wish..." type="text" name="search" />
                            <button className="search_query"><i className="icon-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Shop_Genie