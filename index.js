//42.20
const express = require('express');//importa el modulo
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();//Crea una applicacion express

//middleware
app.use(express.json());//acepte jsons
app.use(express.urlencoded({ extended: false }));//acepte formulario html

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {//creamos la ruta raiz/default
    res.send("hola desde Node API");
});

//conexion mongo
mongoose.connect("mongodb+srv://root:123@backenddb.osd1x2d.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log('Connected to database');
        app.listen(3000, () => {//define el puerto de escucha
            console.log('el servidor se está escuchando en el puerto 3000')
        });
    }).catch(() => {
        console.log('Error to connected to database');
    });

