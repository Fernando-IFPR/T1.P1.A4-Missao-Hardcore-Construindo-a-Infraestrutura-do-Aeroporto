import Voo from './Voo.js';

export function executarRegistro() {
    const msg = document.getElementById("avisoSistema");
    const cod = document.getElementById("campoCodigo").value;
    const ori = document.getElementById("campoOrigem").value;
    const des = document.getElementById("campoDestino").value;

    try {
        const novoVoo = new Voo(cod, ori, des);
        msg.innerText = `✈️ Voo ${novoVoo.codigo} registrado com sucesso!`;
        msg.style.color = "green";
    } catch (erro) {
        msg.innerText = erro.message;
        msg.style.color = "red";
    }
}