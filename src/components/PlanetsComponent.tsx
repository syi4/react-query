import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { Planets } from "../lib/interfaces";

interface PlanetsProps {}

const fetchPlanets = async () => {
  try {
    const res = await fetch("http://swapi.dev/api/planets/");
    return res.json();
  } catch (err) {
    throw new Error("Error fetching api");
  }
};

export const PlanetsComponent: React.FC<PlanetsProps> = ({}) => {
  const { data, isLoading, isError, error }: UseQueryResult<Planets, Error> =
    useQuery<Planets, Error>("planets", fetchPlanets);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error?.message}</h2>}
      <h2>Planets</h2>
      <p></p>
    </div>
  );
};
