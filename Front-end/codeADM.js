let inforconsulta = [];

async function buscarHistorico() {
  try {
    const response = await fetch("http://localhost:8070/history/");
    const data = await response.json();
    inforconsulta = data;
    exibirHistorico(data);
    console.log(inforconsulta)
  } catch (error) {
    console.error("Erro ao buscar o histórico:", error);
  }
}

function filtrarPorCpf() {
  const cpf = document.getElementById("inputCpf").value.trim();
  if (!cpf) {
    alert("Digite um CPF para filtrar.");
    return;
  }

  const filtrado = inforconsulta.filter(p => p.cpf.includes(cpf));
  exibirHistorico(filtrado);
}

function exibirHistorico(lista) {
  const container = document.getElementById("resultadoHistorico");
  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = `<div class="card-venda">Nenhuma consulta encontrada.</div>`;
    return;
  }

  for (let consulta of lista) {
    const card = document.createElement("div");
    card.classList.add("card-venda");

    card.innerHTML = `
      <strong>Id da consulta:</strong> ${consulta.id}<br>
      <strong>CPF:</strong> ${consulta.cpf}<br>
      <strong>Data:</strong> ${new Date(consulta.date).toLocaleDateString("pt-BR")}<br>
      <strong>Hora:</strong> ${(consulta.hora)}<br>
      <strong>Pedido:</strong> ${consulta.description}<br>
      <strong>Preço:</strong> R$ ${parseFloat(consulta.price).toFixed(2)}
    `;

    container.appendChild(card);
  }
}

// Carrega todas as consultas ao abrir a página
window.onload = buscarHistorico;
