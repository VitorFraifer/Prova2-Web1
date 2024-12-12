const formCadastroUsuario = document.querySelector(".form-cadastro-usuario");
const formInputs = document.querySelectorAll(".form-input");
const btnCadastrarUsuario = document.querySelector(".cadastrar-usuario-btn");
const btnExibirUsuario = document.querySelector(".exibir-contatos");
const exibirContatosContainer = document.querySelector(".contatos-container");

const nomeUsuarios = [];
const cpfUsuarios = [];
const nascimentoUsuarios = [];
const enderecoUsuarios = [];

btnCadastrarUsuario.addEventListener("click", (event) => {
    event.preventDefault();
    cadastrarUsuario();
    limparInputs();
})

btnExibirUsuario.addEventListener("click", exibirContatos);

function cadastrarUsuario(){
    formInputs.forEach((input) => {
        if(input.classList.contains("name-input")){
            console.log(input.value);
            nomeUsuarios.push(input.value);
        }
        if(input.classList.contains("cpf-input")){
            console.log(input.value);
            cpfUsuarios.push(input.value);
        }
        if(input.classList.contains("date-input")){
            console.log(input.value);
            nascimentoUsuarios.push(input.value);  
        }
        if(input.classList.contains("adress-input")){
            console.log(input.value);
            enderecoUsuarios.push(input.value);
        }
    })
}

function exibirContatos(){
    nomeUsuarios.forEach((item, index) => {
        const card = criarCardContato(nomeUsuarios, cpfUsuarios, nascimentoUsuarios, enderecoUsuarios, index)
        exibirContatosContainer.appendChild(card);
    })
}

function criarCardContato(nomeUsuarios, cpfUsuarios, nascimentoUsuarios, enderecoUsuarios, identificador){
    const card = document.createElement("div");
    card.className = "card-contato";

    // Cria e insere o título
    const titulo = document.createElement("h2");
    titulo.textContent = nomeUsuarios[identificador];
    card.appendChild(titulo);

    // Cria e insere o CPF
    const cpf = document.createElement("p");
    cpf.innerHTML = `<strong>CPF: </strong>${cpfUsuarios[identificador]}`;
    card.appendChild(cpf);

    // Cria e insere a data de nascimento
    const nascimento = document.createElement("p");
    nascimento.innerHTML = `<strong>Data de Nascimento: </strong>${nascimentoUsuarios[identificador]}`;
    card.appendChild(nascimento);

    // Cria e insere o endereço
    const endereco = document.createElement("p");
    endereco.innerHTML = `<strong>Endereço: </strong>${enderecoUsuarios[identificador]}`;
    card.appendChild(endereco);

    return card;
}

function excluirContato(cpf){
    cpfUsuarios.forEach((cpfitem, index) => {
        if(cpfitem == cpf){
            cpfUsuarios.splice(index, 1);
            nomeUsuarios.splice(index, 1)
            enderecoUsuarios.splice(index, 1)
            nascimentoUsuarios.splice(index, 1)
        }
    })
}

function limparInputs(){
    formInputs.forEach((input) => {
        input.value = "";
    })
}