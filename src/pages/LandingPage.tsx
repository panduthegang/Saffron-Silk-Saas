import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

// --- Hero Section ---
const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div
        className="absolute inset-0 z-0 transform transition-transform duration-100 ease-out"
        style={{ transform: `translateY(${offset * 0.5}px) scale(1.1)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2670&auto=format&fit=crop"
          alt="Luxury Dark Dining"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-midnight/40 to-midnight opacity-80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16">
        <div className="overflow-hidden mb-6 py-2">
          <p className="text-saffron-400 text-sm md:text-base tracking-[0.5em] uppercase animate-fade-in-up font-bold">
            The Pinnacle of Taste
          </p>
        </div>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-decorative text-white mb-8 leading-tight tracking-tight">
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>Royal</span>
          <span className="block text-gradient-gold font-serif italic animate-fade-in-up pb-4" style={{ animationDelay: '0.4s' }}>Indulgence</span>
        </h1>
        <p className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Transcending boundaries with a symphony of spices. A culinary theatre where history meets modern luxury.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Link to="/reserve" className="group relative px-12 py-4 bg-gold-500 text-midnight font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center justify-center">
            <span className="relative z-10">Reserve Table</span>
            <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
          </Link>
          <Link to="/menu" className="px-12 py-4 border border-white/20 text-white font-medium tracking-widest uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-300 backdrop-blur-sm inline-block">
            View Menu
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-gold-500 rounded-full animate-float opacity-50"></div>
      <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-saffron-500 rounded-full animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

// --- Signature Dishes (Vegetarian Only) ---
const SignatureDishes = () => {
  const dishes = [
    {
      name: "Truffle Paneer Tikka",
      desc: "Artisanal cottage cheese marinated in saffron and smoked spices, grilled to perfection with Italian black truffle oil.",
      price: "$38",
      img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Gold Leaf Vegetable Biryani",
      desc: "Aged basmati rice layered with seasonal vegetables and saffron, sealed in pastry and topped with 24k edible gold.",
      price: "$65",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      name: "Royal Mushroom Handi",
      desc: "Wild mushrooms slow-cooked in a creamy cashew and saffron gravy, infused with aromatic truffle essence.",
      price: "$45",
      img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-32 bg-emerald-950 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-midnight to-transparent"></div>
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Curated Masterpieces" title="Signature Creations" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <div key={idx} className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer">
              <img
                src={dish.img}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-60"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                <div className="flex justify-between items-end border-b border-gold-500/30 pb-4 mb-4">
                  <h3 className="text-3xl font-decorative text-white group-hover:text-gold-400 transition-colors">{dish.name}</h3>
                  <span className="text-xl font-serif text-gold-500 italic">{dish.price}</span>
                </div>
                <p className="text-white/70 font-light leading-relaxed opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Stats Section ---
const Stats = () => {
  const stats = [
    { number: "25", label: "Years of Heritage" },
    { number: "3", label: "Michelin Stars" },
    { number: "180+", label: "Global Wines" },
    { number: "∞", label: "Memories" }
  ];

  return (
    <section className="py-24 bg-midnight border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <h3 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-gold-600 mb-4 group-hover:scale-110 transition-transform duration-500 pb-2">{stat.number}</h3>
              <p className="text-xs tracking-[0.3em] text-white/50 uppercase group-hover:text-gold-500 transition-colors">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Features Section ---
const Features = () => {
  const features = [
    {
      title: "Royal Ambiance",
      description: "Interiors inspired by the Amber Fort of Jaipur. Velvet drapes, crystal chandeliers, and artisanal woodwork.",
    },
    {
      title: "Farm to Fire",
      description: "Ingredients flown in daily. Saffron from Kashmir, Cardamom from Kerala, and Truffles from Alba.",
    },
    {
      title: "Sonic Seasoning",
      description: "A curated auditory experience designed to enhance the perception of sweetness and spice.",
    }
  ];

  return (
    <section className="py-40 bg-charcoal relative overflow-hidden">
      <div className="absolute -left-20 top-40 w-96 h-96 bg-emerald-900/20 rounded-full blur-[100px]"></div>
      <div className="absolute -right-20 bottom-40 w-96 h-96 bg-saffron-600/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <SectionTitle subtitle="The Experience" title="Beyond Dining" centered={false} />
            <p className="text-white/60 leading-loose mb-8">
              We don't just serve food; we curate moments. Every element of Saffron & Silk is engineered to transport you to a state of royal bliss.
            </p>
            <button className="text-gold-500 uppercase tracking-widest text-xs border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-all">Read Our Philosophy</button>
          </div>

          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="border-l border-white/10 pl-8 hover:border-gold-500 transition-colors duration-500 group">
                <span className="text-4xl text-white/10 font-serif font-bold mb-4 block group-hover:text-gold-500/20 transition-colors">0{idx + 1}</span>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Chef Teaser ---
const ChefTeaser = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-midnight overflow-hidden py-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-950/30 to-transparent z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <span className="text-gold-500 tracking-[0.4em] uppercase text-sm font-bold flex items-center gap-4">
                <span className="w-12 h-[1px] bg-gold-500"></span>
                The Visionary
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-decorative text-white mb-8 leading-none">
              Vikas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-500 to-gold-500 pb-4 inline-block">Khanna</span>
            </h2>
            <blockquote className="border-l-2 border-gold-500 pl-6 mb-10">
              <p className="text-2xl text-white/80 font-serif italic leading-relaxed">
                "Indian cuisine is a vast ocean. My mission is to bring the pearls from the depths to the surface of the world's plate."
              </p>
            </blockquote>
            <p className="text-white/60 leading-relaxed mb-12 text-lg font-light max-w-xl">
              A Michelin-starred maestro, Chef Vikas blends the ancient traditions of the spice route with modern culinary artistry. His philosophy is simple: honor the ingredient, respect the history, and innovate the experience.
            </p>
            <div className="flex gap-6">
              <a href="#/about" className="px-10 py-4 bg-gold-500 text-midnight font-bold tracking-widest uppercase hover:bg-white transition-all duration-300">
                Our Story
              </a>
              <button className="px-10 py-4 border border-white/20 text-white font-bold tracking-widest uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
                Masterclass
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 border border-white/10 p-4 bg-white/5 backdrop-blur-sm transform rotate-2 hover:rotate-0 transition-all duration-700 group">
              <img
                src="https://www.cookandchefinstitute.com/sites/default/files/styles/800x915/public/vikas_0.jpg?itok=21mDXRYT"
                alt="Chef Vikas Khanna"
                className="w-full h-[600px] object-cover object-top filter sepia-[0.2] group-hover:sepia-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 -left-10 bg-midnight border border-gold-500/30 p-6 shadow-2xl hidden md:block">
                <p className="text-gold-500 font-serif text-3xl mb-1">25+</p>
                <p className="text-white/50 text-xs tracking-widest uppercase">Years of Excellence</p>
              </div>
            </div>

            {/* Decorative background circle behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-gold-500/20 rounded-full animate-slow-spin -z-10 border-dashed"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Marquee Section ---
const Marquee = () => {
  const text = "ROYAL HERITAGE • SENSORY AWAKENING • TIMELESS FLAVORS • ARTISANAL CRAFT • ";
  return (
    <div className="bg-gold-500 py-4 overflow-hidden relative flex border-y-4 border-double border-midnight">
      <div className="whitespace-nowrap animate-marquee flex items-center">
        {[1, 2, 3, 4].map(i => (
          <span key={i} className="text-midnight font-bold font-decorative text-xl md:text-3xl tracking-widest uppercase px-8">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

// --- Testimonials Section ---
const Testimonials = () => {
  return (
    <section className="py-32 relative bg-emerald-950">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="Acclaim" title="The Critics Speak" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white/5 p-12 relative border border-white/5 hover:border-gold-500/30 transition-all duration-500 group">
            <div className="text-8xl text-gold-500 font-serif absolute -top-4 -left-2 opacity-20 font-bold">“</div>
            <p className="text-2xl text-white/90 font-serif italic leading-relaxed mb-8 relative z-10">
              Without a doubt the finest Indian cuisine I have experienced outside of Mumbai. The depth of flavor in the Rogan Josh was simply transformative.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-gold-500 font-bold uppercase tracking-widest text-sm">James Harrison</h5>
                <p className="text-white/40 text-xs mt-1 tracking-wider">Food Critic, The Michelin Guide</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 p-12 relative border border-white/5 hover:border-gold-500/30 transition-all duration-500 group">
            <div className="text-8xl text-gold-500 font-serif absolute -top-4 -left-2 opacity-20 font-bold">“</div>
            <p className="text-2xl text-white/90 font-serif italic leading-relaxed mb-8 relative z-10">
              The ambiance is breathtaking. It feels like stepping into a royal palace. The service is impeccable, and the tasting menu is a journey I didn't want to end.
            </p>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-500">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
              </div>
              <div>
                <h5 className="text-gold-500 font-bold uppercase tracking-widest text-sm">Elena Vance</h5>
                <p className="text-white/40 text-xs mt-1 tracking-wider">Editor, Vogue Living</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Private Events / The Royal Chambers ---
const PrivateEvents = () => (
  <section className="relative py-40 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2698&auto=format&fit=crop" className="w-full h-full object-cover opacity-40 fixed-bg" alt="Private Dining" />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-midnight"></div>
    </div>
    <div className="relative z-10 text-center max-w-4xl px-6">
      <span className="text-saffron-500 tracking-[0.4em] uppercase text-sm font-bold mb-4 block animate-fade-in-up">Intimate Gatherings</span>
      <h2 className="text-5xl md:text-7xl font-decorative text-white mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>The Royal Chambers</h2>
      <p className="text-white/70 text-lg mb-12 leading-loose font-light animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        For those seeking a sanctuary of privacy. Our exclusive suites offer a bespoke dining experience, tailored to your exact desires.
        From menu curation to floral arrangements, we orchestrate every detail.
      </p>
      <button className="px-12 py-5 bg-transparent border border-gold-500 text-gold-500 font-bold tracking-widest uppercase hover:bg-gold-500 hover:text-midnight transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
        Inquire for Events
      </button>
    </div>
  </section>
)

const LandingPage: React.FC = () => {
  return (
    <div className="w-full bg-midnight">
      <Hero />
      <Stats />
      <SignatureDishes />
      <Features />
      <ChefTeaser />
      <Marquee />
      <Testimonials />
      <PrivateEvents />
      <Footer />
    </div>
  );
};

export default LandingPage;