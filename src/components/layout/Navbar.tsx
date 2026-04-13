import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

function slugify(label: string) {
  return label
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },

    {
      name: "About",
      path: "/about",
      dropdown: [
        'Overview',
        'Affiliations',
        'Governing Body',
        'Principal Message',
        'Faculty',
        'Location',
        'Scholarship',
      ],
    },

    {
      name: "Courses",
      path: "/courses",
      dropdown: ["BCA", "BBA", "BCom", "BA", "BSc"],
    },

    {
      name: "Admissions",
      path: "/admissions",
      dropdown: [
        "Admission Process",
        "Eligibility",
        "Application Form",
        "Documents Required",
        "Fee Details",
      ],
    },

    {
      name: "Campus",
      path: "/campus",
      dropdown: ["Library", "Labs", "Hostel", "Sports", "Transport"],
    },

    {
      name: "Placements",
      path: "/placements",
      dropdown: [
        "Placement Cell",
        "Recruiters Section",
        "Training Programs",
        "Placement Stats",
      ],
    },

    {
      name: "IQAC",
      path: "/iqac",
      dropdown: ["Overview", "Committee", "Reports", "Activities"],
    },

    {
      name: "Contact",
      path: "/contact",
      dropdown: ["Contact Us", "Location Map", "Enquiry"],
    },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-center space-x-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* NAV ITEM */}
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md text-white hover:text-yellow-300 cursor-pointer",
                    isActive(item.path) && "text-yellow-300"
                  )}
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* DROPDOWN */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-md border bg-white shadow-lg overflow-hidden">

{item.dropdown.map((sub, index) => {
  const isCampusItem = typeof sub === 'object';
  const label = isCampusItem ? sub.label : sub;
  const to = isCampusItem
    ? `/campus#${sub.key}`           // Campus → go to section
    : sub === 'Location'
    ? '/about/location'
    : item.path;                     // all others unchanged

  return (
<Link
  key={index}
  to={to}
  onClick={() => {
    if (isCampusItem) {
      setActiveDropdown(null); // close dropdown
      const key = sub.key;
      // small delay to let navigation happen first
      setTimeout(() => {
        const el = document.querySelector(`[data-section="${key}"]`) as HTMLElement;
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 172;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 100);
    }
  }}
  className="block px-4 py-3 text-sm text-gray-700 hover:bg-yellow-400 hover:text-black transition-colors"
>
  {label}
</Link>
  );
})}

                  </div>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Link to="/admissions/application-form" className="ml-4" onClick={() => setActiveDropdown(null)}>
          <Button className="bg-primary hover:bg-primary/90">Apply Now</Button>
        </Link>
      </div>

      {/* Mobile */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85%] max-w-[320px] p-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;