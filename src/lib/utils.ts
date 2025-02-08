import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import YoutubeIcon from "../assets/icons/yotube.svg"
import LinkdienIcon from "../assets/icons/Link.svg"
import GoogleIcon from "../assets/icons/google.svg"
import FacebookIcon from "../assets/icons/FacebookIcon.svg"
import InteriokeysLogo from "../assets/icons/Interiokeys.svg"
import { suncity_jewel, suncity_jewel2, suncity_jewel3, suncity_jewel4 } from "./images"



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export { YoutubeIcon, LinkdienIcon, GoogleIcon, FacebookIcon, InteriokeysLogo }



export const properties = [
  {
    id: 1,
    title: "Jewel of India/Suncity Builders",
    location: "Vaishali Nagar, Jaipur, India",
    specs: "Layout: 3BHK (1360SFt), 4BHK (1500SFt)",
    image: [suncity_jewel, suncity_jewel2, suncity_jewel3, suncity_jewel4],
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTxUOMgXsMe3UEAewd-kpBY0IHdUJcuxCaG-xWN3QpoM0SDwVQvP8FIrBFYUcDKoXY22Q&usqp=CAU",
      "https://is1-3.housingcdn.com/4f2250e8/3fe06d9483f6afb18a49bbdda051d189/v0/fs/suncity_avenue_76-sector_76_gurgaon-gurgaon-suncity_projects.jpg",
      "https://dynamic.realestateindia.com/proj_images/project36201/proj_img-36201-16374_1-770x400.jpg"
    ],
    location: " Vaishali Nagar, Japur, India",
    specs: "Layouts: 3BHK (1380Sft), 4BHK (1500Sft)",
  },
  {
    id: 4,
    title: "Suncity Avenue/Suncity Builders",
    image: [
      "https://newprojects.99acres.com/projects/suncity_projects/suncity_avenue_76/images/tqydqek_1701081450_458457162_med.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjp25Now6KJH7HPjZBKQP6UJewkOX5NjCqc1s2RfdI9QpnG269GE1Jf4Ne1T4rhPtR39Y&usqp=CAU",
    ],
    location: "Vaishali Nagar, Jaipur, India",
    specs: "Layouts: 3BHK (1380Sft), 4BHK (1500Sft)",
  },
  {
    id: 5,
    title: "Platinum Towers/Suncity Builders",
    image: [
      "https://housing-images.n7net.in/4f2250e8/3fe06d9483f6afb18a49bbdda051d189/v0/medium/suncity_avenue_76-sector_76_gurgaon-gurgaon-suncity_projects.jpg",
      "https://www.affordablehomesgurgaon.in/wp-content/uploads/2021/09/Suncity-Vatsal-Valley.jpg.webp",
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
      "https://www.3horizons.in/images/projects/Suncity%20Vatsal%20Valley/901656337suncity-banner.jpg",
      "https://www.axiomlandbase.in/wp-content/uploads/2021/12/Suncity-Vatsal-Valley-Gurgaon.jpg",
      "https://www.reiasindia.com/uploads/gallery/suncity-vatsal-valley-4.jpeg"
    ],
    location: "Location: Vaishali Nagar, Jaipur, India",
    specs: "Layouts: 4BHK (1380Sft), 4BHK (1500Sft)",
  }
];

export const reviews = [
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
export const SocialLinks =
{
  facebook: "#",
  linkedin: "https://www.linkedin.com/company/interiokeys/?originalSubdomain=in",
  google: "https://interiokeys.com/",
  youtube: "https://www.youtube.com/@InterioKeys"
}
