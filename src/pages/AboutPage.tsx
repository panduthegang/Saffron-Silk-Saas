import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';

const AboutHero = () => (
  <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Spices High End" 
        className="w-full h-full object-cover opacity-40 animate-slow-spin scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-midnight/80"></div>
    </div>
    <div className="relative z-10 text-center mt-20">
      <h1 className="text-6xl md:text-8xl font-decorative text-white mb-6 animate-fade-in-up">The <span className="text-gold-500">Legacy</span></h1>
      <p className="text-white/60 tracking-[0.6em] uppercase text-sm animate-fade-in-up" style={{animationDelay: '0.2s'}}>Est. 1999 • Jaipur • London • New York</p>
    </div>
  </section>
);

const Story = () => (
  <section className="py-32 container mx-auto px-6">
    <div className="flex flex-col md:flex-row gap-20 items-center">
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute -inset-4 border border-gold-500/20 z-0 transform rotate-2 group-hover:rotate-6 transition-transform duration-700"></div>
        <div className="absolute -inset-4 border border-white/5 z-0 transform -rotate-2 group-hover:-rotate-6 transition-transform duration-700"></div>
        <img 
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop" 
          alt="Royal Indian Architecture" 
          className="w-full h-[600px] object-cover relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl"
        />
      </div>
      <div className="w-full md:w-1/2">
        <SectionTitle subtitle="Origins" title="Born of Fire & Gold" centered={false} />
        <p className="text-white/80 leading-loose mb-6 font-light text-lg">
          It began with a whispered secret in the corridors of the Amber Fort. A recipe book, bound in velvet, passed down from the head Khansama of the Maharajas. Saffron & Silk is the manifestation of that secret.
        </p>
        <p className="text-white/80 leading-loose mb-12 font-light text-lg">
          We do not just cook; we alchemize. By blending the ancient techniques of the dum pukht with avant-garde molecular gastronomy, we bridge the gap between the 17th and 21st centuries.
        </p>
        
        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
            <div>
                <h4 className="text-gold-500 font-serif text-2xl mb-2">Heritage</h4>
                <p className="text-sm text-white/50">Rooted in 400 years of Mughal tradition.</p>
            </div>
            <div>
                <h4 className="text-gold-500 font-serif text-2xl mb-2">Innovation</h4>
                <p className="text-sm text-white/50">Pushing the boundaries of modern texture.</p>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const Philosophy = () => (
    <section className="py-32 bg-emerald-950/30 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
            <SectionTitle subtitle="Philosophy" title="The Soul of Spice" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
                 {[
                     {title: "Purity", text: "We grind our spices daily in-house using stone mills to preserve the volatile oils and soul of the ingredient."},
                     {title: "Patience", text: "Our signature Dal Bukhara simmers for 48 hours over slow charcoal embers, requiring constant vigilance."},
                     {title: "Passion", text: "Every plate is inspected by the Executive Chef. Perfection is not a goal; it is the baseline."}
                 ].map((item, i) => (
                     <div key={i} className="text-center p-8 border border-white/5 bg-white/5 hover:bg-gold-500/10 hover:border-gold-500/30 transition-all duration-500">
                         <h3 className="text-3xl font-serif text-gold-500 mb-6">{item.title}</h3>
                         <p className="text-white/70 leading-relaxed">{item.text}</p>
                     </div>
                 ))}
            </div>
        </div>
    </section>
);

const IndianChefs = () => {
  const chefs = [
    {
      name: "Vikas Khanna",
      role: "Global Ambassador",
      desc: "Michelin-starred chef, restaurateur, and global ambassador of Indian cuisine. Known for blending traditional Indian flavors with contemporary fine dining, Chef Vikas has represented Indian gastronomy on the world stage through award-winning restaurants, books, and humanitarian work.",
      image: "https://www.cookandchefinstitute.com/sites/default/files/styles/800x915/public/vikas_0.jpg?itok=21mDXRYT"
    },
    {
      name: "Ranveer Brar",
      role: "Culinary Storyteller",
      desc: "Celebrity chef, author, and storyteller who brings Indian food culture to life. With deep roots in regional Indian cuisine, Chef Ranveer is celebrated for making traditional recipes accessible while preserving their history, soul, and authenticity.",
      image: "https://www.smartfood.org/wp-content/uploads/2019/09/Chef-ranveer-resized-891x1024.jpg"
    },
    {
      name: "Kunal Kapur",
      role: "Modern Visionary",
      desc: "Renowned chef, restaurateur, and culinary entrepreneur focused on modern Indian dining. Chef Kunal is known for elevating classic flavors with refined presentation, global techniques, and a strong emphasis on culinary innovation.",
      image: "https://ohthepeopleyoumeet.com/wp-content/uploads/2020/02/Screen-Shot-2020-02-03-at-2.23.29-PM-e1581610051777.png"
    }
  ];

  return (
    <section className="py-32 bg-midnight">
      <div className="container mx-auto px-6">
        <SectionTitle subtitle="The Maestros" title="Guardians of Taste" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {chefs.map((chef, idx) => (
            <div key={idx} className="group relative overflow-hidden h-[600px] border-b-4 border-gold-500">
              <img 
                src={chef.image} 
                alt={chef.name} 
                className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-1000 filter brightness-[0.7] group-hover:brightness-100 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-saffron-500 tracking-widest uppercase text-xs font-bold mb-2 block">{chef.role}</span>
                <h3 className="text-4xl font-decorative text-white mb-4">{chef.name}</h3>
                <p className="text-white/70 leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-sm">
                    {chef.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-midnight">
      <AboutHero />
      <Story />
      <Philosophy />
      <IndianChefs />
      <Footer />
    </div>
  );
};

export default AboutPage;