
import { Link } from "react-router";
import LookBookProduct from "../components/lookbook_product";
import { products } from "../productCardData";

function LookBook() {
    return (
        <>
            <div className="title-bar">
                <div className="container custom-container-lg">
                    <div className="title-bar-inner">
                        <Link className="title-bar-link" to={"/"}>
                            Home
                        </Link>
                        <span>lookbook</span>
                    </div>
                </div>
            </div>
            <section className="lookbook-wrapper">
                <div className="container-fluid">
                    <div className="Page-main-heading d-flex justify-content-center pb-4">
                        <h3>Lookbook</h3>
                    </div>
                    <div className="row">
                        {
                            products.map(product => <LookBookProduct product={product} />)
                        }
                    </div>
                </div>
            </section>
        </>

    )
}

export default LookBook