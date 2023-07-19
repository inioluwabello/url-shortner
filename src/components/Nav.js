
const Nav = () => {
    return (
        <header className="nav">
            <div className="content">
                <nav className="navbar space-between">
                    <div className="logo">
                        <img src="/images/logo.svg" alt="logo" />
                    </div>
                    

                    <ul>
                        <li>
                            <a href="/features">Features</a>
                        </li>
                        <li>
                            <a href="/pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="/resources">Resources</a>
                        </li>
                    </ul>

                    <ul className="auth-btns">
                        <li>
                            <button className="btn auth-btn login">Login</button>
                        </li>
                        <li>
                            <button className="btn auth-btn btn-rnd btn-pry register">Sign Up</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Nav