import Image from 'next/image'
import Footer from '../Components/FooterComp/Footer'
import Header from '../Components/HeaderComp/Header'
import { First } from '../Components/HomeComp/First'
import Second from '../Components/HomeComp/Second'


export default function Home() {
  return (
    <>
      <Header/>
      <First/>
      <Second/>
      <Footer/>
    </>
  )
}
