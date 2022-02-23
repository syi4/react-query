import React, { useState } from "react";
import { Characters } from "./components/Characters";
import { Navbar } from "./components/Navbar";
import { PlanetsComponent } from "./components/PlanetsComponent";

export const App: React.FC = () => {
  const [page, setPage] = useState("planets");

  return (
    <div className="App">
      <h1>Star Wars Info</h1>
      <Navbar setPage={setPage} />
      <div className="content">
        {page === "planets" ? <PlanetsComponent /> : <Characters />}
      </div>
    </div>
  );
};
