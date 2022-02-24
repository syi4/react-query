import React, { useState } from "react";
import { useQuery, UseQueryResult } from "react-query";
import { CharactersData } from "../lib/interfaces";
import { Character } from "./Character";

const fetchCharacters = async (page: number) => {
  try {
    const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
    return res.json();
  } catch (err) {
    throw new Error("Error fetching api");
  }
};

export const Characters: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isPreviousData,
  }: UseQueryResult<CharactersData, Error> = useQuery(
    ["planets", page],
    () => fetchCharacters(page),
    { keepPreviousData: true }
  );

  return (
    <div>
      <h2>Planets</h2>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error?.message}</h2>}
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={data?.previous === null}
      >
        Previous
      </button>
      <button
        onClick={() => {
          if (!isPreviousData && data?.next) {
            setPage((old) => old + 1);
          }
        }}
        disabled={isPreviousData || data?.next === null}
      >
        Next
      </button>

      <div>
        {data?.results?.map((character, idx) => (
          <Character character={character} key={idx} />
        ))}
      </div>
      {isFetching ? <h2>Loading...</h2> : null}
    </div>
  );
};
