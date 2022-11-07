import type { NextPage } from 'next'
import BlogContents from '../components/home/BlogContents'
import Features from '../components/home/Features'
import Top from '../components/home/Top'

const Home: NextPage = () => {
  return (
    <>

      <Top/>
      <Features/>
      <BlogContents/>


    </>

  )
}

export default Home
