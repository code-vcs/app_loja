
// 14 input

let inp = document.getElementsByTagName('input');

// CONFIG BANCO-DADOS

// verificando se banco existe se nao crie um banco para mim
window.onload = () => {
    //focus no input
    inp[1].focus();

    let db_banco = localStorage.getItem("chaveCliente");
    if (db_banco == null) {
        localStorage.setItem("chaveCliente", JSON.stringify([]));
    }
}

// função limpar campos input
function clearInput() {
    setTimeout(() => {
        for (let c = 0; c < inp.length; c++) {
            inp[c].value = "";
            window.location.reload()
        }
    }, 100)
}



// CADASTRANDO CLIENTE NO BANCO

function cadastrarCliente() {
    let db_cliente = JSON.parse(localStorage.getItem("chaveCliente"));

    db_cliente.filter((el) => { // verificando se determinao valor existe no banco
        let cpfExist = inp[2].value;
        if (cpfExist == el.cpf) {
            alert("Cliente ja Cadastrado " + "Nome: " + el.cliente
                + " " + "CPF: " + " " + el.cpf);
            window.location.reload();

        }

    })

    if (inp[1].value == "" || inp[2].value == "" || inp[3].value == "" || inp[4].value == "" || inp[5].value == "" || inp[6].value == "" || inp[7].value == "" ||
        inp[8].value == "" || inp[9].value == "" || inp[10].value == "" || inp[11].value == "" || inp[12].value == "" || inp[13].value == "") {
        alert("Favor verificar os campos vazios cadastrados")
    } else {

        let cliente = {
            'cliente': `${inp[1].value}`,
            'cpf': `${inp[2].value}`,
            'cnpj': `${inp[3].value}`,
            'rg': `${inp[4].value}`,
            'tel_1': `${inp[5].value}`,
            'tel_2': `${inp[6].value}`,
            'cel_1': `${inp[7].value}`,
            'cel_2': `${inp[8].value}`,
            'cep': `${inp[9].value}`,
            'uf': `${inp[10].value}`,
            'localidade': `${inp[11].value}`,
            'logradouro': `${inp[12].value}`,
            'bairro': `${inp[13].value}`,
            'obs': `${inp[14].value}`,
        }

        let db_client = JSON.parse(localStorage.getItem('chaveCliente'));
        db_client.push(cliente);

        localStorage.setItem("chaveCliente", JSON.stringify(db_client));
        alert("Cadastrado com sucesso .... .. .")
        clearInput()
    }

}

// criando um array list no campo consultar
let listarCliente = document.getElementById("listar-cliente")

inp[0].addEventListener('focus', () => {
    let db_cliente = JSON.parse(localStorage.getItem("chaveCliente"));

    db_cliente.forEach((el) => {
        let opt = document.createElement("option");
        opt.setAttribute('value', `${el.cpf}`);
        listarCliente.appendChild(opt);

    })
})
// CARREGANDO OS  CAMPOS COM O METODO FILTER PEGANDO O VALOR DO CAMPO CONSULTAR
function consultarCliente() {
    let db_cliente = JSON.parse(localStorage.getItem("chaveCliente"));

    db_cliente.filter((element) => {
        let existe = inp[0].value
        if (existe == element.cpf) {
            inp[1].value = element.cliente;
            inp[2].value = element.cpf
            inp[3].value = element.cnpj
            inp[4].value = element.rg
            inp[5].value = element.tel_1
            inp[6].value = element.tel_2
            inp[7].value = element.cel_1
            inp[8].value = element.cel_2
            inp[9].value = element.cep
            inp[10].value = element.uf
            inp[11].value = element.localidade
            inp[12].value = element.logradouro
            inp[13].value = element.bairro
            inp[14].value = element.obs

        }
    })

}




// BUTTON DELETAR DADOS DO BANCO
function btDeletarCadastro() { // criei um eveno do tipo click
    let db_cliente = localStorage.getItem("chaveCliente");  // string
    let arrayChaveCliente = JSON.parse(db_cliente); // array object

    arrayChaveCliente.map((el, index) => { // retornara  array de object
        let cpf = inp[0].value; // capturar o valor do input na posicao [0]
        if (cpf == el.cpf) { // criando uma condicao se o value exite se sim execute
            let confirmar = confirm("Deseja realmente deletar " + el.cliente);
            if (confirmar == true) { // condicao se sim execute
                arrayChaveCliente.splice(index, 1); // PEGANDO O PROPIO ARRAY INDICANDO A POSIÇÃO DO ELEMENTO A SER REMOVIDO DO BANCO
            } else {
                window.location.reload();
            }
        }
        localStorage.setItem('chaveCliente', JSON.stringify(arrayChaveCliente));
        // limpando campos
        clearInput();
    })
}


inp[9].addEventListener('keyup', (x) => {
    if(x.key == "Enter"){
        let cep = inp[9].value.replace('-','');        
        url = `https://viacep.com.br/ws/${cep}/json/`
       let opt = {'method':'GET',}
        fetch(url,opt)
        .then(resp => resp.json())
        .then(date => {
            inp[10].value=date.uf;
            inp[11].value=date.localidade;
            inp[12].value=date.logradouro;
            inp[13].value=date.bairro;
        })
    }
})












// eventos
document.querySelector("#btCadastrar").addEventListener('click', cadastrarCliente);
document.querySelector("#btConsultar").addEventListener('click', consultarCliente);
document.querySelector("#btDeletar").addEventListener('click', btDeletarCadastro)