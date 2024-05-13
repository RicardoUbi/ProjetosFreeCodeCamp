const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const cashValue = cash.value;
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const soldScreen = document.getElementById('sold-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');
const selectIdioma = document.getElementById('selectIdioma');

let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const traducoes = {
  "portugues": {
    "name-project": "Projeto Caixa Registradora",
    "saldo-recebido": "Recebido",
    "message-enter": "Digite o dinheiro do cliente:",
    "btn-enviar": "Comprar"
  },
  "ingles": {
    "name-project": "Cash Register Project",
    "saldo-recebido": "Receive",
    "message-enter": "Enter cash from customer:",
    "btn-enviar": "Purchase"
  },
  "espanhol": {
    "name-project": "Proyecto de Caja Registradora",
    "saldo-recebido": "Recibir",
    "message-enter": "Ingrese el efectivo del cliente:",
    "btn-enviar": "Comprar"
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

cash.addEventListener('input', () => { 
  const cashValue = cash.value;
  if (cashValue !== "") { 
    const cashNumber = parseFloat(cashValue); 
    const formattedCash = `$${cashNumber.toFixed(2)}`; 
    soldScreen.textContent = formattedCash;
  } else {
    soldScreen.textContent = ""; 
  }
});


const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p id="bar-content">Status: ${status}</p>`;
  change.map(
    money => (displayChangeDue.innerHTML += `<p>${money[0]}: $${money[1]}</p>`)
  );
  return;
};

const checkCashRegister = () => {
  if (Number(cash.value) < price) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }

  if (Number(cash.value) === price) {
    displayChangeDue.innerHTML =
      '<p id="bar-content-yellow">No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }
  
  let changeDue = Number(cash.value) - price;
  let reversedCid = [...cid].reverse();
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let result = { status: 'OPEN', change: [] };
  let totalCID = parseFloat(
    cid
      .map(total => total[1])
      .reduce((prev, curr) => prev + curr)
      .toFixed(2)
  );

  if (totalCID < changeDue) {
    return (displayChangeDue.innerHTML = '<p id="bar-content-red">Status: INSUFFICIENT_FUNDS</p>');
  }

  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue > denominations[i] && changeDue > 0) {
      let count = 0;
      let total = reversedCid[i][1];
      while (total > 0 && changeDue >= denominations[i]) {
        total -= denominations[i];
        changeDue = parseFloat((changeDue -= denominations[i]).toFixed(2));
        count++;
      }
      if (count > 0) {
        result.change.push([reversedCid[i][0], count * denominations[i]]);
      }
    }
  }
  if (changeDue > 0) {
    return (displayChangeDue.innerHTML = '<p id="bar-content-red">Status: INSUFFICIENT_FUNDS</p>');
  }

  formatResults(result.status, result.change);
  updateUI(result.change);
};

const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

const updateUI = change => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  // Update cid if change is passed in
  if (change) {
    change.forEach(changeArr => {
      const targetArr = cid.find(cidArr => cidArr[0] === changeArr[0]);
      targetArr[1] = parseFloat((targetArr[1] - changeArr[1]).toFixed(2));
    });
  }

  cash.value = '';
  priceScreen.textContent = `$${price}`;
  cashDrawerDisplay.innerHTML = `<p id="bar-content"><strong>Change in drawer:</strong></p>
    ${cid
      .map(money => `<p>${currencyNameMap[money[0]]}: $${money[1]}</p>`)
      .join('')}  
  `;
};

purchaseBtn.addEventListener('click', checkResults);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});

updateUI();

