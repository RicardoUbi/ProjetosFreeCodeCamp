const pokemonID = document.getElementById('pokemon-id');
const pokemonName = document.getElementById('pokemon-name');
const spriteContainer = document.getElementById('sprite-container');
const types = document.getElementById('types');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const specialAttack = document.getElementById('special-attack');
const specialDefense = document.getElementById('special-defense');
const speed = document.getElementById('speed');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const selectIdioma = document.getElementById('selectIdioma');

const traducoes = {
  "portugues": {
    "name-project": "Aplicativo de Busca Pokémon",
    "base": "Base",
    "stats": "Status",
    "hp": "HP:",
    "attack": "Ataque:",
    "defense": "Defesa:",
    "super-atk": "Ataque Esp.:", // Abreviação de Ataque Especial
    "super-def": "Defesa Esp.:", // Abreviação de Defesa Especial
    "speed": "Velocidade:",
    "message-enter": "Pesquise o Nome ou ID do Pokémon:",
    "btn-enviar": "Buscar"
  },
  "ingles": {
    "name-project": "Pokémon Search App",
    "base": "Base",
    "stats": "Stats",
    "hp": "HP:",
    "attack": "Attack:",
    "defense": "Defense:",
    "super-atk": "Sp. Attack:",
    "super-def": "Sp. Defense:",
    "speed": "Speed:",
    "message-enter": "Search for Pokémon Name or ID:",
    "btn-enviar": "Search"
  },
  "espanhol": {
    "name-project": "Aplicación de Búsqueda Pokémon",
    "base": "Base",
    "stats": "Status",
    "hp": "PS:", // Abreviação de Puntos de Salud
    "attack": "Ataque:",
    "defense": "Defensa:",
    "super-atk": "Ataque Esp.:", // Abreviação de Ataque Especial
    "super-def": "Defensa Esp:", // Abreviação de Defensa Especial
    "speed": "Velocidad:",
    "message-enter": "Buscar por Nombre o ID de Pokémon:",
    "btn-enviar": "Buscar"
  },
};

function atualizarConteudo(idiomaSelecionado) {
  var elementos = document.querySelectorAll("[data-traducao]");

  elementos.forEach(function(elemento) {
    var chaveTraducao = elemento.getAttribute("data-traducao");
    elemento.textContent = traducoes[idiomaSelecionado][chaveTraducao];
  });
}

selectIdioma.addEventListener("change", function() {
  var idiomaSelecionado = this.value;
  atualizarConteudo(idiomaSelecionado);
});

atualizarConteudo(selectIdioma.value);

const getPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(
      `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`
    );
    const data = await response.json();

    // Set Pokémon info
    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonID.textContent = `#${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    spriteContainer.innerHTML = `
      <img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">
    `;

    // Set stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;
    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    // Set types
    types.innerHTML = data.types
      .map(obj => `<span class="type ${obj.type.name}">${obj.type.name}</span>`)
      .join('');
  } catch (err) {
    resetDisplay();
    alert('Pokémon not found');
    console.log(`Pokémon not found: ${err}`);
  }
};

const resetDisplay = () => {
  const sprite = document.getElementById('sprite');
  if (sprite) sprite.remove();

  // reset stats
  pokemonName.textContent = '';
  pokemonID.textContent = '';
  types.innerHTML = '';
  height.textContent = '';
  weight.textContent = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
};

searchForm.addEventListener('submit', e => {
  e.preventDefault();
  getPokemon();
});
