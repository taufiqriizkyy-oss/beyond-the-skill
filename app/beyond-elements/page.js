import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Beyond Elements - Technical Precision Training | Beyond The Skill',
  description: 'Advanced technical execution refinement program. Focus on precision, body alignment, execution quality, and movement efficiency.',
};

export default function BeyondElementsPage() {
  return (
    <main className="min-h-screen bg-brand-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-red/10 blur-[150px] rounded-full" />
        
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
            <span className="inline-block px-6 py-2 border border-brand-red/50 text-brand-red text-xs tracking-[0.3em] uppercase">
              Technical Refinement Program
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-brand-offwhite mb-8 leading-tight">
            BEYOND<br />
            <span className="text-brand-red">ELEMENTS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-brand-gray mb-12 font-light max-w-3xl">
            Refine your technical execution to elite standards
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-brand-offwhite/80 leading-relaxed mb-12 max-w-3xl font-light">
            A refinement training program focused on improving technical execution quality 
            to make movements more efficient, precise, safe, consistent, and valuable in 
            scoring execution.
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
                title: "Technical Correction",
                description: "Identify and fix technical errors in form, alignment, and execution. Develop muscle memory for proper technique."
              },
              {
                title: "Precision",
                description: "Refine movements to exact specifications. Every angle, every position, every detail matters for scoring."
              },
              {
                title: "Body Alignment",
                description: "Perfect body positioning throughout movements. Achieve straight lines, pointed toes, and controlled landings."
              },
              {
                title: "Execution Quality",
                description: "Elevate the quality of skill execution. Move from 'can do' to 'mastered' level performance."
              },
              {
                title: "Movement Efficiency",
                description: "Eliminate wasted motion. Make every movement purposeful, controlled, and energy-efficient."
              },
              {
                title: "Consistency",
                description: "Develop reliability in execution. Perform skills at the same high level every single time."
              }
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-brand-red pl-6">
                <h3 className="font-display text-2xl md:text-3xl text-brand-red mb-4">
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
              "Higher execution scores through refined technique",
              "Reduced deductions from technical errors",
              "Improved consistency across all skills",
              "Safer, more controlled movements",
              "Enhanced body awareness and control",
              "Competition-ready execution quality"
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 p-6 border border-brand-offwhite/10 hover:border-brand-red/30 transition-all duration-300">
                <div className="w-2 h-2 bg-brand-red mt-2 flex-shrink-0" />
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
            READY TO REFINE YOUR TECHNIQUE?
          </h2>
          <p className="text-xl text-brand-gray mb-12 font-light">
            Start your journey to Olympic-level execution quality.
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
