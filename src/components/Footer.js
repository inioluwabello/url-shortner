
const Footer = () => {
    return (
        <footer className="footer">
           <div className="grid">
                <div className="logo">Shortly</div>
                <div className="footer-column footer-features">
                    <div className="title bold">Features</div>
                    <div className="footer-feature-item">Link Shortening</div>
                    <div className="footer-feature-item">Branded Links</div>
                    <div className="footer-feature-item">Analytics</div>
                </div>
                <div className="footer-column footer-resources">
                    <div className="title bold">Resources</div>
                    <div className="footer-feature-item">Blog</div>
                    <div className="footer-feature-item">Developers</div>
                    <div className="footer-feature-item">Support</div>
                </div>
                <div className="footer-column footer-company">
                    <div className="title bold">Company</div>
                    <div className="footer-feature-item">About</div>
                    <div className="footer-feature-item">Our Team</div>
                    <div className="footer-feature-item">Careers</div>
                    <div className="footer-feature-item">Contact</div>
                </div>
                <div className="footer-column footer-icons space-between">
                    <img src="/images/icon-facebook.svg" alt="FB" />
                    <img src="/images/icon-twitter.svg" alt="TW" />
                    <img src="/images/icon-pinterest.svg" alt="PT" />
                    <img src="/images/icon-instagram.svg" alt="IG" />
                </div>
           </div>
        </footer>
    )
}

export default Footer