
const express = require('express');
const app = express();
const PORT = 3000;

//A partir de ahora, la constante app contiene todos los métodos de express
//para su uso según me convenga.

app.use(express.json());

//Ahora, después de haber instanciado el método json, ya puedo trabajar con json en mi api


//ENDPOINTS

app.get('/', (req, res) => {
    res.send("Hola mundo");
})

app.get('/adios', (req, res) => {
    res.send("Adios mundo");
})

app.get('/persona/:name', (req, res) => {
    let nombre = req.params.name;
    let almuerzo = req.query.almuerzo;
    let merienda = req.query.merienda;

    res.send(`Hola ${nombre}, vas a almorzar ${almuerzo} y a merendar ${merienda}`);
})



app.listen(PORT, ()=>{
    console.log(`Servidor levantado en puerto ${PORT}`);
})