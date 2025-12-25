"use client";

import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b border-border p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-lg font-bold text-primary-foreground hover:text-primary">
          My App
        </Link>
        <div className="hidden md:flex space-x-2">
          <Button variant="ghost" asChild>
            <Link to="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/about">About</Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;