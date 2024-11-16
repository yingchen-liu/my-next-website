"use client";

import React, { useEffect, useState } from "react";
import { Link } from "../Index/Section";
import { useSelectedLayoutSegments } from "next/navigation";

interface HeaderMenuProps {
  activeItem: string;
  title?: string;
}

interface MenuItemProps {
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ active, children, onClick }) => {
  return (
    <li
      className={`cursor-pointer text-blue-100 hover:text-white ${
        active ? "text-white font-bold" : ""
      } text-sm font-sfmono`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // Scroll smoothly to the section
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const HeaderMenu: React.FC<HeaderMenuProps> = () => {
  const segments = useSelectedLayoutSegments();
  const isHome = segments.length === 0;
  const isResume = segments.length >= 1 && segments[0] === 'resume';

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at the top of the page
      if (currentScrollY < lastScrollY || currentScrollY < 30) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }

      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  function handleItemClick(name: string) {
    if (name.startsWith("#")) {
      scrollToSection(name.replace("#", ""));
    } else {
      window.location.href = `/${name}`;
    }
  }

  return (
    <header
      className={`${
        !isHome ? "border-b border-b-white border-opacity-20" : ""
      } text-white z-50 bg-gray-800 fixed top-0 left-0 px-6 w-full transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center py-7">
        {/* Menu items on the left */}
        <nav className="flex-1">
          <ul className="flex gap-x-4 gap-y-0 font-sfmono flex-wrap">
            {isHome ? (
              <>
                <MenuItem
                  active={false}
                  onClick={() => handleItemClick("#about")}
                >
                  #about
                </MenuItem>
                <div>&gt;</div>
                <MenuItem
                  active={false}
                  onClick={() => handleItemClick("#experiences")}
                >
                  #experiences
                </MenuItem>
                <div>&gt;</div>
                <MenuItem
                  active={false}
                  onClick={() => handleItemClick("#projects")}
                >
                  #projects
                </MenuItem>
                <div>&gt;</div>
                <MenuItem
                  active={false}
                  onClick={() => handleItemClick("#contact")}
                >
                  #contact
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem active={false} onClick={() => handleItemClick("")}>
                  🏡 Home
                </MenuItem>
                <span>|</span>
                <MenuItem
                  active={isResume}
                  onClick={() => handleItemClick("resume")}
                >
                  📃 Resume
                </MenuItem>
              </>
            )}
          </ul>
        </nav>
        {/* Login button logic */}
        {isHome && (<nav className="mt-4 md:mt-0 md:ml-4">
          <Link onClick={() => handleItemClick("resume")}>Resume</Link>
        </nav>)}
      </div>
    </header>
  );
};

export default HeaderMenu;
