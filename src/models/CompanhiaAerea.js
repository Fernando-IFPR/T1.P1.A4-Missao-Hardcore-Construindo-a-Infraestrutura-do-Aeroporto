//Arquivo: src/models/CompanhiaAerea.js

class CompanhiaAerea {
    statusFromOthers;
    localizacao;
    numeroCompanhia;
    disponibilidade;

    defDisponibilidade (disponibilidade) {
        let lugaresDePousoDisponíveis = 5;
        if ('No chão', this.localizacao==this.localizacao in this.statusFromOthers) {
            lugaresDePousoDisponíveis =- 1;
        }
    }
}