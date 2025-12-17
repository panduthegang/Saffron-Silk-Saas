import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const MenuHero = () => (
    <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                alt="Dark Food Texture"
                className="w-full h-full object-cover opacity-30 animate-slow-spin scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/80"></div>
        </div>
        <div className="relative z-10 text-center mt-20">
            <h1 className="text-6xl md:text-8xl font-decorative text-white mb-6 animate-fade-in-up">Culinary <span className="text-gold-500">Canvas</span></h1>
            <p className="text-white/60 tracking-[0.6em] uppercase text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>A Vegetarian Symphony</p>
        </div>
    </section>
);

interface MenuItemProps {
    name: string;
    price: string;
    description: string;
    isSignature?: boolean;
    image?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, description, isSignature, image }) => (
    <div className="group flex flex-col gap-6">
        {image && (
            <div className="w-full h-64 overflow-hidden relative border border-white/5 shadow-2xl">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 filter grayscale-[0.3] group-hover:grayscale-0"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60"></div>

                {/* Signature Badge on Image */}
                {isSignature && (
                    <div className="absolute top-4 right-4 bg-gold-500 text-midnight text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                        Signature
                    </div>
                )}
            </div>
        )}

        <div className="relative">
            <div className="flex justify-between items-end mb-3 relative overflow-hidden">
                <div className="relative z-10 bg-midnight pr-4">
                    <h4 className={`text-2xl font-serif ${isSignature && !image ? 'text-gold-400' : 'text-white'} group-hover:text-gold-200 transition-colors`}>
                        {name}
                    </h4>
                </div>
                <div className="flex-grow border-b border-white/10 mb-2 group-hover:border-gold-500/30 transition-colors"></div>
                <div className="relative z-10 bg-midnight pl-4">
                    <span className="text-gold-500 font-serif text-xl italic">{price}</span>
                </div>
            </div>
            <p className="text-white/50 font-light text-sm italic leading-relaxed group-hover:text-white/70 transition-colors max-w-md">
                {description}
            </p>
        </div>
    </div>
);

const MenuSection = ({ title, items }: { title: string, items: MenuItemProps[] }) => (
    <div className="mb-32">
        <div className="text-center mb-16">
            <span className="block w-px h-16 bg-gold-500/50 mx-auto mb-6"></span>
            <h3 className="text-4xl md:text-5xl font-decorative text-white tracking-wide">{title}</h3>
            <span className="block w-px h-8 bg-gold-500/50 mx-auto mt-6"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {items.map((item, idx) => (
                <MenuItem key={idx} {...item} />
            ))}
        </div>
    </div>
);

