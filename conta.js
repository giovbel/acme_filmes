'use strict'

function validarCriacaoConta() {
    var nomeUsuario = document.getElementsByName('nomeUsuario')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var confirmacaoEmail = document.getElementsByName('confirmacaoEmail')[0].value;
    var senha = document.getElementsByName('senha')[0].value;

    if (nomeUsuario.trim() === '' || email.trim() === '' || confirmacaoEmail.trim() === '' || senha.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }

    if (email !== confirmacaoEmail) {
      alert('Os campos de e-mail não coincidem. Por favor, verifique.');
      return false;
    }

    window.location.href = './conta.html';
    return false;
  }

  document.querySelector('.criar-conta-btn').addEventListener('click', validarCriacaoConta);