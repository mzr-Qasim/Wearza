
import { Link } from "react-router"
import { useForm } from "react-hook-form"

function Login() {
    const {register, handleSubmit, watch, formState: { errors }} = useForm()
      const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className="title-bar">
                <div className="container custom-container-lg">
                    <div className="title-bar-inner">
                        <Link className="title-bar-link" to={"/"}>
                            Home
                        </Link>
                        <span>account</span>
                    </div>
                </div>
            </div>
            <section className="Login">
                <div className="container custom-container-sm">
                    <div className="Page-main-heading d-flex justify-content-center pb-4">
                        <h3>My Account</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="col-inner">
                                <b className="pb-3">LOGIN</b>
                                <small className="mb-4">If you have an account with us, please log in.</small>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("email", { required: true })}  type="text" className="mb-3 form" name="email" placeholder="Email" />
                                    {errors.email && <span style={{color:"red"}}>This field is required</span>}
                                    <input {...register("password", { required: true })}  type="password" className="mb-4 form" name="password" placeholder="Password" />
                                    {errors.password && <span style={{color:"red"}}>This field is required</span>}
                                    <div className="login-info">
                                        <button className="theme-btn primary_btn" type="submit">sign in</button>
                                        <Link className="forgot-password">Forgot your password?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="col-inner">
                                <b className="pb-3">NEW CUSTOMER?</b>
                                <small className="mb-4">Registering for this site allows you to access your order status and history. We’ll get a new account set up for you in no time. For this will only ask you for information necessary to make the purchase process faster and easier</small>
                                <Link to={"/create-account"} className="theme-btn primary_btn">create an account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Login