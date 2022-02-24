export interface PlanetsData {
  count: number;
  next: string;
  previous: null;
  results: PlanetResult[];
}

export interface PlanetResult {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
}

export interface CharactersData {
  count: number;
  next: string;
  previous: null;
  results: CharacterResult[];
}

export interface CharacterResult {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
}

export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}
