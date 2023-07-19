import Nav from '../../components/Nav'
import Lead from '../../components/Lead'
import Shortner from '../../components/Shortner'
import Statistics from '../../components/Statistics'
import Features from '../../components/Features'
import Footer from '../../components/Footer'

const Home = () => {
    return (
        <section className="home">
            <Nav />
            <Lead />
            <Shortner />
            <div className="grey-bg">
                <Statistics />
                <Features />
            </div>
            <Footer />
        </section>
    )
}

export default Home