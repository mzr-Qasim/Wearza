import { Link } from "react-router";


function Create_Account() {
    return (
        <>
            <div className="title-bar">
                <div className="container custom-container-lg">
                    <div className="title-bar-inner">
                        <Link className="title-bar-link" to={"/"}>
                            Home
                        </Link>
                        <span>create account</span>
                    </div>
                </div>
            </div>
            <section className="Create-account">
                <div className="container custom-container-sm">
                    <div className="create-account-wrapper">
                        <div className="Page-main-heading d-flex justify-content-center pb-4">
                            <h3>Create an Account</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-inner">
                                    <input type="text" className="mb-3 form" placeholder="First Name" />
                                    <input type="text" className="mb-4 form" placeholder="Last Name" />
                                    <input type="text" className="mb-4 form" placeholder="User Name" />
                                    <input type="text" className="mb-4 form" placeholder="Email" />
                                    <input type="text" className="mb-4 form" placeholder="Password" />
                                    <input type="text" className="mb-4 form" placeholder="Re-enter Password" />
                                    <input type="file" placeholder="image" className="mb-4 form" />
                                    <button className="theme-btn primary_btn" type="submit">submit</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}


export default Create_Account