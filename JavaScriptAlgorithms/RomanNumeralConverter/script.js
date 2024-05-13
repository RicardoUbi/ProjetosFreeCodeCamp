const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');
const selectIdioma = document.getElementById('selectIdioma');

const traducoes = {
  "portugues": {
    "titulo": "Conversor de Números Romanos",
    "enterNumber": "Digite um número:",
    "validar": "Verificar"
  },
  "ingles": {
    "titulo": "Roman Numeral Converter",
    "enterNumber": "Enter a Number:",
    "validar": "Check"
  },
  "espanhol": {
    "titulo": "Conversor de Números Romanos",
    "enterNumber": "Introduzca un número:",
    "validar": "Comprobar"
  }
};

function atualizarConteudo(idiomaSelecionado) {
  var elementos = document.querySelectorAll("[data-traducao]");

  elementos.forEach(function(elemento) {
    var chaveTraducao = elemento.getAttribute("data-traducao");
    elemento.textContent = traducoes[idiomaSelecionado][chaveTraducao];
  });
}

function converterParaRomano(numero) {
  const algarismos_romanos = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const numeroRomano = [];
  
  algarismos_romanos.forEach(function (arr) {
    while (numero >= arr[1]) {
      numeroRomano.push(arr[0]);
      numero -= arr[1];}
  });

  return numeroRomano.join('');
};

function validar(str, int){
  let message_error = '';

  if (!str || str.match(/[e.]/g)) {
    switch (selectIdioma.value) {
      case "portugues":
        message_error = 'Por favor, insira um valor valido.';
        break;
      case "ingles":
        message_error = 'Please enter a valid number.';
        break;
      case "espanhol":
        message_error = 'Por favor, introduzca un valor valido.';
        break;
      default:
        message_error = 'Por favor, insira um valor valido.';
    }} else if (int < 1) {
    switch (selectIdioma.value) {
      case "portugues":
        message_error = 'Por favor, insira um valor maior ou igual a 1.';
        break;
      case "ingles":
        message_error = 'Please enter a number greater than or equal to 1.';
        break;
      case "espanhol":
        message_error = 'Por favor, introduzca un valor major ou igual a 1.';
        break;
      default:
        message_error = 'Por favor, insira um valor maior ou igual a 1.';
    }} else if (int > 3999) {
    switch (selectIdioma.value) {
      case "portugues":
        message_error = 'Por favor, insira um valor menor ou igual a 3999.';
        break;
      case "ingles":
        message_error = 'Please enter a number less than or equal to 3999.';
        break;
      case "espanhol":
        message_error = 'Por favor, introduzca un valor menor ou igual a 3999.';
        break;
      default:
        message_error = 'Por favor, insira um valor menor ou igual a 3999.';
    }} else {
    // No errors detected
    return true;
  }

  // Handle error text and output styling
  output.innerText = message_error;
  output.classList.add('alert');

  return false;
};

function limparSaida() {
  output.innerText = '';
  output.classList.remove('alert');
};

function atualizarTela() {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  output.classList.remove('hidden');

  limparSaida();

  if (validar(numStr, int)) {
    output.innerText = converterParaRomano(int);
  }
};

selectIdioma.addEventListener("change", function() {
  var idiomaSelecionado = this.value;
  atualizarConteudo(idiomaSelecionado);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  atualizarTela();
});

convertButton.addEventListener('click', () => {
  atualizarTela();
});

atualizarConteudo(selectIdioma.value);