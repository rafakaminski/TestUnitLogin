
function Login(){

  var username = document.getElementById('name').value
  var password = document.getElementById('password').value
  
  
  if (logar(username,password)) { 
      window.location.href = "logado.html"
    }
  else {
     alert("Usuário ou Senha  inválida!")
  }

}



