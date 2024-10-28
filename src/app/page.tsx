'use client'

import Header from "./components/Header";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Banner />
      <Gallery/>
      <Footer />
    </>  
  );
}
