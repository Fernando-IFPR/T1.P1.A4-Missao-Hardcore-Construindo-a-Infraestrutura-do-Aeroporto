export default class Voo {
    constructor(codigo, origem, destino) {
        if (!codigo || codigo.trim() === "") {
            throw new Error("Campo Obrigatório: O voo precisa de um código.");
        }
        if (origem.toLowerCase() === destino.toLowerCase()) {
            throw new Error("Rota Inválida: Origem e destino não podem ser iguais.");
        }
        this.codigo = codigo.toUpperCase();
        this.origem = origem;
        this.destino = destino;
    }
}