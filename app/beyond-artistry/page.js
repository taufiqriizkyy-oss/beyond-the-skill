import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Beyond Artistry - Performance Excellence Training | Beyond The Skill',
  description: 'Advanced artistry and performance refinement program. Focus on expression, elegance, musicality, and performance identity.',
};

export default function BeyondArtistryPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-gray/10 blur-[150px] rounded-full" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back Link */}
          <Link 
            href="/#programs"
            className="inline-flex items-center gap-2 text-brand-red hover:text-brand-red/80 mb-12 transition-colors"
          >
            <span>←</span>
            <span className="text-sm uppercase tracking-widest">Back to Programs</span>
          </Link>

          {/* Label */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-brand-gray/50 text-brand-gray text-xs tracking-[0.3em] uppercase">
              Performance Refinement Program
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-brand-offwhite mb-8 leading-tight">
            BEYOND<br />
            <span className="text-brand-gray">ARTISTRY</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-brand-gray mb-12 font-light max-w-3xl">
            Transform your performance into art
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-brand-offwhite/80 leading-relaxed mb-12 max-w-3xl font-light">
            A refinement training program focused on artistry, expression, elegance, harmony, 
            musicality, and performance identity to make routines feel more alive and refined.
          </p>

          {/* CTA */}
          <a
            href="/#contact"
            className="inline-block px-10 py-5 bg-brand-red text-brand-offwhite font-display text-xl uppercase tracking-wider hover:bg-brand-red/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(239,6,6,0.6)]"
          >
            Apply for this Program
          </a>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-brand-black to-brand-black/95">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-brand-offwhite mb-16">
            PROGRAM FOCUS
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Artistry",
                description: "Develop artistic expression that captivates judges and audiences. Transform technical skills into memorable performances."
              },
              {
                title: "Elegance",
                description: "Cultivate grace and refinement in every movement. Make difficult skills look effortless and beautiful."
              },
              {
                title: "Expression",
                description: "Connect emotionally with your performance. Show personality and presence that brings routines to life."
              },
              {
                title: "Musicality",
                description: "Perfect timing and rhythm with music. Make every movement flow naturally with the musical phrasing."
              },
              {
                title: "Harmony",
                description: "Create cohesive routines where all elements work together. Balance strength with grace, power with finesse."
              },
              {
                title: "Performance Identity",
                description: "Develop your unique performance style. Stand out with authentic, memorable presentation."
              }
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-brand-gray pl-6">
                <h3 className="font-display text-2xl md:text-3xl text-brand-gray mb-4">
                  {item.title}
                </h3>
                <p className="text-brand-offwhite/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Achieve */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-brand-offwhite mb-16">
            WHAT YOU'LL ACHIEVE
          </h2>

          <div className="space-y-8">
            {[
              "Higher artistic scores through refined presentation",
              "Enhanced stage presence and confidence",
              "Improved musicality and timing",
              "Memorable, captivating performances",
              "Authentic personal performance style",
              "Competition-ready artistic quality"
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 p-6 border border-brand-offwhite/10 hover:border-brand-gray/30 transition-all duration-300">
                <div className="w-2 h-2 bg-brand-gray mt-2 flex-shrink-0" />
                <p className="text-brand-offwhite/90 text-lg md:text-xl font-light">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl text-brand-offwhite mb-8">
            READY TO ELEVATE YOUR ARTISTRY?
          </h2>
          <p className="text-xl text-brand-gray mb-12 font-light">
            Transform your performance into unforgettable art.
          </p>
          <a
            href="/#contact"
            className="inline-block px-12 py-6 bg-brand-red text-brand-offwhite font-display text-2xl uppercase tracking-wider hover:bg-brand-red/90 transition-all duration-300 hover:shadow-[0_0_40px_rgba(239,6,6,0.6)]"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