const TastingMenu = () => (
    <div className="bg-white/5 border border-white/10 mb-32 relative overflow-hidden group flex flex-col md:flex-row">
        {/* Image Side */}
        <div className="w-full md:w-2/5 relative h-[400px] md:h-auto overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop"
                alt="Chef's Table"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter sepia-[0.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-midnight/90 md:to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-midnight to-transparent md:hidden"></div>
        </div>

        {/* Content Side */}
        <div className="w-full md:w-3/5 p-12 md:p-16 relative">
            <div className="absolute top-4 right-4 p-4 opacity-10 group-hover:opacity-20 transition-opacity hidden md:block">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z" fill="#D4AF37" />
                </svg>
            </div>

            <div className="mb-8">
                <h3 className="text-gold-500 tracking-[0.4em] uppercase text-sm font-bold mb-4">The Chef's Table</h3>
                <h2 className="text-4xl md:text-5xl font-decorative text-white mb-6">The Royal Seven Course</h2>
                <p className="text-white/60 italic font-serif text-lg leading-relaxed">
                    A curated journey through the seasons of India, featuring rare ingredients and avant-garde techniques.
                    Strictly vegetarian.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-b border-white/10 py-8 my-8 text-left">
                <div className="space-y-3">
                    <p className="text-white/80 font-serif text-lg"><span className="text-gold-500/50 mr-2">01.</span> Saffron Mist Sphere</p>
                    <p className="text-white/80 font-serif text-lg"><span className="text-gold-500/50 mr-2">02.</span> White Asparagus Shorba</p>
                    <p className="text-white/80 font-serif text-lg"><span className="text-gold-500/50 mr-2">03.</span> Tandoori Portobello</p>
                    <p className="text-white/80 font-serif text-lg"><span className="text-gold-500/50 mr-2">04.</span> Gold Leaf Kofta</p>
                </div>
                <div className="space-y-3">
                    <p className="text-white/80 font-serif text-lg"><span className="text-gold-500/50 mr-2">05.</span> Rose & Lime Sorbet</p>
                    <p className="text-white/80 font-serif text-lg"><span className="text-gold-500/50 mr-2">06.</span> Textures of Pistachio</p>
                    <p className="text-white/80 font-serif text-lg"><span className="text-gold-500/50 mr-2">07.</span> Paan Mousse</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <span className="text-3xl font-decorative text-gold-500 block">$185 <span className="text-base font-sans text-white/40 tracking-widest uppercase">per guest</span></span>
                </div>
                <Link to="/reserve" className="px-8 py-3 border border-white/20 text-white hover:text-gold-500 hover:border-gold-500 transition-all uppercase tracking-widest text-xs inline-block">
                    Reserve Experience
                </Link>
            </div>
        </div>
    </div>
);

const MenuPage: React.FC = () => {
    const starters: MenuItemProps[] = [
        {
            name: "Avocado & Aloo Chaat",
            price: "$24",
            description: "Hass avocado sphere, spiced potato mousse, tamarind gel, topped with crispy vermicelli nest.",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=2000&auto=format&fit=crop&q=80"
        },
        {
            name: "Truffle Paneer Tikka",
            price: "$32",
            description: "Artisanal cottage cheese marinated in yellow chilli and smoked yogurt, finished with Alba truffle oil.",
            isSignature: true,
            image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=2000&auto=format&fit=crop&q=80"
        },
        {
            name: "Dahi Kebab",
            price: "$26",
            description: "Hung curd croquettes infused with cardamom and coriander, served with a wild berry reduction.",
            image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=2000&auto=format&fit=crop&q=80"
        },
        {
            name: "Jackfruit Galouti",
            price: "$28",
            description: "Melt-in-mouth smoked jackfruit patties, served on a saffron-infused mini paratha.",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=2000&auto=format&fit=crop&q=80"
        }
    ];


    const mains: MenuItemProps[] = [
        {
            name: "Dal Bukhara",
            price: "$35",
            description: "Black lentils simmered for 48 hours over charcoal, finished with white butter and cream.",
            isSignature: true,
            image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Morel Mussallam",
            price: "$48",
            description: "Kashmiri Guchhi mushrooms stuffed with royal cumin and cheese, in a velvet cashew gravy.",
            image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Smoked Baingan Bharta",
            price: "$30",
            description: "Charcoal-roasted eggplant mash, tempered with mustard oil and burnt garlic, served in a clay pot.",
            image: "https://www.secondrecipe.com/wp-content/uploads/2017/09/baingan-bharta-1.jpg"
        },
        {
            name: "Paneer Roulade",
            price: "$38",
            description: "Cottage cheese rolled with spinach and pine nuts, served on a bed of makhani velvet sauce.",
            image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Vilayti Subz Handi",
            price: "$34",
            description: "Exotic seasonal vegetables slow-cooked in a sealed pot with saffron and aromatic spices.",
            image: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?q=80&w=1000&auto=format&fit=crop"
        },
        {
            name: "Malai Kofta",
            price: "$36",
            description: "Apricot stuffed dumplings in a rich cashew and cardamom white gravy.",
            image: "https://images.unsplash.com/photo-1545216560-6843019f7a3f?q=80&w=1000&auto=format&fit=crop"
        }
    ];

    const breadsRice: MenuItemProps[] = [
        { name: "Truffle Naan", price: "$14", description: "Leavened bread brushed with black truffle butter." },
        { name: "Gold Warq Saffron Rice", price: "$22", description: "Aged Basmati rice infused with Kashmiri saffron, topped with edible 24k gold leaf." },
        { name: "Wild Mushroom Kulcha", price: "$16", description: "Stuffed bread with porcini mushrooms and truffle oil." },
        { name: "Roomali Roti", price: "$10", description: "Handkerchief-thin bread cooked on an inverted griddle." }
    ];

    const desserts: MenuItemProps[] = [
        {
            name: "The Golden Sphere",
            price: "$45",
            description: "Dark chocolate dome filled with saffron mousse, melted tableside with warm caramel.",
            isSignature: true,
            image: "https://www.foodandwine.com/thmb/97_18_50_55/f3b1451e-3558-4508-b615-56747514101e/1221-PT-chocolate-melting-ball-dessert-8c634d0b1652495392176b5399557b7f.jpg"
        },
        {
            name: "Rose Petal Kulfi",
            price: "$22",
            description: "Traditional frozen dairy dessert infused with preserved rose petals and falooda.",
            image: "https://images.unsplash.com/photo-1579954115563-e72bf1381629?w=2000&auto=format&fit=crop&q=80"
        },
        {
            name: "Jalebi Caviar",
            price: "$26",
            description: "Deconstructed crispy spirals served with rabri foam and pistachio dust.",
            image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=2000&auto=format&fit=crop&q=80"
        }
    ];


    return (
        <div className="w-full bg-midnight">
            <MenuHero />
            <div className="container mx-auto px-6 py-24 relative">
                {/* Decorative Vertical Line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/10 to-transparent hidden md:block"></div>

                <TastingMenu />

                <MenuSection title="Prelude" items={starters} />
                <MenuSection title="The Grand Course" items={mains} />
                <MenuSection title="Accompaniments" items={breadsRice} />
                <MenuSection title="Finale" items={desserts} />

                {/* New Section Replacement */}
                <div className="mt-32 relative py-24 border border-white/5 bg-white/5 overflow-hidden group">
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] group-hover:bg-gold-500/20 transition-colors duration-700"></div>
                    <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-emerald-900/20 rounded-full blur-[100px] group-hover:bg-emerald-900/30 transition-colors duration-700"></div>

                    <div className="text-center max-w-3xl mx-auto relative z-10 px-6">
                        <div className="mb-8 flex justify-center">
                            <div className="w-16 h-16 border border-gold-500/30 rotate-45 flex items-center justify-center transition-transform duration-700 group-hover:rotate-90">
                                <div className="w-10 h-10 border border-white/20"></div>
                            </div>
                        </div>
                        <span className="text-gold-500 tracking-[0.4em] uppercase text-xs font-bold mb-4 block">Perfect Harmony</span>
                        <h3 className="text-4xl md:text-5xl font-decorative text-white mb-8">The Sommelier's Reserve</h3>
                        <p className="text-white/60 leading-loose font-serif text-xl italic mb-10">
                            "To dine without wine is like dancing without music. Our cellar houses rare vintages and artisanal botanical infusions, curated to dance perfectly with our spices."
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            <button className="px-12 py-4 bg-transparent border border-gold-500 text-gold-500 font-bold tracking-widest uppercase hover:bg-gold-500 hover:text-midnight transition-all duration-300">
                                View Wine List
                            </button>
                            <button className="px-12 py-4 border border-white/20 text-white font-bold tracking-widest uppercase hover:border-gold-500 hover:text-gold-500 transition-all duration-300">
                                Botanical Elixirs
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MenuPage;