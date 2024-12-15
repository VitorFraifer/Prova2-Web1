const formCadastroUsuario = document.querySelector(".form-cadastro-usuario");
const formInputs = document.querySelectorAll(".form-input");
const btnCadastrarUsuario = document.querySelector(".cadastrar-usuario-btn");
const btnExibirUsuario = document.querySelector(".exibir-contatos");
const exibirContatosContainer = document.querySelector(".contatos-container");

const nomeUsuarios = [];
const cpfUsuarios = [];
const nascimentoUsuarios = [];
const enderecoUsuarios = [];


//Cadastro de Usuário

btnCadastrarUsuario.addEventListener("click", (event) => {
    event.preventDefault();
    cadastrarUsuario();
    limparInputs();
})

btnExibirUsuario.addEventListener("click", exibirContatos);

function cadastrarUsuario(){
    const inputCPF = document.querySelector(".cpf-input");
    if(cpfUsuarios.includes(inputCPF.value)){
        alert("CPF já cadastrado");
        return 0;
    }
    else{
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
        alert("Usuário Cadastrado com Sucesso")
    }
}

//Exibir Contatos
function exibirContatos(){

    exibirContatosContainer.innerHTML = ""; //Limpando container para que não haja duplicação dos mesmos cards

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

//Excluindo Usuário:
const btnRemoverCpf = document.querySelector("#btnremovercpf");
btnRemoverCpf.addEventListener("click", () => {
    excluirDadosContato(captarCpfParaRemover());
    alert("Usuário Removido");
    modalContainerRemover.style.display = "none";
    exibirContatos();

})

//Função para captar o cpf digitado no modal
function captarCpfParaRemover(){
    const inputRemoverCpf = document.querySelector(".inputCpfRemover");
    return inputRemoverCpf.value;
}

//Função para excluir os dados daquele CPF
function excluirDadosContato(cpf){
    cpfUsuarios.forEach((cpfitem, index) => {
        if(cpfitem == cpf){
            cpfUsuarios.splice(index, 1);
            nomeUsuarios.splice(index, 1)
            enderecoUsuarios.splice(index, 1)
            nascimentoUsuarios.splice(index, 1)
        }
    })
}

//Função para limpar os inputs após 'submit' do formulário
function limparInputs(){
    formInputs.forEach((input) => {
        input.value = "";
    })
}

//Buscar Contato
function captarCpfParaBuscar(){
    const inputBuscarCpf = document.querySelector(".inputCpfBuscar");
    return inputBuscarCpf.value;
}

function buscarDadosContato(cpf){
    let cpfEncontrado = 0;
    cpfUsuarios.forEach((cpfitem, index) => {
        if(cpfitem == cpf){
            alert(
                "Nome: " + nomeUsuarios[index] + "\n" +
                "CPF: " + cpfUsuarios[index] + "\n" +
                "Nascimento: " + nascimentoUsuarios[index] + "\n" +
                "Endereço: " + enderecoUsuarios[index]
            );
            cpfEncontrado = 1;
        }
    })
    if(cpfEncontrado == 0){
        alert("CPF não Encontrado");
    }
}

const btnBuscarCpf = document.querySelector("#btnbuscarcpf");
btnBuscarCpf.addEventListener("click", () => {
   buscarDadosContato(captarCpfParaBuscar());
    modalContainerBuscar.style.display = "none";

})


//MODAL:

//Fechar Modal:

const btnFecharModalBuscar = document.querySelector(".fechar-modal-buscar");
const btnFecharModalRemover = document.querySelector(".fechar-modal-remover");
const modalContainerBuscar = document.querySelector("#modalBuscar");
const modalContainerRemover = document.querySelector("#modalRemover");

btnFecharModalBuscar.addEventListener("click", () => {
    modalContainerBuscar.style.display = "none";
})

btnFecharModalRemover.addEventListener("click", () => {
    modalContainerRemover.style.display = "none";
})

//Abrir Modal:
const btnBuscarUsuario = document.querySelector(".btn-buscar-contato");
const btnRemoverUsuario = document.querySelector(".btn-remover-contato");

btnBuscarUsuario.addEventListener("click", () => {
    modalContainerBuscar.style.display = "flex";
})

btnRemoverUsuario.addEventListener("click", () => {
    modalContainerRemover.style.display = "flex";
})