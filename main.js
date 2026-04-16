const prompt = require("prompt-sync")();

let opcaoUsuario;
let listaLembretes = [];

function exibirMenu(){
    console.log(`
    === Programa de Lembretes ===
    1. Adicionar lembrete
    2. Listar lembrete
    3. Editar lembrete
    4. Marcar lembrete como concluído
    5. Excluir lembrete
    6. Sair
    `)
    opcaoUsuario = Number(prompt("Escolha uma das opções. R: "));
    switch(opcaoUsuario){
        case 1:
            adicionarLembrete();
            break;
        case 2:
            listarLembrete();
            break;
        case 3:
            editarLembrete();
            break;
        case 4:
            concluirLembrete();
            break;
        case 5:
            excluirLembrete();
            break;
        case 6:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            exibirMenu();
            break;
    }
}

function adicionarLembrete(){
    let tituloLembrete = prompt("Qual o título do lembrete? R: ");
    let descricaoLembrete = prompt("qual sera a descrição? R: ");
    let status = "PENDENTE"
    listaLembretes.push(tituloLembrete, descricaoLembrete, status)
    console.log(listaLembretes)
    exibirMenu()
}

exibirMenu()
function listarLembrete(){
    console.table(listaLembretes)
    exibirMenu()
}

