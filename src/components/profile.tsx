import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">interiokeys</h1>
        <input
          type="text"
          placeholder="Search by location, professionals or project"
          className="border p-2 rounded w-1/3"
        />
        <Button className="bg-red-500 text-white">Book Consultation</Button>
      </header>
      
      {/* Profile Header */}
      <section className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/profile-banner.jpg')" }}>
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-3xl font-bold">Turnkey Interiors Solution</h2>
        </div>
      </section>
      
      {/* Tabs */}
      <div className="flex border-b bg-white">
        <button className="p-4 text-gray-700 font-medium border-b-2 border-red-500">About Us</button>
        <button className="p-4 text-gray-700">Properties Created</button>
        <button className="p-4 text-gray-700">Reviews & Ratings</button>
      </div>
      
      {/* Properties Grid */}
      <div className="grid grid-cols-3 gap-4 p-8">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="overflow-hidden shadow-md">
            <img src={`/property-${index + 1}.jpg`} alt="Property" className="w-full h-48 object-cover" />
            <CardContent>
              <h3 className="text-lg font-semibold">Property Name</h3>
              <p className="text-gray-500">Location: Vaishali Nagar, Jaipur, India</p>
              <p className="text-gray-500">Layouts: 3BHK, 4BHK</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Reviews Section */}
      <div className="p-8 bg-white">
        <h3 className="text-xl font-semibold mb-4">117 Reviews and Ratings</h3>
        <div className="flex items-center text-red-500 text-xl">
          <Star fill="currentColor" />
          <span className="ml-2">4.5 average rating</span>
        </div>
        <div className="mt-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="p-4 border-b">
              <p className="font-bold">User Name</p>
              <p className="text-gray-500">I had the pleasure of working with this team on a recent construction project.</p>
              <p className="text-gray-400 text-sm">10 Dec 2023</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white p-8 mt-8">
        <div className="flex justify-between">
          <div>
            <h4 className="text-lg font-semibold">interiokeys</h4>
            <p className="text-gray-400">Want to understand how our process works?</p>
            <input type="email" placeholder="Your email" className="p-2 rounded text-black mt-2" />
            <Button className="bg-red-500 text-white mt-2">Send Email</Button>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Company</h4>
            <ul>
              <li>About Us</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
