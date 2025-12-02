# Atividade Prática: CORS Fundamentals Explorer

Este repositório contém os arquivos de código-fonte para a **Atividade Prática: Demonstrando o CORS (Recusa e Permissão)**, focada em entender a **Política de Mesma Origem (SOP)** e sua solução através do **Cross-Origin Resource Sharing (CORS)**.
O objetivo é demonstrar a comunicação bem-sucedida entre dois servidores em origens diferentes. O projeto ilustra como uma requisição de origem cruzada é inicialmente **bloqueada** (Etapa A)e, em seguida, **permitida** (Etapa B) após a configuração adequada do middleware `cors`.

---

## Tecnologias Utilizadas

**Backend:** Node.js com framework **Express**
**Frontend:** HTML/JavaScript simples
**Middleware:** **`cors`** (módulo npm para Express)

---

## Estrutura do Projeto

O repositório está organizado em duas pastas separadas:

1. **`backend`**: Servidor da API (Node.js/Express) rodando na porta **8080**.
2. **`frontend`**: Cliente HTML/JavaScript que tenta acessar a API, rodando na porta **3000**.

---

## Como Executar o Projeto

Para rodar este projeto, você precisará ter o **Node.js** e o **npm** instalados em sua máquina.

O backend deve ser executado usando o Node.js. O código final implementa a permissão CORS, configurada para aceitar requisições APENAS da origem `http://localhost:3000`.

Digite o comando no terminal para iniciar o servidor (certifique de que está na pasta `backend`):

    node server.js

Após inicializar o servidor, em outro terminal digite o seguinte comando para iniciar o html (certifique de que está na pasta `frontend`):

    npx serve -l 3000

Depois de iniciar os dois, clique no link gerado no terminal do `frontend` (http://localhost:3000).
Após ser direcionado, clique em **Acessar API**, e a resposta será gerada.

---

Para mais informações, acesse o vídeo: 
