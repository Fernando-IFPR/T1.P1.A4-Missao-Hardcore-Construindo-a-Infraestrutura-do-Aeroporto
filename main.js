import { executarRegistro } from './src/painel.js';

// Adiciona o evento de clique ao botão assim que o sistema carrega
const botao = document.getElementById("btnRegistrar");

if (botao) {
    botao.addEventListener("click", executarRegistro);
}

console.log("Sistema do Aeroporto: Online (Main carregado na raiz)");