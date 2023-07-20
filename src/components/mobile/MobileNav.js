import { faList } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const MobileNav = () => {
    const [showingNav, setShowingNav] = useState(false);
    const toggleNav = () => {
        setShowingNav(!showingNav);
    }
    return (
        <header className="mobile nav">
            <div className="content">
                <div className="top-bar space-between">
                    <div className="logo">
                        <img src="/images/logo.svg" alt="logo" />
                    </div>

                    <div className="nav-icon pointer" onClick={toggleNav}>
                        <FontAwesomeIcon icon={faList} width={24} height={24} />
                    </div>
                </div>
                <div className="relative">
                    <nav className={`navbar ${showingNav ? "show-nav" : ""}`}>
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
            </div>
        </header>
    )
}

export default MobileNav