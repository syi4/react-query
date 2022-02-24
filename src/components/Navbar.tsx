import React from "react";

interface NavbarProps {
  setPageByCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar: React.FC<NavbarProps> = ({ setPageByCategory }) => {
  return (
    <nav>
      <button onClick={() => setPageByCategory("planets")}>Planets</button>
      <button onClick={() => setPageByCategory("characters")}>
        Characters
      </button>
    </nav>
  );
};
