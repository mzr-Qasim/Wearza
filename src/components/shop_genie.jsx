


function Shop_Genie() {
    return (
        <>
            <button className="shop-genie" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">shop genie</button>
            <div className="offcanvas offcanvas-bottom shop-genie-canvas" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="container">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">Summon Your Shopping Genie</h5>
                        <button className="menu_close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon-ham_close_btn"></i></button>
                    </div>
                    <div className="offcanvas-body small">
                        <div className="search-input-inner">
                            <input className="searchInput" placeholder="Tell the Genie what you want — clothes, budget, or a wish..." type="text" name="search" />
                            <button className="search_query"><i className="icon-submit-btn"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Shop_Genie