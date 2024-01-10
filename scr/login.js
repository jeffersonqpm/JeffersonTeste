function logar(){

// var login = document.getElementById('login').value;
// var senha = document.getElementById('senha').value;

var login = document.formLogin.txtlogin.value;
var senha = document.formLogin.txtsenha.value;


// alert(senha);

if(login == "jeff" && senha=='123'){
    console.log("Hello world!");
   // window.location.href = 'index.html'
   

}else{
    alert('Login inválido')
}
}