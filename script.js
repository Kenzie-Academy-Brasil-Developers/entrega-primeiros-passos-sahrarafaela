
let refrigerante = Number (prompt ("Qual o valor do refrigerante?"))
let macarrao = Number (prompt ("Qual o valor do macarrao?"))
let ervilha = Number (prompt ("Qual o valor da ervilha?"))
let arroz = Number (prompt ("Qual o valor do arroz?"))
let feijao = Number (prompt ("Qual o valor do feijao?"))
const vinho = 70.00
let totalCompra = (refrigerante*3) + (macarrao*4) + (ervilha*3) + (arroz*3) + (feijao*2)
let elepaga = vinho*3
let totalDividido = (totalCompra/2) + elepaga
let total = (alert(`O valor total da compra é  ${totalCompra+elepaga}`))

if (totalCompra%2 == 0){
   alert(`Deu par!! Eu vou pagar: ${totalCompra/2} e você: ${totalDividido}`)
} else { 
    alert(`Deu ímpar!! Cada um paga ${totalDividido}`)
}