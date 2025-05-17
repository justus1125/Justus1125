
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const shopProducts = [
  {
    name: "Men's Casual Shirt",
    description: "Trendy slim-fit cotton shirts perfect for everyday wear.",
    image: "https://via.placeholder.com/300x300?text=Men+Shirt",
  },
  {
    name: "Women's Dresses",
    description: "Elegant and colorful dresses for every occasion.",
    image: "https://via.placeholder.com/300x300?text=Women+Dress",
  },
  {
    name: "Unisex Hoodies",
    description: "Warm, stylish hoodies for both men and women.",
    image: "https://via.placeholder.com/300x300?text=Unisex+Hoodie",
  }
];

const beautyProducts = [
  {
    name: "Glow Skincare Set",
    description: "Complete skincare kit for glowing skin.",
    image: "https://via.placeholder.com/300x300?text=Skincare+Set",
  }
];

const techProducts = [
  {
    name: "Wireless Earbuds",
    description: "High-quality Bluetooth earbuds with noise cancellation.",
    image: "https://via.placeholder.com/300x300?text=Earbuds",
  }
];

const seasonalProducts = [
  {
    name: "Valentine Gift Box",
    description: "Romantic combo set for Valentine's Day.",
    image: "https://via.placeholder.com/300x300?text=Valentine+Gift",
  }
];

const Home = () => (
  <div style={{ textAlign: 'center', padding: '50px', background: 'linear-gradient(to right, #fbc7c7, #fff, #fbc7c7)' }}>
    <div>
      <div style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#ec4899',
        borderRadius: '50%',
        color: 'white',
        fontSize: '48px',
        fontWeight: 'bold',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(236,72,153,0.3)'
      }}>
        JO
      </div>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#be185d', marginTop: '20px' }}>Justus Omondi</h1>
      <p style={{ fontSize: '20px', color: '#374151' }}>Your Style, Our Passion</p>
      <p style={{ fontSize: '14px', color: '#6b7280' }}>Explore clothing, beauty, tech & more with ease</p>
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <div style={{
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    maxWidth: '300px',
    margin: 'auto',
  }}>
    <img src={product.image} alt={product.name} style={{ width: '100%', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} />
    <div style={{ padding: '15px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '20px', fontWeight: '600', margin: '10px 0' }}>{product.name}</h2>
      <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>{product.description}</p>
      <a
        href="https://wa.me/254716788079"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#db2777',
          color: 'white',
          borderRadius: '25px',
          textDecoration: 'none',
          fontWeight: '600'
        }}
      >
        Buy on WhatsApp
      </a>
    </div>
  </div>
);

const Shop = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px' }}>
    {shopProducts.map((p, i) => <ProductCard key={i} product={p} />)}
  </div>
);

const BeautyGrooming = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px' }}>
    {beautyProducts.map((p, i) => <ProductCard key={i} product={p} />)}
  </div>
);

const TechAccessories = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px' }}>
    {techProducts.map((p, i) => <ProductCard key={i} product={p} />)}
  </div>
);

const SeasonalItems = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px' }}>
    {seasonalProducts.map((p, i) => <ProductCard key={i} product={p} />)}
  </div>
);

const GiftSets = () => (
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h2 style={{ fontSize: '30px', fontWeight: '700', marginBottom: '20px' }}>Gift Sets</h2>
    <p>Special gift sets for birthdays, anniversaries, and every celebration.</p>
  </div>
);

const Contact = () => (
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <h2 style={{ fontSize: '30px', fontWeight: '700', marginBottom: '20px' }}>Contact Us</h2>
    <p>WhatsApp: <a href="https://wa.me/254716788079" style={{ color: '#db2777', fontWeight: '600' }}>0716788079</a></p>
  </div>
);

const NavBar = () => (
  <nav style={{
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '15px',
    backgroundColor: '#fce7f3',
    fontWeight: '600',
    color: '#be185d',
    flexWrap: 'wrap',
  }}>
    <Link to="/" style={{ textDecoration: 'none', color: '#be185d' }}>Home</Link>
    <Link to="/shop" style={{ textDecoration: 'none', color: '#be185d' }}>Clothing</Link>
    <Link to="/beauty" style={{ textDecoration: 'none', color: '#be185d' }}>Beauty & Grooming</Link>
    <Link to="/tech" style={{ textDecoration: 'none', color: '#be185d' }}>Tech Accessories</Link>
    <Link to="/seasonal" style={{ textDecoration: 'none', color: '#be185d' }}>Seasonal Items</Link>
    <Link to="/gift-sets" style={{ textDecoration: 'none', color: '#be185d' }}>Gift Sets</Link>
    <Link to="/contact" style={{ textDecoration: 'none', color: '#be185d' }}>Contact</Link>
  </nav>
);

export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/beauty" element={<BeautyGrooming />} />
        <Route path="/tech" element={<TechAccessories />} />
        <Route path="/seasonal" element={<SeasonalItems />} />
        <Route path="/gift-sets" element={<GiftSets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
