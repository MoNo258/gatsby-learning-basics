// Implement the Gatsby API “onCreatePage”.

import path from "path";
import { getPokemonData } from "./src/api";

// This is called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // page.path.match is a special key
  // that's used for matching pages only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
};

const axios = require("axios");

const get = (endpoint: string) =>
  axios.get(`https://pokeapi.co/api/v2${endpoint}`);

const getPokemonData = (names: string[]) =>
  Promise.all(
    names.map(async (name) => {
      const { data: pokemon } = await get(`/pokemon/${name}`);
      const abilities = await Promise.all(
        pokemon.abilities.map(
          async ({ ability: { name: abilityName } }: IAbility) => {
            const { data: ability } = await get(`/ability/${abilityName}`);

            return ability;
          }
        )
      );

      return { ...pokemon, abilities };
    })
  );

exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(["pikachu", "charizard", "squirtle"]);

  // Create a page that lists all Pokémon.
  createPage({
    path: `/pokemon`,
    component: path.resolve(path.join("src", "templates", "all-pokemon.tsx")), // this is for ts
    // component: require.resolve("./src/templates/all-pokemon.js"), // this is for js
    context: { allPokemon },
  });

  // Create a page for each Pokémon.
  allPokemon.forEach((pokemon) => {
    createPage({
      path: `/pokemon/${pokemon.name}/`,
      component: path.resolve(path.join("src", "templates", "pokemon.tsx")),
      context: { pokemon },
    });
  });
};
