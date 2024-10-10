const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 4000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

// Simulação de credenciais válidas
const credenciaisValidas = {
    id: 'fechadura_123',
    passwd: 'senha_secreta'
};

// Simulação de lista de portas
const listaPortas = ['porta_1', 'porta_2', 'porta_3'];

// Rota de autenticação
app.post('/login', (req, res) => {
    const { id, passwd } = req.body;

    if (id === credenciaisValidas.id && passwd === credenciaisValidas.passwd) {
        res.json({ autenticado: true });
    } else {
        res.json({ autenticado: false });
    }
});

// Rota para obter a lista de portas
app.get('/portas', (req, res) => {
    res.json({ portas: listaPortas });
});

// Rota para abrir uma porta
app.post('/abrir-porta', (req, res) => {
    const { id_porta } = req.body;

    if (listaPortas.includes(id_porta)) {
        res.json({ status: 'sucesso' });
    } else {
        res.json({ status: 'falha' });
    }
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
