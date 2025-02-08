import { Share2, Star } from "lucide-react";
import Property from "./Property";
import VideoImage from "../assets/images/video.png"
import ReviewCard from "./ReviewCard";

interface PropertyCardProps {
  title: string;
  location: string;
  specs: string;
  image: string[];
}

interface UISectionProps {
  properties: PropertyCardProps[];
}

const UISection = ({ properties }: UISectionProps) => {

  const reviews = [
    {
      name: "Piyush Goyal",
      company: "Turnkey Interiors Solution",
      rating: 4.5,
      date: "10 Dec 2023",
      review: "I had the pleasure of working with Piyush Rai from ArchiLabs on a recent construction project and I must say, it was a truly professional experience."
    },
    {
      name: "Rahul Saini",
      company: "Turnkey Interiors Solution",
      rating: 4.5,
      date: "10 Dec 2023",
      review: "I had the pleasure of working with Piyush Rai from ArchiLabs on a recent construction project and I must say, it was a truly professional experience."
    },
    {
      name: "Roshan Jain",
      company: "Turnkey Interiors Solution",
      rating: 4.5,
      date: "10 Dec 2023",
      review: "I had the pleasure of working with Piyush Rai from ArchiLabs on a recent construction project and I must say, it was a truly professional experience."
    },
    {
      name: "Piya Shah",
      company: "Turnkey Interiors Solution",
      rating: 4.5,
      date: "10 Dec 2023",
      review: "I had the pleasure of working with Piyush Rai from ArchiLabs on a recent construction project and I must say, it was a truly professional experience."
    }
  ]

  return (
    <div className=" p-0  md:container mx-auto md:p-6">
      {/* Header Tabs */}
      <div className="flex relative flex-wrap gap-6 border-b border-gray-300 mb-6 text-gray-600 w-full sm:w-[65%] pb-3">
        <button className="tap relative text-red bg-transparent font-semibold whitespace-nowrap border-b-2 border-transparent">
          About Us
        </button>
        <button className="relative bg-transparent whitespace-nowrap border-b-2 border-transparent">
          Properties Created
        </button>
        <button className="relative bg-transparent whitespace-nowrap border-b-2 border-transparent">
          Reviews & Ratings
        </button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Banner and Inspirations Section */}
        <div className="lg:col-span-2">
          {/* Banner */}
          <div>
            <div className="relative bg-gray-100 rounded-sm overflow-hidden shadow-md">
              <img
                src={VideoImage} // Replace with actual image
                alt="Banner"
                className="w-full h-[450px] object-cover"
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button className="bg-white p-3 rounded-full shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.25l13.5 6-13.5 6V5.25z"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
            <div>
              <h2 className="font-semibold text-xl font-interiokeys pt-4">“Delighted to see so many interior inspirations for our properties”</h2>
              <p className="font-interiokeys text-sm text-gray-700 mb-3">“Collaborating with Interiokeys has been inspiring, from getting designs for our top properties, to finding top designer
                and brand collaborations and providing a unique platform to connect with potential clients”</p>
            </div>
          </div>
          {/* Inspirations Grid */}
          <div className="mt-12">
            <h2 className="text-xl font-interiokeys font-semibold mb-8">Inspirations Created (15)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Card Component */}
              {
                properties?.map((items, index) => {
                  return <Property
                    title={items.title}
                    location={items.location}
                    specs={items.specs}
                    images={items.image}
                    key={index} />
                })
              }
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="relative h-[60%]">
          <div className="p-6 rounded-sm shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-center">
              <span className="text-red">117</span> Reviews and Ratings
            </h3>
            <div className="text-xl text-center">
              <div className="flex items-center justify-center">
                <Star fill="#C53D3D" className="text-red" />
                <p className="ml-2 text-red">4.5</p>
              </div>
              <p className="text-gray-400"><span className="font-inter-medium">average</span> rating</p>
            </div>
            <div className="mt-4 flex justify-center items-center flex-col gap-2">
              {
                reviews.map((items, index) => {
                  return <ReviewCard name={items.name} company={items.company} rating={items.rating} date={items.date} review={items.review} id={index} />
                })
              }
            </div>
            <div className="flex items-center">
              <button className="mt-4 text-red text-sm font-semibold flex justify-center w-full">
                See All
              </button>
            </div>
          </div>
          <div className="absolute -right-6 bottom-[20%]">
            <button>
              <Share2 color="black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UISection;
