import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Menu, ChevronDown, Search } from "lucide-react";
import { InteriokeysLogo } from "../lib/utils";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-around px-2 py-2 md:px-6 md:py-3 bg-white shadow-md w-full text-xs md:text-sm lg:text-base">
      {/* Logo */}
      <div className="flex items-center space-x-2 w-[50%]">
        <div className="mr-3">
          <img src={InteriokeysLogo} alt='logo' className="w-full max-w-[180px] h-auto" />
        </div>
        {/* Locations Dropdown */}
        <div className="hidden sm:block">
          <NavDropdown title="Jaipur" items={["New York", "Los Angeles", "Chicago"]} />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex w-[80%] relative">
          <Input type="text" placeholder="Search by location, professionals or project..." className="pl-10 py-5 text-start outline-none" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>
      {/* Dropdowns and Button */}
      <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
        <NavDropdown title="Inspiration" items={["Projects", "Spaces"]} />
        <NavDropdown title="Brands" items={["Timber, Ply & Laminates", "Flooring", "Other Brands"]} />
        <NavDropdown title="Professionals" items={["Architects", "Designers", "Builders"]} />
        <Button className="text-xs md:text-sm px-3 bg-red hover:bg-red">Book Consultation</Button>
        <Button className="px-4 bg-[#F1F3F4] hover:bg-current">
          <NavDropdown title="Rohan" items={["Profile", "Settings", "Logout"]} />
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="outline-none border-0 focus:border-0 md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
            <Menu style={{ height: '30px', width: '30px' }} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <MobileNavItems />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

function NavDropdown({ title, items }: { title: string; items: string[] }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center outline-none text-gray-700 font-medium cursor-pointer space-x-1">
        <span className="font-interiokeys">{title}</span> <ChevronDown className="h-3 w-3" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {items.map((item, index) => (
          <DropdownMenuItem key={index}>{item}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function MobileNavItems() {
  const items = [
    { title: "Locations", options: ["New York", "Los Angeles", "Chicago"] },
    { title: "Inspiration", options: ["Modern", "Classic", "Minimalist"] },
    { title: "Brands", options: ["Nike", "Adidas", "Puma"] },
    { title: "Professionals", options: ["Architects", "Designers", "Builders"] },
    { title: "User Name", options: ["Profile", "Settings", "Logout"] },
  ];
  return (
    <div className="flex flex-col space-y-2 p-2">
      {items.map((section, index) => (
        <DropdownMenu key={index}>
          <DropdownMenuTrigger className="flex items-center text-gray-700 font-medium cursor-pointer space-x-1">
            <span className="font-interiokeys">{section.title}</span> <ChevronDown className="h-3 w-3" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {section.options.map((option, idx) => (
              <DropdownMenuItem key={idx}>{option}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
      <Button className="mt-2 text-xs md:text-sm px-3">Book Consultation</Button>
    </div>
  );
}
