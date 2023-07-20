import Nav from '../../components/desktop/Nav'
import Lead from '../../components/desktop/Lead'
import Shortner from '../../components/Shortner'
import Statistics from '../../components/Statistics'
import Features from '../../components/Features'
import SubFooter from '../../components/SubFooter'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import MobileNav from '../../components/mobile/MobileNav'
import MobileLead from '../../components/mobile/Lead'

const Home = () => {
    const [pageWidth, setPageWidth] = useState(1200);
    const mobileWidth = 600;

  const handleWindowSizeChange = () => {
    const width = window.innerWidth;
    setPageWidth(width);
  };

  useEffect(() => {
    handleWindowSizeChange();
  })

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

    return (
        <section className="home">
            {pageWidth > mobileWidth && 
                <>
                    <Nav />
                    <Lead />
                    <Shortner />
                    <div className="grey-bg">
                        <Statistics />
                        <Features />
                    </div>
                    <SubFooter />
                    <Footer />
                </>
            }
            
            {pageWidth <= mobileWidth && 
            <>
                <MobileNav />
                <MobileLead />
                <Shortner isMobile={pageWidth <= mobileWidth} />
            </>}

        </section>
    )
}

export default Home