'use strict'

  function validarLogin() {
    
    var email = document.getElementsByName('email')[0].value;
    var senha = document.getElementsByName('senha')[0].value;


    if (email.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }

    var emailAutenticado = 'email@example.com';
    var senhaAutenticada = 'senha123';

    if (email !== emailAutenticado || senha !== senhaAutenticada) {
      alert('Informações inválidas. Por favor, tente novamente.');
      return false;
    }


    window.location.href = './home.html';

  
    return false;
  }

  document.querySelector('.login-btn').addEventListener('click', validarLogin);

