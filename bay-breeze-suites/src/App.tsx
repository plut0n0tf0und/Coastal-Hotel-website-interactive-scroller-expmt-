import CanvasSequence from './components/CanvasSequence';

function App() {
  return (
    <div className="relative w-full">
      {/* Background Canvas Sequence */}
      <CanvasSequence />

      {/* Scrollytelling Content Container */}
      <div className="relative w-full z-10 flex flex-col">
        
        {/* Hero Section (0 - 25%) */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-12 text-center">
          <div className="glassmorphism p-8 sm:p-12 max-w-3xl transform transition-all duration-700 ease-out hover:scale-105">
            <h1 className="text-4xl sm:text-6xl font-heading font-bold mb-4">Where Luxury Meets Tranquility</h1>
            <p className="text-lg sm:text-xl font-body mb-8 opacity-90">
              A boutique hotel and homestay that redefines coastal hospitality in Chennai.
            </p>
            <button className="bg-white text-ocean px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-sand transition-colors">
              Reserve Your Stay
            </button>
          </div>
        </section>

        {/* The Sanctuary / Features (25% - 50%) */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-12">
          <div className="glassmorphism p-8 sm:p-12 max-w-4xl w-full">
            <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-6 text-center">The Sanctuary</h2>
            <p className="text-lg font-body mb-8 text-center max-w-2xl mx-auto opacity-90">
              Nestled in an elite, safe locality surrounded completely by lush trees and sitting just 300 meters from the sea.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
              {[
                "Complete Power Backup",
                "Digital Secured Door Locks",
                "In-house Restaurant",
                "Indoor Game Area",
                "Secured Car Parking"
              ].map((feature, i) => (
                <div key={i} className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-sand/30 flex items-center justify-center mb-3">
                    <span className="text-xl">✨</span>
                  </div>
                  <span className="font-body text-sm font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms & Suites (50% - 75%) */}
        <section className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-12">
          <div className="glassmorphism p-8 sm:p-12 w-full max-w-6xl">
            <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-10 text-center">Rooms & Suites</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Executive */}
              <div className="bg-ocean/50 p-6 rounded-xl border border-white/10 hover:border-sand transition-colors">
                <h3 className="text-2xl font-heading font-semibold text-sand mb-2">Executive Suite</h3>
                <div className="flex space-x-4 mb-4 text-xs uppercase tracking-wide opacity-70 font-bold">
                  <span>405 SQ.FT</span>
                  <span>Max 4 Persons</span>
                </div>
                <p className="font-body text-sm opacity-90">
                  Private Balcony with stunning views, modern luxury furnishings.
                </p>
              </div>
              {/* Deluxe */}
              <div className="bg-ocean/50 p-6 rounded-xl border border-white/10 hover:border-sand transition-colors">
                <h3 className="text-2xl font-heading font-semibold text-sand mb-2">Deluxe Suite</h3>
                <div className="flex space-x-4 mb-4 text-xs uppercase tracking-wide opacity-70 font-bold">
                  <span>285 SQ.FT</span>
                  <span>Max 3 Persons</span>
                </div>
                <p className="font-body text-sm opacity-90">
                  Cozy, functional design maximizing comfort and affordability.
                </p>
              </div>
              {/* Standard */}
              <div className="bg-ocean/50 p-6 rounded-xl border border-white/10 hover:border-sand transition-colors">
                <h3 className="text-2xl font-heading font-semibold text-sand mb-2">Standard Room</h3>
                <div className="flex space-x-4 mb-4 text-xs uppercase tracking-wide opacity-70 font-bold">
                  <span>220 SQ.FT</span>
                  <span>Max 2 Persons</span>
                </div>
                <p className="font-body text-sm opacity-90">
                  Compact, intelligent design for budget-conscious premium travel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action & Footer (75% - 100%) */}
        <section className="min-h-screen flex flex-col items-center justify-end p-6 sm:p-12 pb-24">
          <div className="glassmorphism p-8 sm:p-12 max-w-4xl w-full text-center">
            <h2 className="text-3xl sm:text-5xl font-heading font-bold mb-6">Your Escape Awaits</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div>
                <p className="text-sm uppercase tracking-wide opacity-60 mb-1">Phone</p>
                <p className="font-body text-lg font-bold">93440 77760</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-wide opacity-60 mb-1">Email</p>
                <p className="font-body text-lg font-bold">info@baybreezesuites.com</p>
              </div>
            </div>
            <div className="mb-8">
              <p className="text-sm uppercase tracking-wide opacity-60 mb-1">Address</p>
              <p className="font-body">4/222, Pushpa Ave, MGR Salai, Palavakkam, Chennai - 600041</p>
            </div>
            <div className="pt-6 border-t border-white/20 text-sm opacity-70 flex justify-center space-x-6">
              <span>Nearby: VGP Marine Kingdom</span>
              <span>Snow Kingdom</span>
              <span>Palavakkam Beach</span>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
