import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import { Analytics } from '@vercel/analytics/react';
import AuthState from '../context/AuthState'


function MyApp({ Component, pageProps }: AppProps) {

  return <>

    <AuthState>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </AuthState>

  </>
}

export default MyApp
