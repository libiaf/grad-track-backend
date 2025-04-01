"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evaluadoRouter = (0, express_1.Router)();
evaluadoRouter.get('/getallevaluados', (req, res) => {
    res.send('Obtener lista con todos los evaluados');
});
evaluadoRouter.post('/crearevaluado', (req, res) => {
    res.send(`Crear nuevo evaluado con id ${req.body.id}`);
});
evaluadoRouter.patch('/updateevaluado/:id', (req, res) => {
    res.send(`Actualizar el evaluado con id ${req.params.id} con el nombre "${req.body.nombre}"`);
});
evaluadoRouter.delete('/deleteevaluado', (req, res) => {
    res.send(`Borrar el evaluado con id ${req.body.id}`);
});
evaluadoRouter.get('/getevaluado/:id', (req, res) => {
    res.send(`Obtener evaluado con id ${req.params.id}`);
});
exports.default = evaluadoRouter;
