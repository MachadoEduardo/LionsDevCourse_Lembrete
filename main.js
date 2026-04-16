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
    console.clear();
    let tituloLembrete = prompt("Qual o título do lembrete? R: ");
    let descricaoLembrete = prompt("Qual será a descrição? R: ");
    let status = "PENDENTE"

    let lembrete = {tituloLembrete, descricaoLembrete, status};

    listaLembretes.push(lembrete);
    console.log("Lembrete adicionado com sucesso!");
    exibirMenu()
}

exibirMenu()
function listarLembrete(){
    console.clear()
    if(listaLembretes.length < 1){
        console.clear()
        console.log("Não existem lembretes cadastrados.");
        return exibirMenu()
    }
    console.log("Lista dos lembretes cadastrados abaixo.");

    for(i = 0; i < listaLembretes.length; i++){
        console.log(`${i + 1}. Título: ${listaLembretes[i].tituloLembrete} | Descrição: ${listaLembretes[i].descricaoLembrete} | Status: ${listaLembretes[i].status}`)
    }

    opcaoUsuario = prompt("Aperte enter para continuar...");
    console.clear()
    exibirMenu()
}

function editarLembrete() {
    if (listaLembretes.length == 0) {
        console.log("Nenhum lembrete.");
        return;
    }

    listarLembrete();

    let num = prompt("Qual lembrete editar? ");
    let i = num - 1;

    if (i < 0 || i >= listaLembretes.length) {
        console.log("Invalido.");
        return;
    }

    let novo = prompt("Novo texto: ");
    let prazo = prompt("Novo prazo: ");

    listaLembretes[i].lembrete = novo;
    listaLembretes[i].prazo = prazo;

    console.log("Editado.");
}