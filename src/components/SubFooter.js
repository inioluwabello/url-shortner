
const SubFooter = ({ isMobile }) => {
    return (
        <section className={`sub-footer text-center ${isMobile ? "mobile" : ""}`}>
            <h1>Boost your links today</h1>
            <button className="btn btn-rnd btn-pry">Get Started</button>
        </section>
    )
}

export default SubFooter