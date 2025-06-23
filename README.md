# README - Clínica Vida Saudável



## Design

![index-clínica](/Front-end/img/index-clinica.png)
![Exames-clínica](/Front-end/img/Exame-clinica.png)
![Exames-clínica-responsividade](/Front-end/img/Responsividade.png.png)
![ADM-clínica](/Front-end/img/ADM-clinica.png)

---

## Funcionalidades

### Área do Paciente
- Seleção do tipo de exame (sangue, urina, fezes).
- Escolha dos exames específicos via checkboxes.
- Visualização do resumo do pedido com preços atualizados dinamicamente.
- Agendamento de consulta com seleção de horário e inserção do CPF.
- Confirmação do agendamento.

### Área do Administrador
- Visualização do histórico de consultas pendentes.
- Busca e filtro de consultas por CPF.
- Layout responsivo e design alinhado com a área do paciente.

---

## Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Node.js, Express.js, cors, pg
- **APIs:** Fetch API (consumo de API no front-end)
- **Banco de Dados:** PostgreSQL

---

## Estrutura de Arquivos

```
/Clinica-Asclépio
│
├── /src
│   ├── database.js
│   ├── controller.js
│   ├── server.js
│   └── code_Exames.js
│
├── /public
│   ├── index.html
│   ├── exames.html
│   ├── admin.html
│   ├── style.css
│   └── codeADM.js
│
├── package.json
└── README.md
```

---

## Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- PostgreSQL instalado e rodando
- Configurar banco de dados com as tabelas necessárias

### Passos para execução

1. Clone o repositório:
   ```
   git clone https://github.com/HugoDavi777
   ```

2. Instale as dependências:
   ```
   npm i
   ```

3. Configure as variáveis de ambiente e conexão com banco no arquivo `database.js`.

4. Inicie o servidor:
   ```
   npm start
   ```

5. Abra o navegador e acesse:
   - Área do paciente: `http://localhost:8070/exames.html`
   - Área do administrador: `http://localhost:8070/admin.html`

---

## Considerações Finais

Este projeto é um protótipo funcional para facilitar o agendamento e gerenciamento de exames médicos, podendo ser expandido com mais funcionalidades e melhorias de segurança.

---
## 👨‍💻 Progamador
- **Nome:** [Hugo Davi da Silva Batista]
- **E-mail:** [davibatista685@gmail.com]
- **GitHub:** [https://github.com/HugoDavi777]
