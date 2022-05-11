const form = document.getElementById("form1");
const username = document.getElementById("nome");
const email = document.getElementById("email");
const password = document.getElementById("senha");
const passwordconfirmation = document.getElementById("confirmesenha");

form.addEventListener("submit", (e) =>{
   e.preventDefault();
   //alert('enviando formulario..');

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordconfirmationValue = passwordconfirmation.value;

    if (usernameValue === ""){
        setErrorFor(username, "o nome é obrigatório.");
    } else{
        setSuccessFor(username);
    }
    if (emailValue === ""){
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor Insira um email válido");

    } else {
        setSuccessFor(email);
    }
    if (passwordValue ==="") {
        setErrorFor(password, "Uma senha é Obrigatória.");
    } else if (passwordValue.length < 7) {
        setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres");
    } else {
        setSuccessFor(password);
    }
    if (passwordconfirmationValue === ""){
        setErrorFor(passwordconfirmation, "A confirmação de senha é obrigatória");
    } else if (passwordconfirmationValue !== passwordValue ) {
        setErrorFor(passwordconfirmation, "As senhas não conferem");
    } else {
        setSuccessFor(passwordconfirmation);
    }
    const formcontrols = form.querySelectorAll('.form1')

        const formIsValid = [...formcontrols].every((formControl) => {
            return (formcontrol.className = "formcontrol Success");
        });
        
        if (formIsValid) {
            console.log("O cadastro está Concluído!");

        }    
    }   
    
function setErrorFor(input, message){
    const formcontrol = input.parentElement;
    const small = formcontrol.querySelector("small");

    //Adicionar a Mensagem de Erro
    small.innerText = message;

    //Adicionar a Classe de Erro
    formcontrol.className = "formcontrol error";
}

function setSuccessFor(input, message) {
    const formcontrol = input.parentElement;
    
    //adicionar a classe de sucesso
    formcontrol.className = "formcontrol success";
}
    //Verificação de Email
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
 
}
  