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
    imprimirListaLembretes();
    let index = Number(prompt("Selecione qual dos lembretes deseja editar! R: ")) - 1;

    if(index > 0 && index <= listaLembretes.length){
        let tituloLembrete = prompt("Escreva o título do lembrete. R: ");
        let descricaoLembrete = prompt("Escreva a descrição do lembrete. R: ");
        let status = listaLembretes[index].status

        let lembreteEditado = {tituloLembrete, descricaoLembrete, status}

        listaLembretes[index] = lembreteEditado;
        console.clear()
        console.log("Lembrete editado com sucesso!");
        exibirMenu(); 
    } else {
        console.clear();
        console.log("Selecione um lembrete da lista.");
        editarLembrete();
    }
}

function imprimirListaLembretes() {
    if (listaLembretes.length < 1) {
        console.log("Não existem lembretes cadastrados.");
        return false;
    }
    console.log("Lista dos lembretes cadastrados:");
    for (let i = 0; i < listaLembretes.length; i++) {
        console.log(`${i + 1}. Título: ${listaLembretes[i].tituloLembrete} | Descrição: ${listaLembretes[i].descricaoLembrete} | Status: ${listaLembretes[i].status}`)
    }
    return true;
}

function concluirLembrete(){
    imprimirListaLembretes();
    let index = Number(prompt("Selecione qual dos lembretes deseja marcar como concluído! R: ")) - 1;

    if(index > 0 && index <= listaLembretes.length){
        listaLembretes[index].status = 'CONCLUÍDO';
        console.clear()
        console.log("Lembrete concluído com sucesso!");
        exibirMenu(); 
    } else {
        console.clear();
        console.log("Selecione um lembrete da lista.");
        concluirLembrete();
    }
}

exibirMenu()