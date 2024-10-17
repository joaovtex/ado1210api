import {inserir} from '../repository/diarioRepository.js'
import validarInsercao from '../validation/inserirValidation.js';


export default async function inserirService(texto) {
    validarInsercao(texto)

    let id = await inserir(texto);
    return id;
}