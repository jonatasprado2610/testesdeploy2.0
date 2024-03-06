// Importando o módulo Express
const express = require('express');

// Inicializando o aplicativo Express
const app = express();

// Dados para teste
const data = [
    { id: 1, nome: 'Jonatas', idade:'18 anos' },
    { id: 2, nome: 'Davi', idade:'22 anos' },
    { id: 3, nome: 'Sophia', idade:'12 anos' }
];

// Rota GET para obter todos os itens
app.get('/itens', (req, res) => {
    res.json(data); // Retorna os dados como JSON
});

// Porta onde o servidor estará ouvindo
const PORT = process.env.PORT || 3000;

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
