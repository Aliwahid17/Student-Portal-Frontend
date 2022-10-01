import type { NextPage } from 'next'
import Com from './components/Com'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const Home: NextPage = () => {
  return (
    <>

      <Navbar />
      <Com />
      <Footer />

    </>


  )
}

export default Home
