import consultarService from "../service/consultarService.js";
import inserirService from "../service/inserirService.js";
import { Router } from "express";
const endpoints = Router();

endpoints.post('/diario', async (req, resp) => {
    try {
        let texto = req.body;

        let id = await inserirService(texto);

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/diario', async (req, resp) => {
    try {
        let registros = await consultarService();
        resp.send(registros)
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;