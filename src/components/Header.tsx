import "./css.css"

const Header = () => {
    return (
        <div className="container">
            <div className="flex">
                <div>
                    <img className="logo" src="https://picsum.photos/20/20" alt="" />
                </div>
                <nav>
                    <ul className="ul">
                        <li><a href="">Home</a></li>
                        <li><a href="">Product</a></li>
                        <li><a href="">Detail</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Sign Up</a></li>
                        <li><a href="">Log In</a></li>
                    </ul>
                </nav>

            </div>

            <div><img className="banner" src="https://picsum.photos/1400/500" alt="" /></div>
        </div >
    )
}

export default Header;