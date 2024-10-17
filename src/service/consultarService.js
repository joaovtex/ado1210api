import { listar } from "../repository/diarioRepository.js";

export default async function consultarService() {
    let registros = await listar();
    return registros;
}