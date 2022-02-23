import React from "react";

interface NavbarProps {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar: React.FC<NavbarProps> = ({ setPage }) => {
  return (
    <div>
      <nav>
        <button onClick={() => setPage("planets")}>Planets</button>
        <button onClick={() => setPage("characters")}>Characters</button>
      </nav>
    </div>
  );
};
