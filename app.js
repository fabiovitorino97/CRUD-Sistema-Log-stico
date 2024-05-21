require("dotenv").config();
require("express-async-errors");
const mongoose = require("mongoose");

//Importação de Rotas
const enterpriseRoutes = require('./src/routes/EnterpriseRoutes')
const clientRoutes = require('./src/routes/ClientRoutes')

const express = require("express")
const app = express()

//Controle de Erros


// Ativação do Express
app.use(express.json())

// Pacotes de Segurança


// Rota mãe
app.get("/", (req, res) => {
    res.send("Teste de Crud")
})

// Rotas filhas
app.use('/api', enterpriseRoutes)
app.use('/api', clientRoutes)


//Seleção da porta
const port = process.env.PORT || 3000;

//Inicialização
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Banco de dados conectado!");

    app.listen(port, () => console.log(`Servidor rodando na porta ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
