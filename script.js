var linhaSelecionada = null

function onFormSubmit() {
    if (validar) {
        var formDados = lerDadosFormulario();
        if (linhaSelecionada == null) 
            inserirNovoRegistro(formDados);
        else 
        atualizarRegistro(formDados);
        redefinirFormulario();  
    
    }
}    

function lerDadosFormulario() {
    var formDados = {};
    formDados["nomeCompleto"] = document.getElementById("nomeCompleto").value;
    formDados["email"] = document.getElementById("email").value;
    formDados["salario"] = document.getElementById("salario").value;
    formDados["cidade"] = document.getElementById("cidade").value;

    return formDados;
}

function  inserirNovoRegistro(data) {
    var table = document.getElementById("empregadoLista").getElementsByTagName('tbody')[0];
    var novaLinha = table.insertRow(table.length);

    celula1 = novaLinha.insertCell(0);
    celula1.innerHTML = data.nomeCompleto;

    celula2 = novaLinha.insertCell(1);
    celula2.innerHTML = data.email;

    celula3 = novaLinha.insertCell(2);
    celula3.innerHTML = data.salario;

    celula4 = novaLinha.insertCell(3);
    celula4.innerHTML = data.cidade;

    celula4 = novaLinha.insertCell(4);
    celula4.innerHTML =   `<a onClick="naEdicao(this)">Editar</a>
                            <a onClick="naExclusao(this)">Excluir</a>`
}

function redefinirFormulario() {
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("email").value = "";
    document.getElementById("salario").value = "";
    document.getElementById("cidade").value = "";

    linhaSelecionada = null;
}

function naEdicao(td) {
    linhaSelecionada = td.parentElement.parentElement;
    document.getElementById("nomeCompleto").value = linhaSelecionada.cells[0].innerHTML;
    document.getElementById("email").value = linhaSelecionada.cells[1].innerHTML;
    document.getElementById("salario").value = linhaSelecionada.cells[2].innerHTML;
    document.getElementById("cidade").value = linhaSelecionada.cells[3].innerHTML;
}

function atualizarRegistro(formDados) {
    linhaSelecionada.cells[0].innerHTML = formDados.nomeCompleto;
    linhaSelecionada.cells[1].innerHTML = formDados.email;
    linhaSelecionada.cells[2].innerHTML = formDados.salario;
    linhaSelecionada.cells[3].innerHTML = formDados.cidade;
}

function naExclusao(td) {
    if (confirm("Tem certeza de apagar esse registro?")) {
        linha = td.parentElement.parentElement;
        document.getElementById("empregadoLista").excluirLinha(linha.linhaIndex);
    }
}

function validar() {
    ehValido = true;
    if (document.getElementById("nomeCompleto").value == "") {
        ehValido = false;
        document.getElementById("nomeCompletoValidacaoError").classList.remove("hide");gv 
    } else {
        ehValido = true;
        if (!document.getElementById("nomeCompletoValidacaoError").classList.contains("hide")) {
            document.getElementById("nomeCompletoValidacaoError").classList.add("hide");    
        }

        return ehValido;
    }
}
