
let inp = document.getElementsByTagName('input');
let listando = document.getElementById('listar');
let lstr = document.getElementById('lstr');

let db_banco = JSON.parse(localStorage.getItem('chave_produto')); // recebendo dados do banco
document.getElementById('btConsultar').addEventListener('click', () => {  // filtrando banco pelo posicao ref 
    db_banco.filter((el, index) => {
        let inpRef = (inp[0].value);

        if (inpRef.includes(el.ref)) {
            inp[1].value = el.cod_barra;
            inp[4].value = parseFloat(el.val_vend).toFixed(2);

            let increment = "Codigo: ( " + index + " ) ";
            inp[2].value = increment += " " + el.produto;

        }
    })

})

// fazendo um filtro no banco e retornando os valores
document.querySelector("#btConsultarProduto").addEventListener('click', () => {  // filtrando banco pelo posicao produto 

    db_banco.filter((el, index) => {
        let produto = (inp[2].value);
        if (produto.includes(el.produto)) {
            inp[0].value = el.ref;
            inp[1].value = el.cod_barra;
            inp[4].value = parseFloat(el.val_vend).toFixed(2);

            let increment = "Codigo: ( " + index + " ) ";
            inp[2].value = increment += " " + inp[2].value;
        }

    })
})





//FILTROS NOS INPUTS

// criando um list e retornando a mesma 
db_banco.forEach((element, index) => {
    let opt = document.createElement("option");
    opt.setAttribute('value', `Cod: ( ${index} ) ${element.produto}`);
    listando.appendChild(opt); // inserindo no datalist
});


// carregando

db_banco.forEach((element, index) => {
    let opt = document.createElement('option');
    opt.setAttribute('value', `${element.ref}`);
    lstr.appendChild(opt);
})


// efetuando calculo da compra e limpando os campos
function emptyInput() {
    for (let i = 0; i < inp.length; i++) {
        inp[i].value = ""
    }
}


let percent = document.getElementById("percent")
let total = document.querySelector('.total')
let descricao = document.querySelector(".descricao");


let num = 0;
document.querySelector('#btConfCompra').addEventListener('click', () => {
    let tot = parseFloat(total.value);
    let quant = parseFloat(inp[3].value);
    let valComp = parseFloat(inp[4].value);
    let desc = parseFloat(inp[5].value);

    let calc = quant * valComp;
    let calTot = tot = tot + calc

    // let calDesc = calc - desc;
    // let aplicarDesc = tot = tot - (desc + 0)

    if (inp[0].value == "" || inp[2].value == "" || inp[3].value == "" || inp[4].value == "") {
        alert("campos obrigatorios não preenchido !");
    } else {
        if (inp[3].value !== "" && inp[4].value !== "") {
            total.value = calTot.toFixed(2);
            setTimeout(() => {
                for (let x = 0; x < 5; x++) {
                    inp[x].value = "";
                }
            }, 500);
        }
        let incrementNum = num = num + 1;
        descricao.innerHTML += `
    <div class="container-descricao">
        <span>Item: </span>${incrementNum}<br>
        <span>Ref: </span>${inp[0].value}&nbsp;&nbsp;&nbsp;&nbsp;<span>Cod_Barra </span><span>${inp[1].value}
        <span>Prod  : </span>${inp[2].value}&nbsp;&nbsp;&nbsp;&nbsp;<span>Quant: </span><span>${inp[3].value}
        <span>Val_Unit: </span>${inp[4].value}&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        `
    }

})


document.querySelector('#btDesc').addEventListener('click', () => {
    let tot = parseFloat(total.value);
    let desc = parseFloat(inp[5].value);

    if (inp[5].value !== "") {
        let calc = tot = tot - desc;
        total.value = calc.toFixed(2);
        descricao.innerHTML+=`<p style=background:red;color:white;font-size:9pt;>Desc % ${desc.toFixed(2)}</p>`;
        inp[5].value = "";
        inp[5].disabled = true;
    }
})



// disable desconto
window.addEventListener('keyup', (x) => {
    if (x.key == "F7") {
        inp[5].disabled = ""
        document.querySelector("#btDesc").disabled = "";
    }
})


// FINALIZAR PEDIDO
let positionFinalizarPagamento = document.querySelector(".pagar").getBoundingClientRect().y;
document.querySelector("#btFifalizarPedlido").addEventListener("click", () => {
    scroll({
        top:positionFinalizarPagamento,
        behavior:"smooth",
    })

    document.querySelector(".valor-pagamento").innerHTML=`R$ ${document.querySelector(".total").value}`;

})























