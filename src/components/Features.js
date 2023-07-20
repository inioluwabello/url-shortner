
const Features = ({ isMobile }) => {
    return (
        <section className="features">
            <div className="content">
                <div className={`${isMobile ? "" : "flex"}`}>
                    <div className="feature-item">
                        <button className="feature-icon">
                            <img src="/images/icon-brand-recognition.svg" alt="brand=recognition" />
                        </button>
                        <div className="feature-details">
                            <div className="title">Brand Recognition</div>
                            <div className="details text-sm">
                                Boost your brand recognition with
                                each click. Generic links don't mean a
                                thing. Branded links help instill 
                                confidence in your content.
                            </div>
                        </div>
                    </div>
                    <div className="feature-item">
                        <button className="feature-icon">
                            <img src="/images/icon-detailed-records.svg" alt="" />
                        </button>
                        <div className="feature-details">
                            <div className="title">Detailed Records</div>
                            <div className="details">
                                Gain insight into who is clicking your
                                links. Knowing when and where people engage with
                                your content helps inform better decision
                            </div>
                        </div>
                    </div>
                    <div className="feature-item">
                        <button className="feature-icon">
                            <img src="/images/icon-fully-customizable.svg" alt="" />
                        </button>
                        <div className="feature-details">
                            <div className="title">Fully Customizable</div>
                            <div className="details">
                                Improve brand awareness and content discoverability
                                through customizable links, supercharging audience engagement.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-rule-container" style={{height: "10px"}}>
                    <div className={`background-rule ${isMobile ? "mobile" : ""}`}></div>
                </div>
            </div>
        </section>
    )
}

export default Features