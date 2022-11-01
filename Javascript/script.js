let prato = Array()
var pilha = document.getElementById("Pratos")
let quantidade = 0;
//Esse metodo é relacionado a listagem de pratos
function MostrarPratos()
{
    var alerta = document.getElementById("alerta")
    if(quantidade == 0)
    {
        //Esse bloco de codigo é responsavel por avisar que a lista está vazia
        alerta.style.display = "flex";
        pilha.innerHTML = ""
    }
    if(quantidade != 0)
    {
        var indice = quantidade - 1
        alerta.style.display = "none";
        pilha.innerHTML = ""
        //Esse loop é responsavel por renderizar todos os pratos em ordem, de cima para baixo
        for (let index = indice; index > -1; index--) {
            var pratos = `<prato id="${prato[index]}" class="Prato"  numero="${index}" ></prato>`

            pilha.innerHTML += pratos          
        }
        //Esse loop é responsavel por listar no console, a lista de pratos dentro do array pratos
        for (let index = 0; index < prato.length; index++) {
            console.log(prato[index])
            
        }
    }

}
//Esse metodo é responsavel por adicionar pratos a lista
function AdicionarPrato()
{
    prato[quantidade] = "Prato"+ quantidade; 
    // A variavel controle serve para ter controle da quantidade de pratos sendo adicionado
    quantidade = quantidade + 1;
    console.log("Prato Adicionado!")
    MostrarPratos()
}
//Esse metodo é responsavel pela retirada dos pratos da lista
function RetirarPrato()
{
    //A variavel UltPrato é responsavel por pegar o ultimo prato
    var UltPrato = prato.length - 1
    console.log("O "+ prato[UltPrato] +" foi retirado da pilha")
    // A funcao splice(), serve para remover um valor da lista de array prato, pegando o indice do que deseja ser removido( que no caso sera o ultimo prato) e a quantidade que sera removido( como será removido apenas o ultimo, entao será apenas um valor) como parametro
    prato.splice(UltPrato, 1)
    quantidade = quantidade - 1

    MostrarPratos()
}
//Esse metodo é responsavel por limpar a mesa, removendo todos os pratos da lista
function LimparMesa()
{
    //Essa atribuicao de variavel serve para pegar a quantidade de valores salvos na lista de pratos para que em seguida possamm ser removidos
    var Todos = prato.length 
    //Esse loop serve para remover todos os valores de pratos da pilha de pratos, fazendo uma contagem até que o a quantidade atribuida a variavel index seja menor que zero
    for (let index = Todos; index > -1; index--)
    {
        //Nesse trecho de codigo, ele está simplesmente pegando a contador e removendo um por um até que a lista fique assim com 0 elementos, resumindo, vazia
        prato.splice(index, 1)
    }
    //Esse trecho de codigo serve para indicar ao proximo metodo que a quantidade de pratos foi modificada, podendo assim auxiliar o proximo codigo da laco de condicao
    quantidade = quantidade - Todos
    console.log("Todos os pratos foram removidos")
    MostrarPratos()

}