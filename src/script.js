
let ifrm = document.getElementsByTagName("iframe");
let inp = document.getElementsByTagName("input");
// localStorage.clear()
// timer
setInterval(() => {

    let dt = document.querySelector('.timer');
    let timer = new Date;
    let dia = timer.getDate();
    let mes = timer.getMonth() + 1;
    let ano = timer.getFullYear();
    let hora = timer.getHours();
    let minuto = timer.getMinutes();
    let segundo = timer.getSeconds();

    dia < 10 ? (dia = '0' + dia) : dia;
    hora < 10 ? (hora = '0' + hora) : hora;
    minuto < 10 ? (minuto = '0' + minuto) : minuto;
    segundo < 10 ? (segundo = '0' + segundo) : segundo;
    dt.innerHTML = `<span style="font-size:10pt;">Data: ${dia} / ${mes} / ${ano}</span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<span style="font-size:10pt;">Horario: ${hora}:${minuto}:${segundo}</span>`;
}, 1000)

let db_usuario = JSON.parse(localStorage.getItem("chave_usuario"));
window.onload = () => {

    ifrm[0].src = './views/home.html';
    // localStorage.clear();
    if (db_usuario == null) {
        localStorage.setItem("chave_usuario", JSON.stringify([]));
    }

}

//logar
document.getElementById("linkCadastrar").addEventListener("click", () => {
    document.querySelector(".container-cadastrar").style = "display:block;"
})

document.getElementById("btLogar").addEventListener("click", () => {
    /*const fil = */ db_usuario.filter((el, id) => {
    let filNome = inp[0].value;
    let filSenha = inp[1].value;
    if (el.usuario == filNome && el.senha == filSenha) {
        ifrm[0].style = "display:block;"
        document.querySelector(".container-log").style = "display:none;";
        document.querySelector(".container-button-controler").style = "display:block;";
        document.querySelector(".container-cadastrar").style="display:none;";
    }
})
    inp[0].value = "";
    inp[1].value = "";
})


document.querySelector("#btValidar").addEventListener("click", () => {
    if (document.querySelector("#senha-adm").value == 123) {
        inp[2].remove();
        document.querySelector("#btValidar").remove();
        for (let i = 2; i < 6; i++) {
            inp[i].disabled = "";
            document.querySelector("#btCadastrar").disabled = "";
            document.querySelector("#btRestaurar").disabled = "";
        }
    }
})

document.querySelector("#btRestaurar").addEventListener("click", () => {
    let inputRest = document.createElement("input");
    inputRest.setAttribute("placeholder", "Deseja realmente Apagar o Banco");
    inputRest.setAttribute("class", "codigoDbDeletar");
    document.querySelector(".row-cadastrar").appendChild(inputRest);
    let inDelet = document.querySelector(".codigoDbDeletar");
    inDelet.addEventListener("keyup", (x) => {
        if (x.key == "Enter" && inDelet.value == 123) {
            let conf = confirm("Desejá Realmente \nApagar oBanco isso não Terar\nRetorno !");
            if (conf == true) {
                localStorage.clear();
                alert("Banco Deletado !");
                window.location.reload();
            }
        }
    })
})



function verificarCadastroExistente() {

    db_usuario.filter((elemet) => {
        let emailcadastrado = document.getElementById("email").value;
        if (emailcadastrado.includes(elemet.email)) {
            for (let i = 2; i < 6; i++) {
                inp[i].value = "";
            }
            alert("Usuario já Existente");
        }
    })
}

function verificarSenhaCadastrada() {
    let senha = document.querySelector("#senha");
    let confSenha = document.querySelector("#confirmar-senha");

    if (inp[4].value == confSenha.value) {

    } else {
        alert("Favor verificar senhas não confere !".toUpperCase());
        document.querySelector("#senha").value = "";
        document.querySelector("#confirmar-senha").value = "";
    }
}

document.getElementById("email").addEventListener("blur", () => {
    verificarCadastroExistente();
})

document.querySelector("#confirmar-senha").addEventListener("blur", () => {
    verificarSenhaCadastrada();
})

document.getElementById("btCadastrar").addEventListener("click", () => {
    let db = JSON.parse(localStorage.getItem("chave_usuario"));
    var dados = {
        'usuario': `${inp[2].value}`,
        'email': `${inp[3].value}`,
        'senha': `${inp[4].value}`,
        'conf_senha': `${inp[5].value}`,
    }
    if (inp[2].value == "" || inp[3].value == "" || inp[4].value == "" || inp[5].value == "") {
        alert("Favor preencher os campos vazios");
    } else {
        db.push(dados);
        localStorage.setItem("chave_usuario", JSON.stringify(db));
        document.querySelector(".container-cadastrar").style = "display:none";
        window.location.reload();
        alert("Usuario Cadastrado com sucesso....");
    }
})


window.addEventListener('keyup', (x) => {
    if (x.key == "F12") {
        let input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.setAttribute("class", "admin");
        input.placeholder = "Senha do Adm";
        document.querySelector(".container-button-controler").appendChild(input);
        input.style = "border:none;outline:none;text-align:center;margin-left:400px"

    }
})



// button x close
document.querySelector('#bt_close').addEventListener('click', () => {
    window.close()
})


// event button abertura dos html
function btCadProd() {
    ifrm[0].src = './views/cad_prod.html';
}

function btPdv() {
    ifrm[0].src = './views/pdv.html';
}

function btCliente() {
    ifrm[0].src = './views/cliente.html';
}

function btEstoque() {
    ifrm[0].src = './views/estoque.html';
}





