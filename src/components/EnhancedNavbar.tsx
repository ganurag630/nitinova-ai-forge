
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Menu, X } from 'lucide-react';

const EnhancedNavbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-gray-800">
                <span className="text-nitinova-500">Niti</span>nova
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">
                    <NavigationMenuLink
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        isActive('/') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700 hover:text-nitinova-500 hover:bg-gray-50'
                      }`}
                    >
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/services">
                    <NavigationMenuLink
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        isActive('/services') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700 hover:text-nitinova-500 hover:bg-gray-50'
                      }`}
                    >
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/packages">
                    <NavigationMenuLink
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        isActive('/packages') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700 hover:text-nitinova-500 hover:bg-gray-50'
                      }`}
                    >
                      Packages
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/portfolio">
                    <NavigationMenuLink
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        isActive('/portfolio') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700 hover:text-nitinova-500 hover:bg-gray-50'
                      }`}
                    >
                      Portfolio
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/about">
                    <NavigationMenuLink
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        isActive('/about') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700 hover:text-nitinova-500 hover:bg-gray-50'
                      }`}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/blog">
                    <NavigationMenuLink
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        isActive('/blog') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700 hover:text-nitinova-500 hover:bg-gray-50'
                      }`}
                    >
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button asChild className="ml-4 bg-nitinova-500 hover:bg-nitinova-600">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isOpen ? <X /> : <Menu />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="absolute top-20 left-0 right-0 bg-white border-b border-gray-200 z-50">
                <div className="flex flex-col p-4 space-y-2">
                  <Link
                    to="/"
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      isActive('/') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      isActive('/services') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </Link>
                  <Link
                    to="/packages"
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      isActive('/packages') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Packages
                  </Link>
                  <Link
                    to="/portfolio"
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      isActive('/portfolio') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/about"
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      isActive('/about') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/blog"
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      isActive('/blog') ? 'text-nitinova-500 bg-nitinova-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                  <Button asChild className="mt-2 w-full bg-nitinova-500 hover:bg-nitinova-600">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EnhancedNavbar;
