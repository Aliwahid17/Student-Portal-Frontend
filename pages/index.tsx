import type { NextPage } from 'next'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'

const Home: NextPage = () => {
  return (
    <>

      <Navbar />
      <HomePage />
      <Footer />

    </>


  )
}

export default Home
