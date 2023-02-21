import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../Components/HeaderComp/Header'
import { First } from '../Components/HomeComp/First'


export default function Home() {
  return (
    <>
      <Header/>
      <First/>
    </>
  )
}
