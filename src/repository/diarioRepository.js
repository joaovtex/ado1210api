import con from "./connection.js";

export async function inserir(texto) {
    const comando = `INSERT INTO tb_diario (texto, dia) VALUES (?, ?)`

    let[info] = await con.query(comando, [texto.texto, texto.dia])
    return info.insertId;
}

export async function listar() {
    const comando = `
            SELECT id_entrada         id,
                    texto             texto,
                    dia               dia
            FROM tb_diario
    `

    let[registros] = await con.query(comando)
    return registros;
}