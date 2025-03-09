let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();
    
    if (nome === "") {
        alert("Digite um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado.");
        return;
    }
    
    amigos.push(nome);
    nomeInput.value = "";
    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = {};
    
    for (let amigo of amigos) {
        let possiveis = sorteio.filter(a => a !== amigo);
        
        if (possiveis.length === 0) {
            return sortearAmigo();
        }
        
        let escolhido = possiveis[Math.floor(Math.random() * possiveis.length)];
        resultado[amigo] = escolhido;
        sorteio.splice(sorteio.indexOf(escolhido), 1);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    for (let [amigo, sorteado] of Object.entries(resultado)) {
        const item = document.createElement("li");
        item.textContent = `${amigo} -> ${sorteado}`;
        resultadoLista.appendChild(item);
    }
}
