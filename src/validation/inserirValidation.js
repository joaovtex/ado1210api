export default function validarInsercao(texto) {
    if (!texto.texto) throw new Error('Texto é obrigatório!');
    if (!texto.dia) throw new Error('Data é obrigatória!');
}
