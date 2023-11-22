
fetch('https://pokeapi.co/api/v2/pokemon')
.then(T => T.json())
.then(resposta => {
    resposta.results.forEach(resultado => {
        fetch(resultado.url)
        .then(resultado => resultado.json())
        .then(resultado2 => criarPokemon(resultado2))
    });
})

function criarPokemon(pokemon) {
    const pokemons = document.getElementById("lista");

    const pokemonCard = document.createElement("div");
    pokemons.appendChild(pokemonCard);
    pokemonCard.innerHTML = `
    <pokemon-card
            nome="${pokemon.name}"
            capa="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
            tipo1="${pokemon.types[0].type.name}"
            tipo2="${pokemon.types[0].type.name}"
            numero="${pokemon.id}"
            ></pokemon-card>`
}