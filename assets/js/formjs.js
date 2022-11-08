function validaFormulario(){
    let pront = document.getElementById("Prontuario").value;
    let senha = document.getElementById("Senha").value;
    return confirm('Deseja confimar seus dados?');
    }

    function validaFormADM(){
  
    let email = document.getElementById("Email").value;
    let senha = document.getElementById("Senha").value;
    if(email=="admin@admin.com.br" && senha=="123"){
        alert("Usuário Autenticado");
     } else{
        alert("usuário e senha inválidos.");
    }

    } 

    function validaCadastro(){ 
        // retorna true se confirmado, ou false se cancelado
        return confirm('Deseja confimar seus dados?');
     }

