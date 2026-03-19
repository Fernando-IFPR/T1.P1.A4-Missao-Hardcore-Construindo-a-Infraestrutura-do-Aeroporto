//Arquivo: src/models/Bagagem.js

class Bagagem {
    numTotalBagagems  = 0;
    bagagemID = ['']; //ID da bagagem (Ligada a passagem)
    bagagemPeso;
    bagagemPerigosa;
    bagagemItens = [''];

    defNumTotalDeBagagens (numTotalBagagems) {
        this.bagagemID.forEach(
            numTotalBagagems =+ 1
        );
    }

    defBagagemPerigosa (bagagemPerigosa) {
        if ('Faca, Arma'.toLowerCase in this.bagagemItens) {
            bagagemPerigosa = true;
        }
    }
}