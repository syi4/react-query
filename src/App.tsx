import React, { useState } from "react";
import { Characters } from "./components/Characters";
import { Navbar } from "./components/Navbar";
import { Planets } from "./components/Planets";

export const App: React.FC = () => {
  const [pageByCategory, setPageByCategory] = useState("planets");

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPageByCategory={setPageByCategory} />
      <div className="content">
        {pageByCategory === "planets" ? <Planets /> : <Characters />}
      </div>
    </div>
  );
};
