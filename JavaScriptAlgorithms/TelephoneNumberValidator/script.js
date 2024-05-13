const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');
const selectIdioma = document.getElementById('selectIdioma');

const traducoes = {
  "portugues": {
    "titulo": "Válidar número de Telefone",
    "enterNumber": "Digite um número de Telefone:",
    "validar": "Válidar",
    "limpar": "Limpar"
  },
  "ingles": {
    "titulo": "Telephone Number Validator",
    "enterNumber": "Enter a Phone Number:",
    "validar": "Check",
    "limpar": "Clear"
  },
  "espanhol": {
    "titulo": "Validar Número del Teléfono",
    "enterNumber": "Introduzca un número del Teléfono:",
    "validar": "Conprobar",
    "limpar": "Limpar"
  }
};
const mensagens = {
  ingles: {
    valido: 'Valid',
    invalido: 'Invalid',
    numeroUS: 'US number:',
  },
  espanhol: {
    valido: 'Valido',
    invalido: 'Invalido',
    numeroUS: 'numero US:',
  },
  portugues: {
    valido: 'Válido',
    invalido: 'Inválido',
    numeroUS: 'número US:',
  },
};
function atualizarConteudo(idiomaSelecionado) {
  var elementos = document.querySelectorAll("[data-traducao]");

  elementos.forEach(function(elemento) {
    var chaveTraducao = elemento.getAttribute("data-traducao");
    elemento.textContent = traducoes[idiomaSelecionado][chaveTraducao];
  });
}

function validarNumeroTelefone(input){
  if (input === '') {
    switch (selectIdioma.value) {
      case "portugues":
        alert("Número de telefone inválido. Formato esperado: (DDD) XXXX-XXXX ou XXXX-XXXX.");
        break;
      case "ingles":
        alert("Please provide a phone number");
        break;
      case "espanhol":
        alert("Número del teléfono invalido. Formato esperado: (XXX) XXXX-XXXX o XXXX-XXXX.");
        break;
      default:
        alert("Número de telefone inválido. Formato esperado: (DDD) XXXX-XXXX ou XXXX-XXXX.");
        }
    }
  const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const phoneRegex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  );
  
  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  phoneRegex.test(input)
    ? (pTag.style.color = '#00471b')
    : (pTag.style.color = '#4d3800');
  const mensagem = mensagens[selectIdioma.value];
  pTag.appendChild(
    document.createTextNode(`${phoneRegex.test(input) ? mensagem.valido : mensagem.invalido} ${mensagem.numeroUS} ${input}`));
  resultsDiv.appendChild(pTag);
}

checkBtn.addEventListener('click', () => {
  validarNumeroTelefone(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    validarNumeroTelefone(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});

selectIdioma.addEventListener("change", function() {
  var idiomaSelecionado = this.value;
  atualizarConteudo(idiomaSelecionado);
});

atualizarConteudo(selectIdioma.value);