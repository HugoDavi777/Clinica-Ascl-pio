var infoExame = {};
var infoAvaliacoes = [];
let total = 0;
    const totalSpan = document.getElementById('total');
    const examesSelecionados = [];

async function getExame(idExame) {
  const response = await fetch("http://localhost:8070/exames/"+ idExame);
  const data = await response.json();

  console.log(data);
  infoExame = data.Exames[0];
  console.log(infoExame)
  infoAvaliacoes = data.Avaliações;  

  renderAvaliacoes();
  console.log(idExame.id)
}

function renderAvaliacoes() {
  document.querySelector(".Availicoes").innerHTML = "";

 for (let i = 0; i < infoAvaliacoes.length; i++) {
  const Avaliacoes = infoAvaliacoes[i];
  let div = document.createElement("div");

  div.innerHTML = `<label><input type="checkbox" data-index="${i}" onclick="updatePrice()"/> ${Avaliacoes.name} (R$ ${Avaliacoes.price})</label>`;
  document.querySelector(".Availicoes").appendChild(div);
}
}

function updatePrice() {
  const checkboxes = document.querySelectorAll(".Availicoes input[type='checkbox']");
  const listaExames = document.getElementById("lista-exames");
  listaExames.innerHTML = "";

  let totalAvaliacoes = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const index = parseInt(checkbox.dataset.index);
      const avaliacao = infoAvaliacoes[index];

      const item = document.createElement("div");
        item.className = 'resumo-item';
        item.innerHTML = `<span>${avaliacao.name}</span><span>R$ ${avaliacao.price}</span>`;
        listaExames.appendChild(item);

      totalAvaliacoes += parseFloat(avaliacao.price);
    }
  });

  const total = parseFloat(infoExame.price || 0) + totalAvaliacoes;
  document.getElementById("total").innerText = `R$ ${total.toFixed(2)}`;
}


function marcarConsulta() {
    const cpf = document.getElementById('cpf').value;
    const horario = document.getElementById('horario').value;

    if (!cpf || examesSelecionados.length === 0) {
     alert('Por favor, insira o CPF e selecione pelo menos um exame.');
     return;
    }

     alert(`Consulta marcada para ${horario}!\nCPF: ${cpf}\nTotal: R$ ${total}`);
    }


function descricao() {
  let base = infoExame.name || "Sangue";
  let checkboxes = document.querySelectorAll(".Availicoes input[type='checkbox']");
  let AvaliacoesSelecionadas = [];

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      AvaliacoesSelecionadas.push(infoAvaliacoes[index].name);
    }
  });

  if (AvaliacoesSelecionadas.length === 0) {
    return base;
  }

  return `Exame de ${base}. Avaliações:${AvaliacoesSelecionadas.join(" , ")}`;
}

async function marcarConsulta() {
  let id_exame = infoExame.id_exame;
  let cpf = document.querySelector("#cpf").value;
  let date = document.querySelector("#date").value;
  let hora = document.querySelector("#horario").value
  let description = descricao();
  let price = document.querySelector("#total").textContent.replace("R$", "").trim();
  price = parseFloat(price); 

  const dados = {
    id_exame,
    cpf,
    date,
    hora,
    description,
    price
  };

  console.log(dados);

  const resposta = await fetch("http://localhost:8070/consulta", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados)
  });

  const data = await resposta.json();
  console.log(data);
}
getFood(1);