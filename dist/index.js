"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require('morgan');
const app = (0, express_1.default)();
const port = 3000;
app.use(morgan('dev'));
app.use(express_1.default.json());
app.get('/evaluados/getallevaluados', (req, res) => {
    res.send('Obtener lista con todos los evaluados');
});
app.post('/evaluados/crearevaluado', (req, res) => {
    const id = req.body.id;
    res.send(`Crear nuevo evaluado con id ${id}`);
});
app.patch('/evaluados/updateevaluado/:id', (req, res) => {
    res.send(`Actualizar el evaluado con id ${req.params.id} con el nombre "${req.body.nombre}"`);
});
app.delete('/evaluados/deleteevaluado', (req, res) => {
    const id = req.body.id;
    res.send(`Borrar el evaluado con id ${id}`);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
