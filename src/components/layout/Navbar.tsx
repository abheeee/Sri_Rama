import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onAboutClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAboutClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);

  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },

    {
      name: 'About',
      path: '/about',
      dropdown: [
        { name: 'Overview', path: '/about' },
        { name: 'Affiliations', path: '/about/affiliations' },
        { name: 'Governing Body', path: '/about/governing-body' },
        { name: 'Principal Message', path: '/about/principal-message' },
        { name: 'Faculty', path: '/about/faculty' },
        { name: 'Location', path: '/about/location' },
        { name: 'Scholarship', path: '/about/scholarship' },
      ],
    },

    {
      name: 'Courses',
      path: '/courses',
      dropdown: [
        { name: 'BCA', path: '/courses/bca' },
        { name: 'BBA', path: '/courses/bba' },
        { name: 'BCom', path: '/courses/bcom' },
        { name: 'BA', path: '/courses/ba' },
        { name: 'BSc', path: '/courses/bsc' },
      ],
    },

    {
      name: 'Admissions',
      path: '/admissions',
      dropdown: [
        { name: 'Admission Process', path: '/admissions/process' },
        { name: 'Eligibility', path: '/admissions/eligibility' },
        { name: 'Application Form', path: '/admissions/form' },
        { name: 'Documents Required', path: '/admissions/documents' },
        { name: 'Fee Details', path: '/admissions/fees' },
      ],
    },

    {
      name: 'Campus',
      path: '/campus',
      dropdown: [
        { name: 'Library', path: '/campus/library' },
        { name: 'Labs', path: '/campus/labs' },
        { name: 'Hostel', path: '/campus/hostel' },
        { name: 'Sports', path: '/campus/sports' },
        { name: 'Transport', path: '/campus/transport' },
      ],
    },

    {
      name: 'Placements',
      path: '/placements',
      dropdown: [
        { name: 'Placement Cell', path: '/placements/cell' },
        { name: 'Recruiters', path: '/placements/recruiters' },
        { name: 'Training Programs', path: '/placements/training' },
        { name: 'Placement Stats', path: '/placements/stats' },
      ],
    },

    {
      name: 'IQAC',
      path: '/iqac',
      dropdown: [
        { name: 'IQAC Overview', path: '/iqac' },
        { name: 'Committee', path: '/iqac/committee' },
        { name: 'Reports', path: '/iqac/reports' },
        { name: 'Activities', path: '/iqac/activities' },
      ],
    },

    {
      name: 'Contact',
      path: '/contact',
      dropdown: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Location Map', path: '/contact/map' },
        { name: 'Enquiry', path: '/contact/enquiry' },
      ],
    },
  ];

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + '/');

  const handleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDesktopDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setActiveDesktopDropdown(null)}
              >
                {item.name === 'About' ? (
                  <div className="relative">
                    <button
                      onClick={onAboutClick}
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md text-white hover:text-yellow-300',
                        isActive(item.path)
                          ? 'text-white bg-white/20'
                          : ''
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {item.dropdown && activeDesktopDropdown === item.name && (
                      <div className="absolute left-0 top-full z-50 min-w-[240px] overflow-hidden rounded-md border bg-white shadow-lg">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-slate-700 hover:bg-yellow-400 hover:text-black transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.dropdown ? (
                  <div className="relative">
                    <button
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium px-3 py-2 rounded-md text-white hover:text-yellow-300',
                        isActive(item.path)
                          ? 'text-white bg-white/20'
                          : ''
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    {activeDesktopDropdown === item.name && (
                      <div className="absolute left-0 top-full z-50 min-w-[240px] overflow-hidden rounded-md border bg-white shadow-lg">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 text-sm text-slate-700 hover:bg-yellow-400 hover:text-black transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.path}
                      className="text-sm font-medium px-3 py-2 rounded-md text-white hover:text-yellow-300"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="ml-4 bg-primary hover:bg-primary/90">
          Apply Now
        </Button>
      </div>

      {/* Mobile Navigation (unchanged) */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" className="h-10 w-10 text-white">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="w-[85%] max-w-[320px] p-6">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <span className="font-bold text-lg">Sri Rama College</span>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-2 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleMobileDropdown(item.name)}
                        className="flex w-full justify-between px-4 py-3 text-left"
                      >
                        {item.name}
                        <ChevronDown />
                      </button>

                      {openMobileDropdown === item.name && (
                        <div className="ml-3">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onClick={() => setIsOpen(false)}
                              className="block px-4 py-2 text-sm"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link to={item.path} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navbar;