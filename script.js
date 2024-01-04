function searchPokemon() {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonInput}/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonName = document.getElementById('pokemonName');
            const pokemonImage = document.getElementById('pokemonImage');
            const baseExperience = document.getElementById('baseExperience');
            const moves = document.getElementById('moves');
            const weight = document.getElementById('weight');
            const height = document.getElementById('height');
            const pokemonInfo = document.getElementById('pokemonInfo');

            pokemonName.textContent = data.name;
            pokemonImage.src = data.sprites.front_default;
            baseExperience.textContent = data.base_experience;
            moves.textContent = data.moves.map(move => move.move.name).join(', ');
            weight.textContent = data.weight;
            height.textContent = data.height;

            pokemonInfo.classList.remove('hidden');
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            alert('Erro ao buscar informações do Pokémon. Verifique o nome e tente novamente.');
        });
}
