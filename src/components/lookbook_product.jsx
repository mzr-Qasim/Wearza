
import Zoom from 'react-medium-image-zoom';

function LookBookProduct(props) {
    return (
        <>
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="lookbook-image">
                    <Zoom>
                        <figure>
                            <img
                                src={props.product.image}
                                alt="Product Image"
                                style={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    cursor: 'pointer',

                                }}
                            />
                        </figure>
                    </Zoom>
                </div>
            </div >
            <div className="col-sm-6 col-md-6 col-lg-4">
                <div className="lookbook-image">

                    <Zoom>
                        <figure>
                            <img
                                src={props.product.hover_img}
                                alt="Product Image"
                                style={{
                                    width: '100%',
                                    objectFit: 'cover',
                                    cursor: 'pointer',

                                }}
                            />
                        </figure>
                    </Zoom>

                </div>
            </div>
        </>
    )
}

export default LookBookProduct