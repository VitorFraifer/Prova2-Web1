const formCadastroUsuario = document.querySelector(".form-cadastro-usuario");
const formInputs = document.querySelectorAll(".form-input");
const btnCadastrarUsuario = document.querySelector(".cadastrar-usuario-btn");

const nomeUsuarios = [];
const cpfUsuarios = [];
const nascimentoUsuarios = [];
const enderecoUsuarios = [];

formCadastroUsuario.addEventListener("submit", (event) => {
    event.preventDefault();
    formInputs.forEach((input) => {
        if(input.classList.contains("name-input")){
            console.log(input.value);
            nomeUsuarios.push(input);
            console.log(nomeUsuarios.values);
            console.log(nomeUsuarios);
        }
        if(input.classList.contains("cpf-input")){
            console.log(input.value);
            cpfUsuarios.push(input);
            console.log(cpfUsuarios.values);
        }
        if(input.classList.contains("date-input")){
            console.log(input.value);
            nascimentoUsuarios.push(input);
            console.log(nascimentoUsuarios.values);
        }
        if(input.classList.contains("adress-input")){
            console.log(input.value);
            enderecoUsuarios.push(input);
            console.log(enderecoUsuarios.values);
        }
    })
})