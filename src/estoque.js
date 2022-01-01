let tabela = document.querySelector(".tabela");

let db_produto = JSON.parse(localStorage.getItem("chave_produto"));


db_produto.forEach((el, index) => {

    tabela.innerHTML += `
<tbody>
<td>${index}</td>
<td>${el.produto}</td>
<td>${el.cod_barra}</td>
<td>${el.ref}</td>
<td>${el.quantidade}</td>
<td><input type="search" id="numEstoque" class="numEstoque" placeholder="novo val estoque">
</td>

</tbody>
`
})

// function btAlt(ev){
    // forEach((el,id)=>{

    // })
// }
