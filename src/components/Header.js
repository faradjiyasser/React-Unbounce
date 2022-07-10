import Navbar from "./Navbar";
const Header =()=>{
    const image = "/assets/images/header-image.png";
    return(
        <div className="header bg-dark">
            <Navbar />
            <div className="container">
                <div className="header__body">
                    <div className="row">
                        <div className="col-6">
                            <div className="header__body__left">
                                <h1 className="header__body__left__heading">
                                    smart marketing tool to grow your business
                                </h1>
                                <p className="header__body__left__paragraph">
                                Turn more of your visitors into customers. Unbounce is the AI-powered landing page builder with smart features that let you create beautiful, high-performing marketing campaigns in just a few minutes.
                                </p>
                                <input type="button" value="build landing pages" className="btn-blue mt-45" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="header__body__right">
                                <div className="header__body__right__image">
                                    <img src={image} alt="heading-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;