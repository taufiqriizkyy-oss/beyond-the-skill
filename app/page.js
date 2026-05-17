import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Authority from '@/components/Authority'
import Philosophy from '@/components/Philosophy'
import Programs from '@/components/Programs'
import WhyTrainHere from '@/components/WhyTrainHere'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Authority />
      <Philosophy />
      <Programs />
      <WhyTrainHere />
      <Testimonials />
      <Gallery />
      <FinalCTA />
      <Footer />
    </main>
  )
}
