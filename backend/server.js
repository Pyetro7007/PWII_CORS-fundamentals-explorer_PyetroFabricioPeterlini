const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8080;

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: 'GET',
    optionsSuccesStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/mensagem', (req, res) => {
    res.json({ data: "Mensagem secreta da API em 8080 - COM PERMISSÃO CORS!" });
});

app.listen(PORT, () => {
    console.log(`API Backend rodando em: http://localhost:${PORT}`);
    console.log(`AGORA PERMITINDO acesso de: http://localhost:3000`);
});