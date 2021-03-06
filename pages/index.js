import Head from 'next/head'
import GridOne from '../components/Homepage/GridOne/GridOne'
import HeroImage from '../components/Homepage/HeroImage/HeroImage'
import HeroSection from '../components/Homepage/HeroSection/HeroSection'
import Navbar from '../components/Homepage/Navbar/Navbar'
import OurTools from '../components/Homepage/OurTools/OurTools'
import GridTwo from '../components/Homepage/GridTwo/GridTwo';
import GridThree from '../components/Homepage/GridThree/GridThree'
import GridFour from '../components/Homepage/GridFour/GridFour';
import GridFive from '../components/Homepage/GridFive/SingleGridFive';
import CompleteSEO from '../components/Homepage/CompleteSEO/CompleteSEO';
import Testimonials from '../components/Homepage/Testimonials/Testimonials';
import CompanyStars from '../components/Homepage/CompanyStars/CompanyStars';
import Footer from '../components/Homepage/Footer/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Bright Local SEO | MongoDB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Components goes here */}
      <Navbar />
      <HeroSection />
      <HeroImage />
      <OurTools />
      <GridOne />
      <GridTwo />
      <GridThree />
      <GridFour />
      <GridThree />
      <GridTwo />
      <CompleteSEO />
      <Testimonials />
      <CompanyStars />
      <Footer />
    </div>
  )
}
