var cadastrarPessoa = new Array();
var cadastrarIngredientes = new Array();

function pessoas() {
    var cadastroP = new Array();

    var nome = document.getElementById("nome");
    var crianca = document.getElementById("crianca");

    cadastroP.nome = nome.value;
    cadastroP.crianca = crianca.value;

    cadastrarPessoa.push(cadastroP);
    console.log(cadastrarPessoa);

    x();
    y();
    nome.value="";
    crianca.value="";
}

function ingredientes() {
    var cadastrarI = new Array();

    var ingrediente = document.getElementById("ingrediente");
    var adulto = document.getElementById("qntadulto");
    var crianca = document.getElementById("qntcrianca");
    var valor = document.getElementById("valoremquilo");

    cadastrarI.ingrediente = ingrediente.value;
    cadastrarI.adulto = adulto.value;
    cadastrarI.crianca = crianca.value;
    cadastrarI.valor = valor.value;

    cadastrarIngredientes.push(cadastrarI);
    console.log(cadastrarIngredientes);

    z();
    x();

    ingrediente.value="";
    adulto.value="";
    crianca.value="";
    valor.value="";

}

function x() {
    var tabela1 = document.getElementById("t1");
    tabela1.innerHTML="";

    for(i=0; i<cadastrarPessoa.length; i++) {
        var trPessoas = document.createElement("tr");
        var tdNome = document.createElement("td");
        var tdValor = document.createElement("td");

        var cadastroP = cadastrarPessoa[i];

        tdNome.innerText=cadastroP.nome;
        trPessoas.appendChild(tdNome);

        tdValor.innerText="R$ 0,00";
        trPessoas.appendChild(tdValor);

        tabela1.appendChild(trPessoas);

        var total = 0;
        for(var j=0; j<cadastrarIngredientes.length; j++) {
            
            var cadastrarI = cadastrarIngredientes[j];
            var valorTotal = "fazer";

            total += valorTotal;
            tdValor.innerText = "R$ " + total;
            trPessoas.appendChild(tdValor);
            tabela1.appendChild(trPessoas);

        }
        
    }

}

function y() {
    var tabela2 = document.getElementById("t2");
    tabela2.innerHTML="";

    for(i=0; i<cadastrarPessoa.length; i++) {
        var trLinha = document.createElement("tr");
        var tdNome = document.createElement("td");
        var tdCrianca = document.createElement("td");

        var cadastroP = cadastrarPessoa[i];

        tdNome.innerHTML = cadastroP.nome;
        trLinha.appendChild(tdNome);

        tdCrianca.innerHTML = cadastroP.crianca;
        trLinha.appendChild(tdCrianca);

        tabela2.appendChild(trLinha);
    }
}

function z() {
    var tabela3 = document.getElementById("t3");
    tabela3.innerHTML="";
    
    for(i=0; i<cadastrarIngredientes.length; i++) {
        var trIngredientes = document.createElement("tr");
        var tdNomeIngrediente = document.createElement("td");
        var tdQuantidade = document.createElement("td");

        var cadastrarI = cadastrarIngredientes[i];

        tdNomeIngrediente.innerHTML = cadastrarI.ingrediente;
        trIngredientes.appendChild(tdNomeIngrediente);

        

        for(j=0; j<cadastrarPessoa.length; j++) {
            var cadastroP = cadastrarPessoa[j];

            var total = parseFloat(cadastrarI.adulto)+parseFloat(cadastrarI.crianca)*parseFloat()

            tdQuantidade.innerHTML = ;

            trIngredientes.appendChild(tdQuantidade);
            

        }
        tabela3.appendChild(trIngredientes);
    }
}