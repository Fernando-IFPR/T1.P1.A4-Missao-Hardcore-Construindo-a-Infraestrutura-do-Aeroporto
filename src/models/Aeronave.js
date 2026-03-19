// Arquivo: src/models/Aeronave.js

/**
 * Classe que representa o avião e seus status gerais.
 * Ela guarda as informações da aeronave para saber se está no chão, no ar, núm. de passageiros, etc.
 */
class Aeronave {
    
    /**
     * O método construtor é chamado quando se requere status de uma aeronave.
     * @param {string} aeronave - Nome do avião.
     * @param {string} aeronaveNum - Número do avião.
     * @param {string} numDePassageiros - o número de passageiros.
     * @param {string} status - Define se ele está no ar ou não.
     * @param {string} destino - Para onde ele vai.
     */
    constructor(aeronave, aeronaveNum, numDePassageiros, status, destino) {
        // Atributos de identificação
        this.aeronave = aeronave;
        this.aeronaveNum = aeronaveNum;

        //Informações da aeronave
        this.numDePassageiros = numDePassageiros;
        this.destino = destino;
        
        // Atributo de estado.
        this.status = status;
        
    }

    //Método responsável de prover os status
    requerimentoDeStatus() {
        console.log(this.status);
    }


}

// Exporta a classe para ser usada em outros arquivos (Modularização)
export default Aeronave;