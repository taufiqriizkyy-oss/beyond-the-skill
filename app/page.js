import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Authority from '@/components/Authority';
import Philosophy from '@/components/Philosophy';
import Programs from '@/components/Programs';
import WhyTrainHere from '@/components/WhyTrainHere';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import ApplicationForm from '@/components/ApplicationForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      <Hero />
      <Authority />
      <Philosophy />
      <Programs />
      <WhyTrainHere />
      <Testimonials />
      <Gallery />
      <ApplicationForm />
      <Footer />
    </main>
  );
}
