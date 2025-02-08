import { YoutubeIcon, LinkdienIcon, GoogleIcon, FacebookIcon, InteriokeysLogo, SocialLinks } from '../lib/utils'
const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-800 py-8 mt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-3 md:grid-cols-7 gap-8">
                    {/* Logo and Newsletter Section */}
                    <div className='col-span-3 p-0 md:col-span-3 md:p-4'>
                        <div>
                            <img src={InteriokeysLogo} alt='logo' width={180} height="auto" />
                            <p className="text-xl  text-red font-semibold pt-5">Want to understand how our process works?</p>
                            <p style={{ color: "#5F6368" }} className='mb-3'>Get our PDF sent to your Email ID for the step-by-step explanation.</p>
                            <div className="flex items-center space-x-2 relative">
                                <input
                                    type="email"
                                    placeholder="yourname@email.com"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <button
                                    className="px-2    md:px-4 py-2 absolute top-1 right-2  text-white bg-red rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                                >
                                    Send Email
                                </button>
                            </div>
                            <div className="flex mt-4 space-x-5 text-red-500 pb-5">
                                <a href="#" className="hover:text-red-700">
                                    <img src={FacebookIcon} alt="facebook" width={28} />
                                </a>
                                <a href={SocialLinks.linkedin} className="hover:text-red-700">
                                    <img src={LinkdienIcon} alt="linkedin" width={28} />
                                </a>
                                <a href={SocialLinks.google} className="hover:text-red-700">
                                    <img src={GoogleIcon} alt="google" width={28} />
                                </a>

                                <a href={SocialLinks.youtube} className="hover:text-red-700">
                                    <img src={YoutubeIcon} alt="youtube" width={28} />
                                </a>
                            </div>
                        </div>
                        {/* Company Section */}
                        <div className="w-full grid grid-cols-2 space-y-1 md:grid-cols-3 items-start mt-5">
                            {/* Company Section */}
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800 mb-3">Company</h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">About Us</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Contact Us</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Terms & Privacy</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Our Blog</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Careers</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Trademark</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Why Choose Us</a></li>
                                </ul>
                            </div>
                            {/* Partner Section */}
                            <div>
                                <h3 className="font-semibold text-lg text-gray-800 mb-3">Partner with Us</h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Join as Builder</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Join as Designer</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Join as Brand</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Join as Others</a></li>
                                </ul>
                            </div>
                            <div className='pt-8 md:p-0 '>
                                <h3 className="font-semibold text-lg text-gray-800 mb-4">Services</h3>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Book Consultation</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Find Inspirations</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Find Designers</a></li>
                                    <li><a href="#" className="hover:underline hover:text-red-500 transition">Find Brand Products</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* Inspiration Section */}
                    <div className='mt-4 col-span-2 md:col-span-1 sm:order-1'>
                        <h3 className="font-semibold mb-4">Inspiration</h3>
                        <h4 className="font-medium">Projects</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Jewel of India</a></li>
                            <li><a href="#" className="hover:underline">The Crown</a></li>
                            <li><a href="#" className="hover:underline">Mangalam Radiance</a></li>
                            <li><a href="#" className="hover:underline">Royal Gravitas</a></li>
                            <li><a href="#" className="hover:underline">Melodia Apartments</a></li>
                            <li><a href="#" className="hover:underline">Royal Greens II</a></li>
                        </ul>
                        <h4 className="font-medium mt-4">Spaces</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Living Area</a></li>
                            <li><a href="#" className="hover:underline">Bedrooms</a></li>
                            <li><a href="#" className="hover:underline">Kitchen</a></li>
                            <li><a href="#" className="hover:underline">Dining</a></li>
                            <li><a href="#" className="hover:underline">Bathroom</a></li>
                        </ul>
                    </div>
                    {/* Brands Section */}
                    <div className='mt-4 order-3 sm:order-2'>
                        <h3 className="font-semibold mb-4">Brands</h3>
                        <h4 className="font-medium">Timber, Ply & Laminates</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Veneers</a></li>
                            <li><a href="#" className="hover:underline">Plywood</a></li>
                            <li><a href="#" className="hover:underline">Adhesive</a></li>
                            <li><a href="#" className="hover:underline">Wallpapers</a></li>
                            <li><a href="#" className="hover:underline">Decoratives</a></li>
                            <li><a href="#" className="hover:underline">Laminates</a></li>
                        </ul>
                        <h4 className="font-medium mt-4">Flooring</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Wooden Flooring</a></li>
                            <li><a href="#" className="hover:underline">Marbles</a></li>
                            <li><a href="#" className="hover:underline">Ceramic Tiles</a></li>
                            <li><a href="#" className="hover:underline">SPC Floors</a></li>
                        </ul>
                        <h4 className="font-medium mt-4">Other Brands</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Lighting Fixtures</a></li>
                            <li><a href="#" className="hover:underline">Kitchen/ Modular</a></li>
                            <li><a href="#" className="hover:underline">Hardware</a></li>
                            <li><a href="#" className="hover:underline">Paints</a></li>
                            <li><a href="#" className="hover:underline">Furnishings</a></li>
                            <li><a href="#" className="hover:underline">Wardrobes</a></li>
                            <li><a href="#" className="hover:underline">Bathroom Fittings</a></li>
                        </ul>
                    </div>

                    {/* Designers */}
                    <div className='mt-4 col-span-2 pl-12 md:pl-0 md:col-span-1 order-4 sm:order-3'>
                        <h3 className="font-semibold mb-4">Designers</h3>
                        <h4 className="font-medium">Architecture Firm</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">O+A Designers</a></li>
                            <li><a href="#" className="hover:underline">IA Designers</a></li>
                            <li><a href="#" className="hover:underline">ArchiLabs</a></li>
                            <li><a href="#" className="hover:underline">CBT Group</a></li>
                            <li><a href="#" className="hover:underline">Ground Up Architects</a></li>
                            <li><a href="#" className="hover:underline">DGA Architects</a></li>
                        </ul>
                        <h4 className="font-medium mt-4">Interior Designers</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Esajee Ateliers</a></li>
                            <li><a href="#" className="hover:underline">InterioHome</a></li>
                            <li><a href="#" className="hover:underline">The KariGhars</a></li>
                            <li><a href="#" className="hover:underline">Morphogenesis</a></li>
                        </ul>
                        <h4 className="font-medium mt-4">Architects</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Vinita Chaitanya</a></li>
                            <li><a href="#" className="hover:underline">Savio Rupa</a></li>
                            <li><a href="#" className="hover:underline">Abhishek Chadha</a></li>
                            <li><a href="#" className="hover:underline">Vir Mueller</a></li>
                            <li><a href="#" className="hover:underline">Sonali Mani</a></li>
                            <li>
                                <a href='#' className='hover:underline'>Sidhartha Talwar</a>
                            </li>
                            <li>
                                <a href='#' className='hover:underline'>Ekta Makadia</a>
                            </li>

                        </ul>
                    </div>

                    {/* Builders */}
                    <div className='mt-4 order-2  sm:order-4'>
                        <h3 className="font-semibold mb-4">Builders</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:underline">Suncity Builders</a></li>
                            <li><a href="#" className="hover:underline">Joy Bharath Group</a></li>
                            <li><a href="#" className="hover:underline">Mangalam Group</a></li>
                            <li><a href="#" className="hover:underline">Vardhaman Group</a></li>
                            <li><a href="#" className="hover:underline">Kedia Homes</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
