function obterMensagens() {

    var retorno = [];

    var consulta = $.ajax({
        url: 'https://app-p2-js-ce71c114995f.herokuapp.com/mensagens',
        method: 'GET',
        dataType: 'json',
        async: false
    }).fail(function () {
        return retorno;
    });

    consulta.done(function (data) {
        retorno = data;
    });

    return retorno;
}

function inserirMensagem(mensagem) {

    $.ajax({
        url: 'https://app-p2-js-ce71c114995f.herokuapp.com/mensagens',
        method: 'POST',
        data: JSON.stringify(mensagem),
        dataType: 'json',
        async: false,
        contentType: 'application/json'
    });
}

function validarUsuario(objLoginSenha) {

    var retorno = false;

    var validacao = $.ajax({
        url: 'https://app-p2-js-ce71c114995f.herokuapp.com/usuarios/validar',
        method: 'POST',
        dataType: 'json',
        async: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        contentType: 'application/json',
        data: JSON.stringify(objLoginSenha)
    }).fail(function () {
        return retorno;
    });

    validacao.done(function (data) {
        retorno = data;
    });

    return retorno;
}

$(document).ready(function () {

    var botaoContato = document.querySelector(".button");

    if (botaoContato) {

        botaoContato.addEventListener("click", function (event) {

            event.preventDefault();

            var nome = document.getElementById("nome").value;
            var email = document.getElementById("email").value;
            var msg = document.getElementById("msg").value;

            var mensagem = {
                nome: nome,
                email: email,
                mensagem: msg
            };

            inserirMensagem(mensagem);

            alert("Mensagem enviada com sucesso!");

            document.getElementById("nome").value = "";
            document.getElementById("email").value = "";
            document.getElementById("msg").value = "";

        });

    }

    var btnLogin = document.getElementById("btnLogin");

    if (btnLogin) {

        btnLogin.addEventListener("click", function (event) {

            event.preventDefault();

            var email = document.getElementById("email").value;
            var senha = document.getElementById("senha").value;

            var objLoginSenha = {
                email: email,
                senha: senha
            };

            var retorno = validarUsuario(objLoginSenha);

            if (retorno == true) {
                window.location.href = "mensagens.html";
            } else {
                alert("E-mail e Senha inválidos");
            }

        });

    }

});