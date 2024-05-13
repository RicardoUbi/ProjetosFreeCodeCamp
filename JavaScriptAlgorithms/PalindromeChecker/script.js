const userInput = document.getElementById('text-input');
const checkPalindromeBtn = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');
const selectIdioma = document.getElementById('selectIdioma');

const traducoes = {
  "portugues": {
    "titulo": "É um Palíndromo?",
    "enterText": "Digite o texto para verificar se é um palíndromo:",
    "validar": "Verificar",
    "definicao": "Um palíndromo é uma palavra ou frase que é soletrada da mesma forma tanto para frente quanto para trás, ignorando pontuação, maiúsculas e minúsculas, e espaçamento."
  },
  "ingles": {
    "titulo": "Is it a Palindrome?",
    "enterText": "Enter in text to check for a palindrome:",
    "validar": "Check",
    "definicao": "A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing."
  },
  "espanhol": {
    "titulo": "¿Es un Palíndromo?",
    "enterText": "Ingrese el texto para verificar si es un palíndromo:",
    "validar": "Verificar",
    "definicao": "Un palíndromo es una palabra o frase que se escribe de la misma manera hacia adelante y hacia atrás, ignorando puntuación, mayúsculas, minúsculas y espacios."
  }
};

function atualizarConteudo(idiomaSelecionado) {
  var elementos = document.querySelectorAll("[data-traducao]");

  elementos.forEach(function(elemento) {
    var chaveTraducao = elemento.getAttribute("data-traducao");
    elemento.textContent = traducoes[idiomaSelecionado][chaveTraducao];
  });
}

function verificarPalindromo(str) {
  const strLimpa = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  return strLimpa === strLimpa.split('').reverse().join('');
}

function mostrarResultado(resultado) {
  const pTag = document.createElement('p');
  pTag.className = 'user-input';
  pTag.innerHTML = resultado;
  resultDiv.innerHTML = '';
  resultDiv.appendChild(pTag);
  resultDiv.classList.remove('hidden');
}

function verificarEExibirPalindromo() {
  const texto = userInput.value;
  if (texto === '') {
    switch (selectIdioma.value) {
      case "portugues":
        alert('Por favor, insira um valor');
        break;
      case "ingles":
        alert('Please input a value');
        break;
      case "espanhol":
        alert('Por favor, introduzca un valor');
        break;
      default:
        alert('Por favor, insira um valor');
    }
    return;
  }
  const resultadoMsg = `<strong>${texto}</strong> ${
    verificarPalindromo(texto) ? 
    (selectIdioma.value === 'ingles' ? 'is' : (selectIdioma.value === 'espanhol' ? 'es' : 'é')) :
    (selectIdioma.value === 'ingles' ? 'is not' : (selectIdioma.value === 'espanhol' ? 'no es' : 'não é'))
  } ${selectIdioma.value === 'ingles' ? 'a' : (selectIdioma.value === 'espanhol' ? 'un' : 'um')} palindrome.`;
  mostrarResultado(resultadoMsg);
  userInput.value = '';
}

selectIdioma.addEventListener("change", function() {
  var idiomaSelecionado = this.value;
  atualizarConteudo(idiomaSelecionado);
});

checkPalindromeBtn.addEventListener('click', verificarEExibirPalindromo);

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    verificarEExibirPalindromo();
  }
});

// Inicializa o conteúdo com o idioma padrão
atualizarConteudo(selectIdioma.value);
