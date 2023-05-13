import { useState } from 'react'

import Features from '../components/feature'
import Pricing from '../components/pricing'
import Stats from '../components/stats'
import Testimonial from '../components/testimonials'
import Sales from './contact'
import Footer from '../components/footer'
import Contact from './contact'
import Header from '@/components/header'
import Hero from '@/components/hero'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
  <>
    
      <Header/>
      <Hero/>
     
   
 
 <Features/>
<Pricing/>
<Stats/>
<Testimonial/>

<Footer/>
    </>
  )
}
