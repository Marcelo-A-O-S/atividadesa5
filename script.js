let prato = Array()
var pilha = document.getElementById("Pratos")
let quantidade = 0;

function MostrarPratos()
{
    var alerta = document.getElementById("alerta")
    if(quantidade == 0)
    {
        alerta.style.display = "flex";
    }
    if(quantidade != 0)
    {
        var indice = quantidade - 1
        alerta.style.display = "none";
        pilha.innerHTML = ""
        for (let index = indice; index > -1; index--) {
            var pratos = `<prato id="${prato[index]}" class="Prato"  numero="${index}" ></prato>`

            pilha.innerHTML += pratos          
        }
        for (let index = 0; index < indice; index++) {
            console.log(prato[index])
            
        }
    }

}
function AdicionarPrato()
{
    prato[quantidade] = "Prato"+ quantidade; 
    quantidade = quantidade + 1;
    console.log("Prato Adicionado!")
    MostrarPratos()
}