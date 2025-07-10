
import { useForm } from "react-hook-form"

function Shop_Genie() {
        const {register, handleSubmit, watch, formState: { errors }} = useForm()
            const onSubmit = (data) => console.log(data)
    return (
        <>
            <button className="shop-genie" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">shop genie</button>
            <div className="offcanvas offcanvas-bottom shop-genie-canvas" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="container">
                    <div className="offcanvas-header mb-5">
                        <button className="menu_close" data-bs-dismiss="offcanvas" aria-label="Close"><i className="icon-ham_close_btn"></i></button>
                    </div>
                    <div className="offcanvas-body small">
                        <div className="ai-bot-inner">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <textarea {...register("ai-chat-bot-textarea", { required: true })} name="ai-chat-bot-textarea" rows="6" placeholder="Tell the Genie what you want — clothes, budget, or a wish..."></textarea>
                                <button className="bot-submit-btn d-flex justify-content-center align-items-center" type="submit"><i className="icon-submit-btn"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Shop_Genie