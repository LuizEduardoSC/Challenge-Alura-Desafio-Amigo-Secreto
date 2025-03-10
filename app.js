//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista que armazenará os nomes dos amigos
let amigos = [];

const input = document.getElementById("amigo");

// Adiciona um ouvinte para o evento "keydown"
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada foi "Enter"
        adicionarAmigo(); // Chama a função para adicionar o nome
    }
});

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");  // Pegar o campo de texto onde o usuário insere o nome.
    const nomeAmigo = input.value.trim();  // O método .trim() remove espaços em branco no início e no fim do texto, garantindo que só o nome digitado será considerado.

    if (nomeAmigo === "") {  // Nesta linha: Se o campo mome estiver vazio
        alert("Por favor, insira um nome válido!");  // Nesta linha: Retorna um alert solicitando que digite um nome válido.
        return;  // Nesta linha: Retorna para o estado inicial.
        //  Se o nome estiver vazio (ou seja, o usuário não digitou nada), um alerta aparece e a função termina (com o comando return).
    }

    amigos.push(nomeAmigo);  // Serve para inserir o nome no array.
    atualizarLista();  // Serve para atualizar a lista com o nome recem adicionado.
    input.value = "";  // Limpa o campo de texto após adicionar o nome a lista
}

// Função para atualizar a lista visível na página
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");  // Seleciona o elemento <ul> no HTML
    lista.innerHTML = ""; // Limpa a lista antes de atualizá-la (Isso garante que os elementos antigos serão removidos antes de adicionar os novos. Evita duplicação.)

    amigos.forEach((amigo) => {
        const item = document.createElement("li"); // Para cada nome no array amigos, um elemento <li> (item da lista) é criado.
        item.textContent = amigo;  // O texto desse item recebe o nome do amigo.
        item.classList.add("name-item");  // Uma classe CSS chamada "name-item" é adicionada ao item para estilização.
        lista.appendChild(item);  // O item é então anexado à lista visível no HTML (appendChild).
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {  // Validar se há pelo menos 2 nomes na lista:
        alert("É necessário adicionar pelo menos 2 nomes para realizar o sorteio!");  // Caso o array amigos esteja vazio, o programa exibe um alerta e termina a execução da função.
        return;  // Retorna ao estado anterior(Impedindo que o sorteio comece).
    }

    // Sortear um índice aleatório:
    const indiceSorteado = Math.floor(Math.random() * amigos.length);  // O método Math.random() gera um número decimal entre 0 e 1. Multiplicamos pelo tamanho do array e usamos Math.floor() para arredondar para baixo, obtendo um índice válido.

    // Selecionar o amigo sorteado:
    const amigoSorteado = amigos[indiceSorteado];  // Usamos o índice gerado aleatoriamente para pegar um nome do array amigos.

    // Exibir o resultado:
    const resultado = document.getElementById("resultado");  // Aqui, estamos localizando um elemento específico no HTML que tem o atributo id="resultado". Esse é o <ul> onde o resultado do sorteio será exibido.

    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;  // O nome sorteado é exibido dinamicamente dentro de um elemento <ul> com o ID resultado.
}
