import './header.css'

function Header({title , p1 , p2 , p3 , p4 , name , last}) {
    return(
        <>
            <header id='hero'>
                <div className="navbar-container">
                <div className="container d-flex justify-content-between align-items-center">
                <h2 className="logo">{title}</h2>
                <nav className="navbar">
                    <ul className="d-flex">
                    <li><a className="nav-link" href="#hero">{p1}</a></li>
                    <li><a className="nav-link" href="#about">{p2}</a></li>
                    <li><a className="nav-link" href="#services">{p3}</a></li>
                    <li><a className="nav-link" href="#blog">{p4}</a></li>
                    </ul>
                </nav>
                </div>
                </div>
                <h1 className="hero-title">I am {name} {last}</h1>
                <p className="hero-desc">Hello, world!</p>
            </header>
        </>
    )
}

export default Header