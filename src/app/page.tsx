'use client'
import Image from "next/image";

import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '@/app/firebase/config'
import { useRouter } from 'next/navigation';

import Header from "./components/Header";
import Slider from "./components/Slider";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {

  const [user] = useAuthState(auth);
  const router = useRouter()
  const userSession = sessionStorage.getItem('user');
 
  if (!user && !userSession){
    router.push('/sign-up')
  }

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
