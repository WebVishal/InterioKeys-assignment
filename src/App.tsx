import Navbar from "./components/Navbar";
import Hero from './assets/images/hero.svg'
import UISection from "./components/PropertyCard";
import Footer from "./components/Footer";

function App() {
  const properties = [
    {
      id: 1,
      title: "Jewel of India/Suncity Builders",
      location: "Vaishali Nagar, Jaipur, India",
      specs: "Layout: 3BHK (1360SFt), 4BHK (1500SFt)",
      image: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
    },
    {
      id: 2,
      title: "Spacious Apartment/Suncity Builders",
      image: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      location: "Vaishali Nagar, Jaipur, India",
      specs: "Layout: 3BHK (1360SFt), 4BHK (1500SFt)",
    },
    {
      id: 3,
      title: "Suncity Avenue 76/Suncity Builders",
      image: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      location: " Vaishali Nagar, Japur, India",
      specs: "Layouts: 3BHK (1380Sft), 4BHK (1500Sft)",
    },
    {
      id: 4,
      title: "Suncity Avenue/Suncity Builders",
      image: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      location: "Vaishali Nagar, Jaipur, India",
      specs: "Layouts: 3BHK (1380Sft), 4BHK (1500Sft)",
    },
    {
      id: 5,
      title: "Platinum Towers/Suncity Builders",
      image: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      location: "Location: Vaishali Nagar, Jaipur, India",
      specs: "Layouts: 3BHK (1380Sft), 4BHK (1500Sft)",
    },
    {
      id: 6,
      title: "Vatsal Valley/Suncity Builders",
      image: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      ],
      location: "Location: Vaishali Nagar, Jaipur, India",
      specs: "Layouts: 4BHK (1380Sft), 4BHK (1500Sft)",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <img
        src={Hero}
        alt="Hero" className="w-full h-[250px] object-cover"
      />
      <div className="mt-16 px-6 py-3">
        <UISection properties={properties} />
      </div>
      <Footer />
    </div>
  );
}

export default App;