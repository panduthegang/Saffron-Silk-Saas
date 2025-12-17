import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const ReservationPage: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        guests: 2,
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        occasion: ''
    });

    const [isOccasionOpen, setIsOccasionOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOccasionOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Mock dates for the next few days
    const dates = [
        { label: 'Today', value: 'today' },
        { label: 'Tomorrow', value: 'tomorrow' },
        { label: 'Fri, Oct 25', value: 'oct25' },
        { label: 'Sat, Oct 26', value: 'oct26' },
    ];

    const times = ['17:30', '18:00', '19:30', '20:00', '21:30'];
    const occasions = ['Anniversary', 'Birthday', 'Business Meal', 'Date Night', 'Celebration', 'Other'];

    return (
        <div className="min-h-screen bg-midnight w-full text-gold-100 flex flex-col overflow-x-hidden">
            {/* Header with increased padding to prevent overlap */}
            <div className="pt-48 pb-24 flex items-center justify-center border-b border-white/5 relative bg-emerald-950/20">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="text-center relative z-10">
                    <p className="text-gold-500 tracking-[0.4em] uppercase text-xs font-bold mb-4 animate-fade-in-up">Reservations</p>
                    <h1 className="text-4xl md:text-6xl font-decorative text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Secure Your <span className="text-gold-500">Sanctuary</span></h1>
                </div>
            </div>

            <div className="flex-grow container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Left Column: Info & Policies */}
                    <div className="w-full lg:w-1/3 space-y-12">
                        <div>
                            <span className="text-xs text-gold-500 tracking-[0.25em] uppercase font-bold block mb-6">The Guidelines</span>
                            <h3 className="text-3xl font-serif text-white mb-6">Dining Etiquette</h3>
                            <p className="text-white/60 font-light leading-relaxed mb-6">
                                To ensure an atmosphere of refined elegance, we kindly request our guests to adhere to the following policies.
                            </p>
                            <ul className="space-y-4 text-sm text-white/70">
                                <li className="flex gap-4">
                                    <span className="text-gold-500">01.</span>
                                    <span><strong className="text-white block mb-1">Dress Code</strong> Smart Elegant. Gentlemen are requested to wear jackets. No sportswear or open shoes.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-gold-500">02.</span>
                                    <span><strong className="text-white block mb-1">Child Policy</strong> We welcome guests aged 10 and above to the main dining room.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="text-gold-500">03.</span>
                                    <span><strong className="text-white block mb-1">Timings</strong> Your table is reserved for 2.5 hours to enjoy the full tasting journey.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 border border-white/5 bg-white/5">
                            <h4 className="font-serif text-xl text-white mb-2">Private Events</h4>
                            <p className="text-white/50 text-sm mb-4">For parties larger than 8, please contact our concierge directly.</p>
                            <a href="mailto:events@saffronandsilk.com" className="text-gold-500 text-xs tracking-widest uppercase hover:text-white transition-colors">events@saffronandsilk.com</a>
                        </div>
                    </div>

                    {/* Right Column: The Form */}
                    <div className="w-full lg:w-2/3">
                        <div className="border border-gold-500/20 bg-midnight p-8 md:p-12 relative overflow-visible min-h-[600px] flex flex-col justify-center">
                            {/* Background decoration */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

                            {step === 1 && (
                                <div className="animate-fade-in space-y-10">
                                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                        <h3 className="text-2xl font-decorative text-white">The Details</h3>
                                        <span className="text-gold-500 font-serif italic">Step 1 of 3</span>
                                    </div>

                                    {/* Guest Count */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Number of Guests</label>
                                        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
                                            {[2, 3, 4, 5, 6, 8].map(num => (
                                                <button
                                                    key={num}
                                                    onClick={() => setFormData({ ...formData, guests: num })}
                                                    className={`w-12 h-12 flex-shrink-0 flex items-center justify-center border transition-all duration-300 ${formData.guests === num ? 'border-gold-500 bg-gold-500 text-midnight font-bold' : 'border-white/20 text-white hover:border-gold-500/50'}`}
                                                >
                                                    {num}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Date Selection */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Select Date</label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {dates.map((d, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setFormData({ ...formData, date: d.value })}
                                                    className={`py-4 px-2 border text-center transition-all duration-300 ${formData.date === d.value ? 'border-gold-500 bg-white/5 text-gold-500' : 'border-white/20 text-white/70 hover:border-gold-500/50'}`}
                                                >
                                                    <span className="block text-sm font-serif">{d.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Time Selection */}
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-white/50 mb-4">Preferred Time</label>
                                        <div className="flex flex-wrap gap-4">
                                            {times.map((t, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setFormData({ ...formData, time: t })}
                                                    className={`py-2 px-6 border transition-all duration-300 ${formData.time === t ? 'border-gold-500 text-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border-white/20 text-white/70 hover:border-gold-500/50'}`}
                                                >
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-8">
                                        <button
                                            onClick={handleNext}
                                            disabled={!formData.date || !formData.time}
                                            className="w-full py-4 bg-gold-500 text-midnight font-bold tracking-widest uppercase disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
                                        >
                                            Continue to Details
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="animate-fade-in space-y-8">
                                    <div className="flex justify-between items-end border-b border-white/10 pb-4">
                                        <h3 className="text-2xl font-decorative text-white">Your Information</h3>
                                        <span className="text-gold-500 font-serif italic">Step 2 of 3</span>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-white/50">Full Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold-500 focus:outline-none transition-colors font-serif text-xl"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-white/50">Phone Number</label>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold-500 focus:outline-none transition-colors font-serif text-xl"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-xs uppercase tracking-widest text-white/50">Email Address</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold-500 focus:outline-none transition-colors font-serif text-xl"
                                                placeholder="guest@example.com"
                                            />
                                        </div>

                                        {/* Custom Occasion Dropdown */}
                                        <div className="space-y-2 md:col-span-2 relative" ref={dropdownRef}>
                                            <label className="text-xs uppercase tracking-widest text-white/50">Special Occasion (Optional)</label>
                                            <div
                                                onClick={() => setIsOccasionOpen(!isOccasionOpen)}
                                                className="w-full bg-transparent border-b border-white/20 py-2 cursor-pointer flex justify-between items-center group transition-colors hover:border-gold-500/50"
                                            >
                                                <span className={`font-serif text-xl ${formData.occasion ? 'text-white' : 'text-white/40 italic'}`}>
                                                    {formData.occasion || "Select an occasion..."}
                                                </span>
                                                <div className={`transition-transform duration-300 ${isOccasionOpen ? 'rotate-180' : ''}`}>
                                                    <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className={`absolute top-full left-0 right-0 z-50 bg-midnight border border-gold-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] mt-2 transition-all duration-300 origin-top ${isOccasionOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-95 -translate-y-2 pointer-events-none'}`}>
                                                <div className="max-h-60 overflow-y-auto scrollbar-thin">
                                                    {occasions.map((occ) => (
                                                        <div
                                                            key={occ}
                                                            onClick={() => {
                                                                setFormData({ ...formData, occasion: occ });
                                                                setIsOccasionOpen(false);
                                                            }}
                                                            className={`px-6 py-3 cursor-pointer transition-colors border-l-2 ${formData.occasion === occ ? 'bg-white/5 border-gold-500 text-gold-500' : 'border-transparent text-white/70 hover:bg-white/5 hover:text-white'}`}
                                                        >
                                                            <span className="font-serif text-lg">{occ}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2 md:col-span-2">
                                            <label className="text-xs uppercase tracking-widest text-white/50">Dietary Restrictions</label>
                                            <textarea className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:border-gold-500 focus:outline-none transition-colors font-serif text-lg h-24 resize-none" placeholder="Please let us know of any allergies..."></textarea>
                                        </div>
                                    </div>

                                    <div className="pt-8 flex gap-4">
                                        <button
                                            onClick={handleBack}
                                            className="w-1/3 py-4 border border-white/20 text-white font-bold tracking-widest uppercase hover:border-white transition-colors"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="w-2/3 py-4 bg-gold-500 text-midnight font-bold tracking-widest uppercase hover:bg-white transition-colors"
                                        >
                                            Confirm Reservation
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="animate-fade-in text-center py-10">
                                    <div className="w-20 h-20 border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-reveal">
                                        <svg className="w-10 h-10 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-decorative text-white mb-6">Request Received</h2>
                                    <p className="text-white/70 font-serif text-xl italic max-w-md mx-auto mb-10">
                                        "We eagerly await the pleasure of serving you{formData.name && <span>, <span className="text-gold-500">{formData.name}</span></span>}. Our concierge will contact you shortly to finalize your bespoke experience."
                                    </p>
                                    <div className="inline-block p-6 border border-white/10 bg-white/5 mb-10">
                                        <p className="text-sm uppercase tracking-widest text-gold-500 mb-2">Reservation Reference</p>
                                        <p className="text-3xl text-white font-mono">#SS-{Math.floor(Math.random() * 10000)}</p>
                                    </div>
                                    <div>
                                        <Link to="/" className="text-xs uppercase tracking-[0.2em] text-white border-b border-transparent hover:border-white transition-all pb-1">
                                            Return to Home
                                        </Link>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ReservationPage;