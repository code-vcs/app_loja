
let inp = document.getElementsByTagName('input');
let select = document.getElementsByTagName('select');
let btCad = document.querySelector('#btcadastrar');

window.onload = () => {
    let dbBanco = localStorage.getItem("chave_produto"); // retorna null
    if (dbBanco == null) {
        localStorage.setItem("chave_produto", JSON.stringify([])); // cria um array vazio no banco
    }
}

// inserindo dados no banco
// 0 2 4 5 6
function db_prod_env() {

    if(inp[0].value == "" || inp[2].value == "" || inp[4].value == "" || inp[5].value == "" || inp[6].value == ""){
        alert("Campos não preenchidos !");
    }else{
        let db_object = {
            'produto': `${inp[0].value}`,
            'cod_barra': `${inp[1].value}`,
            'ref': `${inp[2].value}`,
            'color':`${inp[3].value}`,
            'quantidade': `${inp[4].value}`,
            'val_comp': `${inp[5].value}`,
            'val_vend': `${inp[6].value}`,
            'descricao_embalegem': select[0].value,
        }
        // chama o banco
        let verifiDb = JSON.parse(localStorage.getItem('chave_produto')); // carregando o banco
        verifiDb.push(db_object); // inserindo dados 
        localStorage.setItem('chave_produto', JSON.stringify(verifiDb)); // enviando ao banco

        for (let i = 0; i < inp.length; i++) {
            inp[i].value = ""
        }
        alert("Cadastro realizado com sucesso.... .. .")
    // }
    }
        
}








// Eventos
btCad.addEventListener('click', db_prod_env);
